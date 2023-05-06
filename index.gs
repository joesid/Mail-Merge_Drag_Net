//Create Script that can broadcast Emails on Google Workspace with Attachments

function sendEmails() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValue();
    var message = getLatestDraftBody();  //This get the latest Draft Message in user's inbox
}