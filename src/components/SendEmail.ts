import { Resend } from "resend";
import {redirect} from  'next/navigation'

 
const resend = new Resend(process.env.RESEND_API_KEY);
export const SendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const name = formdata.get("name");
  const SenderEmail = formdata.get("SenderEmail");
  if (!message) {
    return {
      error: "Invalid message",
    };
  }
  await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: `darvaish49@gmail.com`,
    subject: `${name} From Portfolio.`,
    reply_to: `${SenderEmail}`,
    text: `sender email: ${SenderEmail} 
     ${message}`,
  });

return redirect('/')
 
  
};
