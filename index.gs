//Create Script that can broadcast Emails on Google Workspace with Attachments

function sendEmails() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValue();
    var message = getLatestDraftBody();  //This get the latest Draft Message in user's inbox

    for (var i =1; i< data.length; i++) {
        var firstName = date[i][0];
        var lastName = data[i][1];
        var email = data[i][2];
        var attachmentUrl = data[i][3];
        

        var personalizedMessage = message.replace('{First_Name}', firstName).replaccce('{Last_Name}', lastName);
        

    }
}


function readSheetData() {

    var spreadsheet = SpreadsheetApp.openById("SpreadSheet_Id")

    //var range = spreadsheet.getActiveRange();

    var range = spreadsheet.getRange("A:A");

    var data = range.getValues();

    console.log(data.length);    //check the data length
    

    for(var i = 0; i < data.lengh   ; i++)
    {
        var firstName = data[i][0];
        
        //find out the type of data printed
        console.log(firstName);  
    }
}

function sendEmailsWithAttachments() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var draft = GmailApp.getDrafts()[0]; // Assumes the most recent draft is the first one

  // Iterate through each row of data
  for (var i = 1; i < data.length; i++) {
    var firstName = data[i][0];
    var lastName = data[i][1];
    var email = data[i][2];
    var attachmentId = data[i][3];
    
    var personalizedBody = draft.getMessage().getBody()
      .replace("{{First_Name}}", firstName)
      .replace("{{Last_Name}}", lastName);

    var attachmentUrl = "https://drive.google.com/uc?export=download&id=" + attachmentId;
    var attachmentBlob = UrlFetchApp.fetch(attachmentUrl).getBlob();
    
    GmailApp.sendEmail(
      email,
      draft.getMessage().getSubject(),
      personalizedBody,
      { attachments: [attachmentBlob] }
    );
  }
}