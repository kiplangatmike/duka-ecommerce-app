// import head from "@next/head";
import { useState } from "react";
import { sendEmail } from "../../../utils/sendEmail";
import useContactForm from "hooks/useContactForm";

const Contact = () => {
  const { values, handleChange } = useContactForm();
  const [responseMessage, setResponseMessage] = useState({
    isSuccessful: false,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const req = await sendEmail(values.email, values.subject, values.message);
      if (req.status === 250) {
        setResponseMessage({
          isSuccessful: true,
          message: "Thank you for your message.",
        });
      }
    } catch (e) {
      console.log(e);
      setResponseMessage({
        isSuccessful: false,
        message: "Oops something went wrong. Please try again.",
      });
    }
  };
  return (
    <div className="font-semibold flex-grow bg-white p-[20px] w-[30%] text-black content-center mx-auto my-[4%] rounded ">
      {/* <head>
        <title>Contact Us</title>
      </head> */}
      <h1 className="text-center text-[44px]">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="m-4 text-[20px] text-center justify-left"
      >
        <div className="m-2">
          <label htmlFor="name" className="p-2">
            Email
          </label>
          <input
            className="rounded bg-gray-300 px-2 py-1 focus:outline-none"
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <div className="m-2">
          <label htmlFor="name" className="p-2">
            Subject
          </label>
          <input
            className="rounded bg-gray-300 px-2 py-1 focus:outline-none"
            id="subject"
            type="text"
            value={values.subject}
            onChange={handleChange}
          />
        </div>

        <div className="m-2">
          <label htmlFor="message" className="p-2">
            Message:
          </label>
          <input
            className="rounded bg-gray-300 px-2 py-1 focus:outline-none"
            id="message"
            type="text"
            value={values.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            type="submit"
            value="submit"
            className="bg-pink-500 text-gray-300 px-3 py-1 mt-2 rounded font-bold hover:bg-pink-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
