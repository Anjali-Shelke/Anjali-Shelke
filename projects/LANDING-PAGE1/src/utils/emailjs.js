import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sqjwf09";
const TEMPLATE_ID = "template_wcx4a4a";
const PUBLIC_KEY = "XgiHAGb6Vrl_Cjmqa";

export const sendContactEmail = async (data) => {
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      },
      PUBLIC_KEY
    );
    alert("Message sent successfully!");
  } catch (error) {
    alert("Failed to send message");
  }
};
