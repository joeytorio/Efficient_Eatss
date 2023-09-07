import React, { useRef } from "react";

const ReservationPage = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handleCancel = () => {
    // Add any cancel logic you want here
    // For example, you can clear the form fields
    formRef.current.reset();
  };

  return (
    <div
      id="reservation"
      className="overflow-hidden py-40 transition ease-in-out w-full max-h-fit flex flex-col justify-evenly items-center gap-6 md:flex-row md:flex-row-reverse dark:text-white"
    >
      <div className="text-center mb-4">
        <h1 className="text-4xl font-semibold mt-4">Make a Reservation</h1>
      </div>
      <div className="p-2 md:shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-blue-500 rounded-md flex flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-10">
          <img
            src="https://i.pinimg.com/564x/60/b0/53/60b05373a6fb7af3c341cbd88dddcde8.jpg"
            alt="Placeholder"
            className="w-full h-auto" 
          />
        </div>

        <div className="transition ease-in-out p-8 rounded-md gap-3 w-full text-gray-600 dark:text-gray-300">
          <form
            ref={formRef}
            method="POST"
            target="_blank"
            className="flex flex-col gap-3 text-black dark:text-white"
            onSubmit={handleSubmit}
          >
            <h6 className="text-gray-600 dark:text-gray-300">Name:</h6>
            <input
              type="text"
              name="Name"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Contact:</h6>
            <input
              type="text"
              name="Contact"
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
            <h6 className="text-gray-600 dark:text-gray-300">Number of Persons:</h6>
            <input
              type="number"
              name="NumberOfPersons"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Table Type:</h6>
            <select
              name="TableType"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            >
              <option value="NonVIP">Non-VIP</option>
              <option value="VIP">Semi-VIP</option>
              <option value="VIP">VIP</option>
            </select>
            <h6 className="text-gray-600 dark:text-gray-300">Date and Time:</h6>
            <input
              type="datetime-local"
              name="DateTime"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Notes:</h6>
            <textarea
              name="Notes"
              rows="7"
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
                type="button"
                onClick={handleCancel}
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

export default ReservationPage;
