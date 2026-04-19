/**
 * Google Apps Script — Cosmic Soul Maps Form Handler
 * 
 * SETUP (2 minutes):
 * 1. Go to https://script.google.com → New Project
 * 2. Paste this entire file into Code.gs
 * 3. Click Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web app URL
 * 5. Replace PLACEHOLDER_APPS_SCRIPT_URL in:
 *    - site/index.html (horoscope signup)
 *    - site/horoscope-signup.html (horoscope signup)
 *    - site/order.html (order intake)
 * 
 * This creates TWO sheets in your Google Drive:
 * - "CSM Horoscope Signups" — free daily horoscope subscribers
 * - "CSM Order Intake" — reading orders (birth details)
 */

// Sheet names (auto-created if they don't exist)
const HOROSCOPE_SHEET = 'CSM Horoscope Signups';
const ORDER_SHEET = 'CSM Order Intake';

function doPost(e) {
  try {
    const data = e.parameter;
    
    // Detect form type based on fields present
    if (data.reading) {
      return handleOrder(data);
    } else if (data.sign) {
      return handleHoroscopeSignup(data);
    } else {
      return jsonResponse({ status: 'error', message: 'Unknown form type' });
    }
  } catch (err) {
    return jsonResponse({ status: 'error', message: err.toString() });
  }
}

function handleHoroscopeSignup(data) {
  const sheet = getOrCreateSheet(HOROSCOPE_SHEET, [
    'Timestamp', 'Name', 'Email', 'Sun Sign', 'Birthday'
  ]);
  
  // Check for duplicate email
  const emails = sheet.getRange(2, 3, Math.max(sheet.getLastRow() - 1, 1), 1).getValues().flat();
  if (emails.includes(data.email)) {
    return jsonResponse({ status: 'ok', message: 'Already subscribed', duplicate: true });
  }
  
  sheet.appendRow([
    new Date().toISOString(),
    data.name || '',
    data.email || '',
    data.sign || '',
    data.birthday || ''
  ]);
  
  // Send confirmation email (optional — comment out if not wanted)
  try {
    MailApp.sendEmail({
      to: data.email,
      subject: '✨ Welcome to Cosmic Soul Maps Daily Horoscope',
      htmlBody: `
        <div style="font-family:Georgia,serif;max-width:600px;margin:0 auto;background:#0a0a1a;color:#e8e6f0;padding:40px;border-radius:12px">
          <h2 style="color:#FFD700;margin-bottom:16px">Welcome, ${data.name}! ✨</h2>
          <p>You're signed up for your daily ${data.sign} horoscope from Cosmic Soul Maps.</p>
          <p>Your first horoscope arrives tomorrow morning at 6 AM MST. It's calculated from real planetary transits — not generic filler.</p>
          <hr style="border:none;border-top:1px solid #1e1e3f;margin:24px 0">
          <p style="color:#9896a8;font-size:14px">Want to go deeper? <a href="https://bmcgarybot.github.io" style="color:#b89eef">Explore our full readings</a></p>
        </div>
      `
    });
  } catch (emailErr) {
    // Email sending is best-effort; don't fail the signup
    Logger.log('Email send failed: ' + emailErr);
  }
  
  return jsonResponse({ status: 'ok', message: 'Subscribed successfully' });
}

function handleOrder(data) {
  const sheet = getOrCreateSheet(ORDER_SHEET, [
    'Timestamp', 'Reading Type', 'Full Name', 'Email', 'Birth Date', 'Birth Time',
    'Birth Place', 'Partner Name', 'Partner Birth Date', 'Partner Birth Time',
    'Partner Birth Place', 'Forecast Start', 'Notes', 'Payment Status'
  ]);
  
  sheet.appendRow([
    new Date().toISOString(),
    data.reading || '',
    data.fullName || '',
    data.email || '',
    data.birthDate || '',
    data.birthTime || '',
    data.birthPlace || '',
    data.partnerName || '',
    data.partnerBirthDate || '',
    data.partnerBirthTime || '',
    data.partnerBirthPlace || '',
    data.forecastStart || '',
    data.notes || '',
    'PENDING'  // Manual payment verification
  ]);
  
  // Notify yourself about new order
  try {
    MailApp.sendEmail({
      to: 'bmc.garybot@gmail.com',
      subject: '🔔 New CSM Order: ' + (data.reading || 'Unknown') + ' — ' + (data.fullName || 'Unknown'),
      htmlBody: `
        <h3>New Cosmic Soul Maps Order</h3>
        <p><strong>Reading:</strong> ${data.reading}</p>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Birth:</strong> ${data.birthDate} ${data.birthTime || '(no time)'} — ${data.birthPlace}</p>
        ${data.partnerName ? `<p><strong>Partner:</strong> ${data.partnerName} — ${data.partnerBirthDate}</p>` : ''}
        ${data.notes ? `<p><strong>Notes:</strong> ${data.notes}</p>` : ''}
        <hr>
        <p>Check the <a href="https://docs.google.com/spreadsheets">CSM Order Intake sheet</a> for full details.</p>
      `
    });
  } catch (emailErr) {
    Logger.log('Notification email failed: ' + emailErr);
  }
  
  return jsonResponse({ status: 'ok', message: 'Order received' });
}

function getOrCreateSheet(name, headers) {
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // If no active spreadsheet, create one
  if (!ss) {
    // Look for existing by name
    const files = DriveApp.getFilesByName(name);
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
    } else {
      ss = SpreadsheetApp.create(name);
    }
  }
  
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    // Bold header row
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// Allow GET requests for testing
function doGet(e) {
  return jsonResponse({ status: 'ok', message: 'Cosmic Soul Maps form handler is live' });
}
