import React from "react";
import "./help.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Help = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [message,setmessage]=useState("");

  const form = useRef();
  // function sendEmail
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm( "service_efsoo87", "template_pho9lyu", form.current, "gmPaZVmzJRIaUr15y")
      .then(
        () => {
          form.current.reset();// reset form 
          // succesfull message 
          setmessage("Successfully Done...👍");
          // after 5 second it will hide
          setTimeout(() => {
            setmessage(""); 
          }, 5000);

        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-info">
        <h1>
          Contact <span>Water Management</span>
        </h1>
        <p>
          Have any questions about Water Management? Are you a co-packer
          obsessed with quality? Are you a distributor passionate about service?
          Write to us. We would love to hear from you.
        </p>

        <div className="customer-care">
          <div className="contact-method">
            <FaPhone className="icon" />
            <h3>CALL SUPPORT</h3>
            <p>+919343546665 / WATER</p>
          </div>
          <div className="contact-method">
            <FaEnvelope className="icon" />
            <h3>MAIL SUPPORT</h3>
            <p> v.vupadhyay0101@gmail.com</p>
          </div>
          <div className="contact-method">
            <FaMapMarkerAlt className="icon" />
            <h3>CORPORATE OFFICE</h3>
            <p> Madhya Pradesh, Rewa</p>
          </div>
        </div>

        <div className="company-info">
          <p>
            Water Management Tech Pvt. Ltd. <br /> Madhya Pradesh, Rewa
            district, Bhanti
          </p>
        </div>
      </div>

      <div className="contact-form">
      <div className="message-container">
          {message && <p>{message}</p>} 
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="form_name" placeholder="Full Name" required/>
          <input type="email" name="form_email"  placeholder="Mail ID" required/>
          <input  type="tel" name="form_tel"  placeholder="Enter your phone number"  required />
         <select value={selectedOption} name="form_complaints"
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            required
          >
            <option value="" disabled>  What is your message regarding? </option>
            <option value="customer-support">Customer Support</option>
            <option value="sales-enquiry">Sales Enquiry</option>
            <option value="suggestions-complaints">Suggestions & Complaints</option>
            <option value="innovation">Innovation</option>
            <option value="others">Others</option>
          </select>

          <textarea name="form_message"  placeholder="Type your message here" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        
      </div>
    </section>
  );
};

export default Help;
