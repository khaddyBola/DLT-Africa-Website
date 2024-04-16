"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Button, Input, Typography } from "@material-tailwind/react";
import Loader from "@/app/components/Application/Loader";
import AdminDashboard from "./AdminDashboard";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setFormCompleted(true);
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    const { email } = formData;

    if (!email) {
      setFormValidMessage("Oops! all fields are required");
      return;
    }
    setIsSubmitting(true);

    axios
      .post("http://localhost:5000/api/v1/team/login", formData)
      .then(function (response) {
        console.log(response.data);
        console.log(formData);
        setIsSubmitting(false);
        localStorage.setItem("isLoggedIn", "true");
        setFormCompleted(true);
      })
      .catch(function (error) {
        setIsSubmitting(false);
        if (error.response && error.response.status == 400) {
          setFormValidMessage("Invalid Login Credentials");
        } else {
          setFormValidMessage("Server error!");
        }
      });
  };

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
  return (
    <div>
      <div className="mt-5 mb-20 p-4">
        {!formCompleted ? (
          //lg:min-w-[75%] 2xl:min-w-[70%] lg:max-w-[75%] 2xl:max-w-[70%]
          <form
            onSubmit={handleSubmit}
            className=" w-[700px] rounded-2xl bg-[#FFEFD4] py-[69px] px-8 lg:px-[86px] mx-auto lg:min-w-[65%] 2xl:min-w-[50%] lg:max-w-[65%] 2xl:max-w-[50%] "
          >
            <Typography className="font-normal text-[36px] text-black mb-[39px] text-center ">
              Login as an Admin
            </Typography>
            <div className="grid grid-cols-none md:grid-cols-none gap-y-14 gap-x-14 text-center">
              <Input
                size="lg"
                type="email"
                name="email"
                variant="static"
                label="Email Address"
                className="pl-4 text-xl"
                labelProps={{
                  className: "!text-black",
                }}
                containerProps={{
                  className: "h-14 ",
                }}
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              size="large"
              className="capitalize px-16 py-4 bg-[#FC7C13] my-[35px] w-full text-[16px] transition duration-500 ease-in-out transform hover:-translate-y-1 "
            >
              {isSubmitting ? <p>Loading...</p> : <span>Sign In</span>}
            </Button>
            {formValidMessage && (
              <div className="event-page-registration-error-message">
                {formValidMessage}
              </div>
            )}

            <p className="mt-[10px] ">
              Don&apos;t have an account?{" "}
              <Link href="/admin" className="underline">
                Register
              </Link>
            </p>
          </form>
        ) : (
          <div>
            <AdminDashboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
