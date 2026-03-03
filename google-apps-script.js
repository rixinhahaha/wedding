/**
 * Google Apps Script - RSVP Form Handler
 *
 * This script receives RSVP form submissions from your wedding website
 * and writes them to a Google Sheet.
 *
 * SETUP:
 * 1. Create a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Replace the default code with this entire file
 * 4. Click Deploy > New deployment
 * 5. Select "Web app" as the type
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and authorize
 * 9. Copy the Web app URL and paste it into script.js (GOOGLE_SCRIPT_URL)
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Attending',
        'Plus One',
        'Plus One Name',
        'Dietary Restrictions',
        'Dietary Details',
        'Plus One Dietary',
        'Message'
      ]);

      // Bold the header row
      sheet.getRange(1, 1, 1, 10).setFontWeight('bold');
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || '',
      data.email || '',
      data.attending || '',
      data.plusOne || '',
      data.plusOneName || '',
      data.dietary || '',
      data.dietaryDetails || '',
      data.plusOneDietary || '',
      data.message || ''
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: 'success', message: 'RSVP recorded' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok', message: 'Wedding RSVP API is running' })
  ).setMimeType(ContentService.MimeType.JSON);
}
