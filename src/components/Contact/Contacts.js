import React from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm(
                "service_beq1hzj",
                "template_m9dbqds",
                event.target,
                "eAl7i1nEXuyiLsq_B"
            )
            .then(
                (result) => {
                    toast.success(result.text);
                },
                (error) => {
                    toast.error(error.text);
                }
            );
        event.target.reset();
    };

    return (
        <div id="contact">
            <h1 className="text-5xl text-center my-5">Send Email</h1>
            <form
                className="flex flex-col lg:w-1/2 mx-auto shadow-2xl border border-spacing-1 border-cyan-400 p-5 rounded-md  mb-10"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
                    name="name"
                    placeholder="Full Name"
                />
                <input
                    className="input w-full px-5 my-5  text-black"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                />
                <input
                    type="text"
                    className="input  w-full px-5 shadow-md border-none bg-none my-5  text-black"
                    name="subject"
                    placeholder="Subject"
                />
                <textarea
                    className="input w-full p-5 h-32  my-5 text-black"
                    name="text"
                    placeholder="Write your email..."
                />

                <input
                    className="btn btn-accent my-5 w-20 mx-auto px-5"
                    type="submit"
                />
            </form>
            <Toaster />
        </div>
    );
};

export default Contact;
