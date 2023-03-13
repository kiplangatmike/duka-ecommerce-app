// import head from "@next/head";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
            Name
          </label>
          <input
            className="rounded bg-gray-300 px-2 py-1 focus:outline-none"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="m-2">
          <label htmlFor="name" className="p-2">
            Email
          </label>
          <input
            className="rounded bg-gray-300 px-2 py-1 focus:outline-none"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <button className="bg-pink-500 text-gray-300 px-3 py-1 mt-2 rounded font-bold hover:bg-pink-600">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
