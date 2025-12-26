import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Try again.");
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions, suggestions, or feedback? We’d love to hear from you!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-gray-700">{status}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:support@klima.com"
                className="text-green-500 hover:underline"
              >
                support@klima.com
              </a>
            </p>
            <p className="mb-4">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-green-500 hover:underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="mb-4">Address: 123 Green Street, Eco City, Planet Earth</p>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-green-500 hover:text-green-700 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-green-500 hover:text-green-700 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-green-500 hover:text-green-700 transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-green-500 hover:text-green-700 transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
