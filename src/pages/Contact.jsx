import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Gmail format
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^\+91[0-9]{10}$/; // Indian phone number format
    return phoneRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (
      !formData.name ||
      !formData.email ||
      !formData.number ||
      !formData.message
    ) {
      setError("All fields are required!");
      setTimeout(() => setError(null), 6000);
      setLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      setTimeout(() => setError(null), 6000);
      setLoading(false);
      return;
    }

    if (formData.message.length < 20) {
      setError("Message must be at least 20 characters long.");
      setTimeout(() => setError(null), 6000);
      setLoading(false);
      return;
    }

    if (!validatePhoneNumber(formData.number)) {
      setError("Please enter a valid Indian phone number (+91XXXXXXXXXX).");
      setTimeout(() => setError(null), 6000);
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", number: "", message: "" }); // Reset form
      setLoading(false); // Stop loading

      // Clear success message after 6 seconds
      setTimeout(() => setSuccess(null), 6000);
    }, 2000);

    // try {
    //   const response = await fetch("http://localhost:5000/api/contact", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Failed to submit the form.");
    //   }

    //   setSuccess("Message sent successfully!");
    //   setTimeout(() => setSuccess(null), 6000);
    //   setFormData({ name: "", email: "", number: "", message: "" });
    // } catch (err) {
    //   setError(err.message);
    //   setTimeout(() => setError(null), 6000);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">contact us</h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632569975602!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <form onSubmit={handleSubmit}>
            <h3 data-aos="zoom-in">tell us something!</h3>
            <input
              data-aos="zoom-in"
              type="text"
              name="name"
              placeholder="your name"
              className="box"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              data-aos="zoom-in"
              type="email"
              name="email"
              placeholder="your email"
              className="box"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              data-aos="zoom-in"
              type="tel"
              name="number"
              placeholder="your number (+91XXXXXXXXXX)"
              className="box"
              value={formData.number}
              onChange={handleChange}
            />
            <textarea
              data-aos="zoom-in"
              name="message"
              placeholder="your message"
              className="box"
              cols="30"
              rows="10"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <input
              data-aos="zoom-in"
              type="submit"
              value={loading ? "Sending..." : "Send Message"}
              className="btn"
              disabled={loading}
            />
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
