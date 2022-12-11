import React from "react";
import { Link } from "react-router-dom";
import ads from "../../asset/image/ads.JPG";
import easy from "../../asset/image/easy-resale.jpg";
import exap from "../../asset/image/exap.jpg";

const Projects = () => {
    const projects = [
        {
            title: "Admission Travel",
            url: "https://admissiontravel-88646.web.app/",
            description:
                "Full-stack service Providing website. Where customer review giving platform about tourist service..",
            technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
            image: `${ads}`,
            time: "Nov 07 - Present",
        },
        {
            title: "Easy-Resale",
            url: "https://easy-resale.web.app/",
            description: "This is a full-stack service TV reselling platform..user: admin@gmail.com pas: Password1!",
            technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
            image: `${easy}`,
            time: "23 Nov 2022 - Present",
        },
        {
            title: "Easy-Study",
            url: "https://elaborate-tulumba-e2db27.netlify.app/subjects",
            description:
                "This is a full-stack student can exam online multiple choice.",
            technologies: "RectJs, NodeJs, ExpressJs, MongoDB, Firebase Auth",
            image: `${exap}`,
            time: "20 Oct 2022 - 21 Oct 2022",
        },
    ];
    // console.log(projects);
    return (
        <div id="projects" className="py-16 mx-auto w-62  lg:py-20 ">
            <h1 className="text-5xl my-10 text-center">My Projects</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.title}
                        className="overflow-hidden  duration-100  rounded shadow-sm hover:-translate-y-2 transition text-white"
                    >
                        <div className="overflow-y-auto">
                            <img
                                src={project.image}
                                className="object-cover w-full h-52 "
                                alt=""
                            />
                        </div>
                        <div className="p-5 border  bg-slate-200 opacity-70  h-62">
                            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                <span className="text-gray-600">— {project.time}</span>
                            </p>
                            <a
                                href="/"
                                aria-label="Category"
                                title="Visit the East"
                                className=" text-black inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                            >
                                {project.title}
                            </a>
                            <p className="mb-2 text-gray-700">{project.description}</p>
                            <p className="mb-2 text-gray-700">
                                <span className="font-bold">Technologies: </span>
                                {project.technologies}.
                            </p>
                            <div className="flex justify-center items-center py-2 gap-3">
                                <a href={project.url} className="btn btn-accent btn-sm">
                                    Live Site
                                </a>
                                <Link
                                    to="/details"
                                    className="btn btn-primary btn-sm"
                                    project={project}
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
