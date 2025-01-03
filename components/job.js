import { useState } from "react";
import emailjs from "@emailjs/browser";

const JoinUs = ({ title, description }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectLink: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define EmailJS template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      project_link: formData.projectLink,
      message: formData.message,
      to_name: "Farooque", // Change this to your desired recipient name
    };

    // Send email via EmailJS
    emailjs
      .send(
        "service_gbfd598", // Replace with your EmailJS service ID
        "template_3rr79qm", // Replace with your EmailJS template ID
        templateParams,
        "35aXHuFaOg3N9ACYM" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", phone: "", projectLink: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="flex flex-col items-center min-h-screen bg-black text-gray-300 px-6 pt-28 py-12">
      <header className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-400 max-w-4xl">{description}</p>
      </header>

      <div className="flex flex-col lg:w-1/2 w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-950 p-10 rounded-lg shadow-lg w-full"
          aria-labelledby="join-us-form"
        >
          {/* Name */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-400 text-sm mb-2"
              id="name-label"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-600 outline-none transition duration-300 ease-in-out"
              required
              aria-labelledby="name-label"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-400 text-sm mb-2"
              id="email-label"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-600 outline-none transition duration-300 ease-in-out"
              required
              aria-labelledby="email-label"
            />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <label
              htmlFor="phone"
              className="block text-gray-400 text-sm mb-2"
              id="phone-label"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-600 outline-none transition duration-300 ease-in-out"
              required
              aria-labelledby="phone-label"
            />
          </div>

          {/* Project Link */}
          <div className="mb-6">
            <label
              htmlFor="projectLink"
              className="block text-gray-400 text-sm mb-2"
              id="project-link-label"
            >
              Project Link
            </label>
            <input
              id="projectLink"
              type="url"
              name="projectLink"
              value={formData.projectLink}
              onChange={handleChange}
              placeholder="Enter the link to your project/portfolio"
              className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-600outline-none transition duration-300 ease-in-out"
              required
              aria-labelledby="project-link-label"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-400 text-sm mb-2"
              id="message-label"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              rows="5"
              className="w-full p-3 rounded-md bg-zinc-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-green-600 outline-none transition duration-300 ease-in-out resize-none"
              required
              aria-labelledby="message-label"
            />
          </div>

          <button
            type="submit"
            className="relative w-full p-3 mt-4 font-semibold text-white rounded-md border border-gray-600 bg-zinc-950 overflow-hidden group transition duration-300 ease-in-out"
            aria-label="Submit the form"
          >
            <span className="relative z-10 text-gray-200 group-hover:text-green-600">Submit</span>
            <span className="absolute inset-0 bg-black bg-opacity-75 rounded-md transform scale-y-0 group-hover:scale-y-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
          </button>

          {isSubmitted && (
            <div className="mt-4 text-center text-green-500">
              Your message has been sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default JoinUs;
