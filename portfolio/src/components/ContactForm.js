import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://api.example.com/contact", data);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
        </label>
        <label>
          Email:
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}
        </label>
        <label>
          Message:
          <textarea {...register("message", { required: true })}></textarea>
          {errors.message && <span>Message is required</span>}
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
