import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us 📩</h2>
      <p>Have any questions or suggestions? Reach out to us anytime!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
