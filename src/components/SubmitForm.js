import React, { useState } from "react";
import Form from "reactstrap/lib/Form";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import FormGroup from "reactstrap/lib/FormGroup";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";
import "./SubmitForm.css";

const SubmitForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form name="contact" method="post" className="submitForm">
      <input type="hidden" name="form-name" value="contact" />
      <div className="contact__name-email">
        <p>
          <label>
            Your Name:{" "}
            <input className="submitForm__input" type="text" name="name" />
          </label>
        </p>

        <p>
          <label>
            Phone:{" "}
            <input type="phone" className="submitForm__input" name="phone" />
          </label>
        </p>
        <p>
          <label>
            Address:{" "}
            <input
              type="address"
              className="submitForm__input"
              name="address"
            />
          </label>
        </p>
        <p>
          <label>
            Message: (Optional):{" "}
            <textarea
              type="textarea"
              className="submitForm__message"
              name="message"
            ></textarea>
          </label>
        </p>
        <p>
          <button className="submitForm__button " type="submit">
            Send
          </button>
        </p>
      </div>
    </form>
  );
};

export default SubmitForm;

{
  /* <Form className="mt-4" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <Row>
        <Col md={6}>
          <FormGroup>
            <Input
              //   value={name}
              type="text"
              name="name"
              id="examplename"
              placeholder="Name"
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input
              //   value={email}
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
            />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Input
          //   value={address}
          type="address"
          name="address"
          id="exampleAddress"
          placeholder="Address"
        />
      </FormGroup>
      <FormGroup>
        <Input
          //   value={message}
          type="textarea"
          name="message"
          id="message"
          placeholder="Your message"
        />
      </FormGroup>
      

      <Button color="primary">Send Message</Button>
    </Form> */
}
