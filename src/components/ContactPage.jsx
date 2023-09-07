import React from "react";
import { FiMail } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div
      id="contact"
      className="overflow-hidden py-40 transition ease-in-out w-full max-h-fit flex flex-col justify-evenly items-center gap-6 md:flex-row dark:text-white"
    >
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold mt-4">Get in Touch with Us</h1>
      </div>
      <div className="p-2 md:shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-blue-500 rounded-md flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-10">
          <FiMail size={40} />
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300">
            <p>EfficientEats@gmail.com</p>
          </div>
        </div>

        <div className="transition ease-in-out p-8 rounded-md gap-3 w-full text-gray-600 dark:text-gray-300">
          <form className="flex flex-col gap-3 text-black dark:text-white">
            <h6 className="text-gray-600 dark:text-gray-300">Name:</h6>
            <input
              type="text"
              name="Name"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Email:</h6>
            <input
              type="email"
              name="Email"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Message:</h6>
            <textarea
              name="Message"
              rows="7"
              required
              className="resize-none shadow-lg shadow-black-500/50 p-1 rounded-xl focus:outline-blue-500 dark:text-black"
            ></textarea>

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full self-center font-semibold uppercase py-3 rounded-full bg-[#242424] dark:bg-blue-500 text-gray-200 transition ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
              <button
                type="reset"
                className="w-full self-center font-semibold uppercase py-3 rounded-full bg-red-500 text-gray-200 transition ease-in-out transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
