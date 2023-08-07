import { FormLabel, Heading, Input } from "@chakra-ui/react";
import "./ContacMe.css";

const ContactMe = () => {
  function sendForm() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (firstName && lastName && email && message) {
      const emailBody = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nMessage: ${message}`;
      const mailtoLink = `mailto:witaray08@gmail.com?subject=Form Submission&body=${encodeURIComponent(
        emailBody
      )}`;

      window.location.href = mailtoLink;
    }
  }
  return (
    <div id="section-4">
      <Heading textAlign="center" className="main-title">
        Contact me
      </Heading>
      <div className="contact-container">
        <div className="contact-info">
          <ul>
            <li>Email: witaray08@gmail.com</li>
            <li>Phone: 0476128614</li>
            <li>
              Linkedin:{" "}
              <a href="https://www.linkedin.com/in/yubinzeng/">Click here</a>
            </li>
            <li>
              Github: <a href="https://github.com/Yukixx0729">Click here</a>
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <form>
            <Heading textAlign="center">Write me email now</Heading>
            <div className="info-container">
              <FormLabel>First Name</FormLabel>
              <Input name="firstName" type="text" required />

              <FormLabel>Last Name</FormLabel>
              <Input name="lastName" type="text" />
            </div>
            <div className="info-container">
              <FormLabel>Your Email</FormLabel>
              <Input name="email" type="email" required />
            </div>
            <FormLabel>Message:</FormLabel>
            <textarea name="message" rows={4} required />
            <br />
            <div className="submit-box">
              <input
                type="submit"
                value="send"
                id="submit"
                onClick={sendForm}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
