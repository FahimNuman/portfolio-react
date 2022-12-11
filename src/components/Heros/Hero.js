
import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import resume from "../../asset/resume/MD.Abdullah Al Numan_Software_Engineer_Resume.pdf";

const Hero = () => {
    return (
        <div>
            <div className="hero min-h-screen border-spacing-1 border-cyan-400 p-5 rounded-md  mb-10" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-semibold text-gray-100 lg:text-4xl">
                            Hello, This is <br />{" "}
                            <span className="text-accent">Abdullah Al-Numan</span>
                        </h2>
                        <TypeAnimation
                            className="text-accent"
                            // Same String at the start will only be typed once, initially
                            sequence={[
                                "Full-Stack Web Developer",
                                1000,
                                "MERN Stack Web Developer",
                                1000,
                                "Front-End Web Developer",
                                1000,
                                "ReactJs Web Developer",
                                1000,
                            ]}
                            speed={50} // Custom Speed from 1-99 - Default Speed: 40
                            style={{ fontSize: "2em" }}
                            wrapper="span" // Animation will be rendered as a <span>
                            repeat={Infinity} // Repeat this Animation Sequence infinitely
                        />

                        <p className="mt-4 text-white">
                            I am a Frontend(ReactJs)/Full-Stack(MERN) web developer with 6 months
                            of learning/working experience. I love to work with logic and build it
                            by programming.
                        </p>
                        <a
                            href={resume}
                            download={resume}
                            className="mr-3"
                        >
                            <button className="btn btn-accent my-5 ">
                                <FaDownload className="mr-2" /> Resume
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fahim-numan-1587a3161/"
                            className="btn btn-accent "
                        >
                            <FaLinkedin className="mr-2" />
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Hero;