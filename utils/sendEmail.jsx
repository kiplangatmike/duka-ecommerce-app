import axios from "axios";

const TextEncodingPolyfill = require("text-encoding");
Object.assign(global, {
  TextEncoder: TextEncodingPolyfill.TextEncoder,
  TextDecoder: TextEncodingPolyfill.TextDecoder,
});

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const sendEmail = async (email, subject, message) => {
  return axios({
    method: "post",
    url: "/api/send-mail",
    data: {
      email: email,
      subject: subject,
      message: message,
    },
  });
};

export default sendEmail;
