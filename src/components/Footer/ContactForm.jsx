import React, { useRef, useState } from "react";
import { Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";

import Form from "react-bootstrap/Form";
import Button from "../common/Button/Button";
import { LoadingOutlined } from "@ant-design/icons";
import { SmallHeadingBlack } from "../GlobalStyle";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_xtl26ro", "template_d53tmld", form.current, {
        publicKey: "rMro0PHMnbToeSI6I",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Email sent successfully!");
          setLoading(false);
          setError(false);
          resetMsg();
        },
        (error) => {
          console.log("FAILED...", error);
          setMessage("Failed to send Email. Try again later!");
          setLoading(false);
          setError(true);
          resetMsg();
        }
      );
  };

  // remove msg after 5 seconds
  const resetMsg = () => {
    setTimeout(() => {
      setMessage(null);
      setError(false);
    }, 5000);
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={sendEmail} ref={form}>
          <Form.Control
            type="text"
            placeholder="First Name & Surname"
            name="from_name"
            required
          />
          <Form.Control
            type="email"
            placeholder="Email"
            name="reply_to"
            required
          />
          <Form.Control
            type="number"
            placeholder="Phone"
            name="phone_number"
            required
          />
          <Form.Control
            as="textarea"
            placeholder="Message"
            name="message"
            required
          />
          {message && (
            <SmallHeadingBlack
              className={`p-2 ${error ? "text-danger" : "text-success"}`}
            >
              {message}
            </SmallHeadingBlack>
          )}

          <Button
            type={"submit"}
            className={"ms-2"}
            width={"130px"}
            disable={loading}
          >
            {loading ? <LoadingOutlined /> : "Submit"}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ContactForm;
