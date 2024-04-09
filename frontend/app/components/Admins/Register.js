"use client";

import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [formValidMessage, setFormValidMessage] = useState();
  const [formCompleted, setFormCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormValidMessage("");
    const { name, value } = e.target;
    console.log(e.target.value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, password, phone } = formData;

    if (!name || !email || !password || !phone) {
      setFormValidMessage("Oops! all fields are required");
      return;
    }
    setIsSubmitting(true);

    axios
      .post("http://localhost:5000/api/v1/team/register-team", formData)
      .then(function (response) {
        console.log(response.data);
        console.log(formData);
        setIsSubmitting(false);
        setFormCompleted(true);
      })
      .catch(function (error) {
        setIsSubmitting(false);
        if (error.response && error.response.status == 400) {
          setFormValidMessage(
            "Applicant with the same email address already exist"
          );
        } else {
          setFormValidMessage(
            "Server error unable to process your registration"
          );
        }
      });
  };
  return (
    <div>
      <p>
        Already have an account? <Link href="/admin-login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
