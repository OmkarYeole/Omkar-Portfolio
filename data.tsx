import { AWSIcon, BootstrapIcon, CSSIcon, DockerIcon, FlutterIcon, GithubIcon, GmailIcon, GoIcon, GoogleCloudIcon, GrfanaIcon, HTMLIcon, JavascriptIcon, JenkinsIcon, LinkedlnIcon, MySQLIcon, NextJSIcon, NodeJSIcon, OpenAIIcon, PostgressIcon, PrismaIcon, PrometheusIcon, PythonIcon, ReactIcon, RedisIcon, ReduxIcon, SlackIcon, TailwindCSSIcon, TerraformIcon, TypescriptIcon, ExpressJSIcon, DartIcon, CPlusPlusIcon, JavaIcon } from './components/icons';
import { FaGithub } from "react-icons/fa6";

export const MainTechnologies = [
    "Flutter",
    "Python",
    "JavaScript",
    "React",
    "AWS"
]

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
    { name: "Patent", link: "#patent" },
];

export const technicalSkills = [
    <ReactIcon width="60" height="60"/>,
    <NextJSIcon width="60" height="60"/>,
    <NodeJSIcon width="60" height="60"/>,
    <PythonIcon width="60" height="60"/>,
    <TypescriptIcon width="60" height="60"/>,
    <JavascriptIcon width="60" height="60"/>,
    <DockerIcon width="60" height="60"/>,
    <AWSIcon width="60" height="60"/>,
    // <JenkinsIcon width="60" height="60"/>,
    // <GoIcon width="60" height="60"/>,
    <RedisIcon width="60" height="60"/>,
    <TerraformIcon width="60" height="60"/>,
    <TailwindCSSIcon width="60" height="60"/>,
    <HTMLIcon width="60" height="60"/>,
    <CSSIcon width="60" height="60"/>,
    // <ReduxIcon width="60" height="60"/>,
    // <PrismaIcon width="60" height="60"/>,
    <PostgressIcon width="60" height="60"/>,
    <MySQLIcon width="60" height="60"/>,
    <GithubIcon width="50" height="50"/>,
    // <FaGithub className='w-10 h-10' />,
    <BootstrapIcon width="60" height="60"/>,
    // <GrfanaIcon width="60" height="60"/>,
    // <PrometheusIcon width="60" height="60"/>,
    // <OpenAIIcon width="60" height="60"/>,
    <SlackIcon width="60" height="60"/>,
    <GoogleCloudIcon width="60" height="60"/>,
    <FlutterIcon width='60' height='60'/>,
    <ExpressJSIcon width='70' height='70'/>,
    <DartIcon width='60' height='60'/>,
    <CPlusPlusIcon width='60' height='60'/>,
    <JavaIcon width='60' height='60'/>
    
]

export const projects = [
    {
        title: "Modern Bank App using React",
        description: "This app features a modern user interface for banking, built with React, Tailwind CSS, and JavaScript. It highlights how contemporary design can enhance both usability and aesthetics. The app delivers a seamless and visually appealing user experience.",
        image: "/ModernBankApp.png",
        githubLink : "https://github.com/OmkarYeole/Modern-Bank-App/tree/main",
        tech: [
            <ReactIcon width="40" height="40"/>,
            <HTMLIcon  width="40" height="40"/>,
            <CSSIcon  width="40" height="40"/>, 
            <JavascriptIcon  width="40" height="40"/>, 
        ]
    },
    {
        title: "Task Management Software",
        description: "Task Management Software helps users efficiently manage their tasks through a web application. The software is designed to provide a user-friendly interface. It offers essential features for task organization and streamlined management.",
        image: "/Task-Management.jpeg",
        githubLink : "https://github.com/OmkarYeole/Task-Management-Software",
        tech: [
            <ReactIcon width="40" height="40"/>,
            <HTMLIcon  width="40" height="40"/>,
            <CSSIcon  width="40" height="40"/>, 
            <JavascriptIcon  width="40" height="40"/>, 
            <NodeJSIcon  width="40" height="40"/>,
            <PostgressIcon width="40" height="40"/>,
        ]
    },
    {
        title: "Car Dealership Simulation in Java",
        description: "The FNCD Simulation is a Java-based project that replicates the operations of a car dealership. Users can buy, sell, repair, clean, and race cars within the simulation. It leverages Object-Oriented Programming principles and common software design patterns.",
        image: "/Car_Dealership.jpg",
        githubLink : "https://github.com/OmkarYeole/Friendly-Neighbourhood-Car-Dealership-using-OOP",
        tech: [
            <JavaIcon width="40" height="40"/>,
            <GithubIcon width="35" height="35"/>,
            
        ]
    },
    {
        title: "Crime Data Analysis",
        description: "This web application analyzes and visualizes crime data across the United States. It empowers users to make informed safety decisions and anonymously share crime-related experiences. The app promotes community-driven awareness and enhances public safety.",
        image: "/img4.png",
        githubLink : "https://github.com/OmkarYeole/Crime-Data-Analysis",
        tech: [
            <HTMLIcon width="40" height="40"/>,
            <CSSIcon width="40" height="40"/>,
            <PythonIcon width="40" height="40"/>,
            <BootstrapIcon width="40" height="40"/>,
            <MySQLIcon width="40" height="40"/>,
            
        ]
    },
    {
        title: "Cafe Management System In Java",
        description: "The Cafe Management System is a Java-based application designed to streamline cafe operations. It offers a user-friendly interface for customers to place orders and track their order status. Additionally, it allows cafe staff to efficiently monitor and manage sales.",
        image: "/Coffee-logo.jpg",
        githubLink : "https://github.com/OmkarYeole/Cafe-Management-System-in-Java",
        tech: [
            <JavaIcon width="40" height="40"/>,
            <MySQLIcon width="40" height="40"/>,
            
        ]
    },
    {
        title: "Dengue Fever Prediction using ML",
        description: "This project implements a system to predict Dengue fever cases in two cities using various factors like weather, population, and past incidence data. Machine learning techniques are leveraged to provide accurate predictions. The system aims to aid in early warning and prevention.",
        image: "/Dengue-Fever.jpg",
        githubLink : "https://github.com/OmkarYeole/Dengue-Fever-Prediction",
        tech: [
            <PythonIcon width="40" height="40"/>,
        ]
    },
]

export const workExperience = [
    {
        companyName: "ASANTe",
        designation: "Software Developer Intern",
        thumbnail: "/exp1.svg",
        description: "Developed cross-platform application using Flutter and Dart to improve overall user experience. Engineered the setup of authentication services for the app using Amazon Web Services (AWS) enhancing user interaction. Managed REST APIs to optimize client-server communication enhancing performance among application components. Effectively managed the project tasks and workflows using JIRA, ensuring efficient project progress monitoring.",
    },
    {
        companyName: "Accenture",
        thumbnail: "/exp2.svg",
        description: "Utilized Selenium in Java to test FTTP products, ensuring consistent delivery of exceptional telecom services to customers. Proficiently implemented Agile and Scrum methodologies to drive robust solutions, surpassing expectations and producing 10% reduction in production issues.",
        designation: "Software Developer",
    },
    {
        companyName: "Sattvarise Technologies",
        thumbnail: "/exp3.svg",
        description: "Achieved a 25% increase in overall project efficiency by redesigning and debugging a Software Development Kit (SDK) using C++ to scope its potential for industry use. Conducted unit and target testing throughout the development process to ensure the robustness and reliability of the SDK.",
        designation: "Software Developer Intern",
    },
    {
        companyName: "Crest Test Systems",
        thumbnail: "/exp4.svg",
        description: "Leveraged Python to prototype automation systems of office processes, resulting in an 8% increase in operational efficiency by collaborating with a cross-functional team.",
        designation: "Software Developer Intern",
    },
]

export const patentPublished = [
    {
        companyName: "Australian Innovation Patents",
        designation: "Machine Learning based incorrect posture detection system",
        thumbnail: "/exp1.svg",
        description: "Developed an innovative machine learning system in Python and integrated it with a web application to detect and prevent Upper Cross Postural Syndrome by analyzing and classifying user posture based on key body points, reducing the risk of spinal problems.",
    },
]

export const socialMedia = [
    {
        icon: <LinkedlnIcon  width="50" height="50"/>,
        link: "https://www.linkedin.com/in/omkaryeole/",
    },
    {
        icon: <FaGithub className="w-10 h-10"/>,
        link: "https://github.com/OmkarYeole",
    },
]