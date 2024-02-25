const client = require("twilio")('accountSid' , 'authToken');
const sendSMS = async (body) => {
    let msgOptions = {
        from: 'Contact_Number_Provided_By_Twilio',
        to: 'Your_Own_contact_number_of_twilio_account',
        body,
    };
    try {
        const messege = await client.messages.create(msgOptions);
        console.log(messege)
    }catch(err){
        console.log(err)
    }
}
sendSMS("Aap Kl Aaiye  Sab ke Saamne Aapko ko purpose Karungi")

