import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSend = {
      access_key: "7ad982a3-f887-4436-849b-765f791c7fa0",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: "Snow Photography Inquiry",
      message: `Event Date: ${formData.date}\nPhone: ${formData.phone}\n\n${formData.message}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      } else {
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please check your internet connection.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">

        <AnimatedSection>
          <h2 className="text-center font-serif text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
            <div className="w-20 h-1 bg-blue-500 mx-auto my-4 rounded"></div>
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Ready to book your dream wedding shoot? Have a question? Fill out the
            form below, and we'll be thrilled to connect with you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <AnimatedSection className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="font-serif text-2xl font-bold mb-6">
              Book Your Wedding Shoot
            </h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium">Event Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transform hover:scale-105"
              >
                Send Inquiry
              </button>
            </form>
          </AnimatedSection>

          {/* Map Section */}
          <AnimatedSection>
            <div className="h-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                title="Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.292736189742!2d78.21397847585923!3d12.528197624785653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac3349a4500001%3A0x4006d7efca5a2825!2sRayakottai%20Rd%2C%20Krishnagiri%2C%20Tamil%20Nadu%20635001!5e0!3m2!1sen!2sin!4v1731506932000!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
      ></iframe>

              <div className="p-6 bg-white text-center">
                <h4 className="font-serif font-bold text-xl mb-2">
                  Studio Location
                </h4>
                <p className="text-gray-700 font-medium">
                  📍 Rayakottai Flyover Road, Krishnagiri, Tamil Nadu
                </p>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
