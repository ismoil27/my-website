import React from "react";
import "./contact.css";
import { contact } from "../../utilities/contact";

import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_oang1vl",
      "template_z3wyghf",
      form.current,
      "2tZvB5GDvN3IJ3nlT"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contact.map((value) => {
            return (
              <article key={value.id} className="contact__option">
                <div className="contact__option-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <h5>{value.description}</h5>
                <a href={value.link} target="_blank" rel="noreferrer">
                  Send a message
                </a>
              </article>
            );
          })}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name "
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
