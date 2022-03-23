import React from "react";
import "./contact.css";
import { contact } from "../../utilities/contact";

import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          {contact.map((value) => {
            return (
              <article className="contact__option">
                <div>{value.icon}</div>
                <h4>{value.title}</h4>
                <h5>{value.description}</h5>
                <a href={value.link}>Send a message</a>
              </article>
            );
          })}
          {/* <article className="contact__option">
            <MdOutlineEmail />
            <h4>Email</h4>
            <h5>abduraimovismoil98@gmail.com</h5>
            <a href="mailto:abduraimovismoil98@gmail.com">Send a message</a>
          </article> */}
        </div>
        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
