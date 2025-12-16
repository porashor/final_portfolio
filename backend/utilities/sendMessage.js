import twilio from 'twilio';

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE;
const toPhone = process.env.ADMIN_PHONE;

const client = twilio(accountSid, authToken);

export const sendMessage =  async (message) =>{
    try {
        await client.messages.create({
            body: message,
            from: fromPhone,
            to: toPhone
        });
        console.log("Message sent successfully");
    } catch (error) {
        console.error("Failed to send message:", error);
    }
}