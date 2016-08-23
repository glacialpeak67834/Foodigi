//const client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');
// Send an SMS text message
var accountSid = process.env.twilio_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.twilio_Auth;   // Your Auth Token from www.twilio.com/console
var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

module.exports.sendSms = function(to, message){
  var outNum = '+1' + to;
  var goingMess = 'Hi somebody would like to for you to join them at ' + message;
  // client.sendMessage({

  //   to: '+15046215709', // Any number Twilio can deliver to
  //   from: Process.env.twilio_Number, // A number you bought from Twilio and can use for outbound communication
  //   body: 'word to your mother.', // body of the SMS message

  // }, function(err, responseData) { //this function is executed when a response is received from Twilio

  //     if (!err) { // "err" is an error received during the request, if any

  //         // "responseData" is a JavaScript object containing data received from Twilio.
  //         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
  //         // http://www.twilio.com/docs/api/rest/sending-sms#example-1

  //         console.log(responseData.from); // outputs "+14506667788"
  //         console.log(responseData.body); // outputs "word to your mother."

  //     }
  // });

  client.messages.create({
    body: goingMess,
    to: outNum,  // Text this number
    from: '+15045027088', // From a valid Twilio number
  }, (err, message) => {
      console.log(message.sid);
  });
};
// //Place a phone call, and respond with TwiML instructions from the given URL
// client.makeCall({

//     to:'+16515556677', // Any number Twilio can call
//     from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
//     url: 'http://www.example.com/twiml.php' // A URL that produces an XML document (TwiML) which contains instructions for the call

// }, function(err, responseData) {

//     //executed when the call has been initiated.
//     console.log(responseData.from); // outputs "+14506667788"

// });