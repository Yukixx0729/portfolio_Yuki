import { FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import "./ContacMe.css";

const ContactMe = () => {
  return (
    <div>
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
          <FormControl isRequired>
            <FormLabel>First Name</FormLabel>
            <Input name="firstName" type="text" required />
            <FormLabel>Last Name</FormLabel>
            <Input name="lastName" type="text" />

            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" required />
            <FormLabel>Message</FormLabel>
            <textarea
              name="message"
              placeholder="Type here"
              rows={4}
              required
            />
            <br />
            <Input type="submit" value="send" />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
