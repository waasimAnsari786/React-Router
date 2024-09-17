import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Parent container with two equal-width columns */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* First column with contact details */}
        <div className="md:w-1/2 w-full bg-gray-100 p-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions or need assistance? Feel free to get in touch with
            us!
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Address:</strong> 123 Remote St., Tech City, 56789
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Email:</strong> contact@company.com
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p className="text-gray-700 mb-2">
            We're available Monday to Friday, 9 AM to 5 PM.
          </p>
        </div>

        {/* Second column with contact form */}
        <div className="md:w-1/2 w-full bg-white px-6 flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-2 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 p-2 rounded-md"
            />
            <button
              type="submit"
              className="bg-orange-700 text-white p-2 rounded-md hover:bg-orange-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
