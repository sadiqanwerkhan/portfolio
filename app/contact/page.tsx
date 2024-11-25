"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import Image from "next/image";

// Images
import contactMe from "../assets/image/contact-me.png";

// Define form data structure
type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const serviceId = "service_1w4f4ir"; // Replace with your EmailJS Service ID
    const templateId = "template_pf38fim"; // Replace with your EmailJS Template ID
    const publicKey = "Or3RSQcgnUK8kDuvS"; // Replace with your EmailJS Public Key

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name, // Maps to {{name}} in the EmailJS template
          email: data.email, // Maps to {{email}}
          message: data.message, // Maps to {{message}}
        },
        publicKey // Use Public Key here
      );

      if (response.status === 200) {
        reset(); // Reset the form fields
        toast.success("Message Sent Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Message Failed to Send!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center py-12 md:py-10 font-ProductSans">
      <div>
        <h1 className="text-3xl md:text-6xl font-bold">Contact Me</h1>
      </div>
      <div className="w-full mx-auto container grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="w-full">
          <Image
            className="w-full h-full object-cover"
            src={contactMe}
            width={400}
            height={500}
            alt="Contact Me Image"
          />
        </div>

        {/* Form */}
        <div className="flex flex-col items-center justify-start gap-10 py-5">
          <div>
            <p className="text-2xl md:text-3xl font-bold">Get in Touch</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center justify-start px-5 md:px-20 gap-5"
          >
            {/* Name */}
            <div className="flex flex-row items-center gap-3">
              <input
                placeholder="Name"
                className="py-3 rounded-md px-5 w-full border-0 outline-none bg-gray-100"
                type="text"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="text-red-500">*Required</span>}
            </div>

            {/* Email */}
            <div className="flex flex-row items-center gap-3">
              <input
                placeholder="Email"
                className="py-3 rounded-md px-5 w-full border-0 outline-none bg-gray-100"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-red-500">*Required</span>}
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="py-2 rounded-md px-5 w-full border-0 outline-none bg-gray-100"
              rows={10}
              {...register("message", { required: true })}
            />
            {errors.message && <span className="text-red-500">*Required</span>}

            <div>
              <button
                type="submit"
                className="transition py-2 px-4 bg-[#017f6c] text-white rounded-md hover:border hover:border-[#017f6c] hover:bg-transparent hover:text-[#017f6c]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
