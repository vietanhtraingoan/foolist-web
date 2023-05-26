import Checkbox, { CheckboxChangeEvent } from "antd/lib/checkbox";
import React, { useState } from "react";

const classNamePrefix = "contact-page";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("./api/sendgrid", {
      body: JSON.stringify({
        email: email,
        fullname: name,
        phone:  phone,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAIL_API_KEY}`,
      },
      method: "POST",
      mode: "no-cors",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(name, email, message);
  };

  const onChangeCheckbox1 = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const onChangeCheckbox2 = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={classNamePrefix}>
      <section className={`${classNamePrefix}__introduction-wrapper`}>
        <div>Foolist</div>
        <div>This is an introduction</div>
      </section>

      <div className={`${classNamePrefix}__content-wrapper`}>
        <section className={`${classNamePrefix}__info-wrapper`}>
          <div>address</div>
          <div>phone</div>
          <div>email</div>

          <div className={`${classNamePrefix}__info-map`}></div>
        </section>

        <section className={`${classNamePrefix}__form-wrapper`}>
            <div className={`${classNamePrefix}__form-item`}>
              <span>Your Name</span>
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="enter your name"
              />
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <span>Phone number</span>
              <input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="enter your name"
              />
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <span>Email</span>
              <input

                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your name"
              />
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <span>Services</span>

              <div className={`${classNamePrefix}__service-wrapper`}>
                <Checkbox onChange={onChangeCheckbox1}>Checkbox</Checkbox>
                <Checkbox onChange={onChangeCheckbox2}>Checkbox</Checkbox>
              </div>
            </div>

            <div className={`${classNamePrefix}__form-item`}>
              <span>Message</span>

              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div
              className={`${classNamePrefix}__confirm-button`}
              onClick={handleSubmit}
            >
              <span>Submit</span>
            </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
