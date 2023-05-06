import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
   
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
       'service_28032000',
       'template_sqsbytw',
        {
          from_name: form.name,
          to_name: "Wasim",
          from_email: form.email,
          to_email: "syedwasimahmed2803@gmail.com",
          message: form.message,
        },
        'WhWGLy_72-Ni278Oe'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div id='contact'>
    <h1>CONTACT US</h1>
    <form  ref={formRef}
        onSubmit={handleSubmit}>
      <input  type='text'
            name='name'
            value={form.name}
            onChange={handleChange} placeholder='Full Name ' required/>
      <input  type='email'
            name='email'
            value={form.email}
            onChange={handleChange} placeholder='Type your E-mail ' required/>
      <textarea  rows={7}
            name='message'
            value={form.message}
            onChange={handleChange} placeholder='Write Here..... '  id="" cols="30" ></textarea>
      <button value="Send"  type='submit' > {loading ? "Sending..." : "Send"}</button>
    </form>
  </div>
  )
}

export default Contact
