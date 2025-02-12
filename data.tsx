import { AWSIcon, BootstrapIcon, CSSIcon, DockerIcon, FlutterIcon, GithubIcon, GmailIcon, GoIcon, GoogleCloudIcon, GrfanaIcon, HTMLIcon, JavascriptIcon, JenkinsIcon, LinkedlnIcon, MySQLIcon, NextJSIcon, NodeJSIcon, OpenAIIcon, PostgressIcon, PrismaIcon, PrometheusIcon, PythonIcon, ReactIcon, RedisIcon, ReduxIcon, SlackIcon, TailwindCSSIcon, TerraformIcon, TypescriptIcon, ExpressJSIcon, DartIcon, CPlusPlusIcon, JavaIcon, ApacheSparkIcon, ApacheAirflowIcon, SQLAlchemyIcon, ApacheKafkaIcon, GradleIcon, QtIcon, KubernetesIcon, PlaywrightIcon, AzureIcon } from './components/icons';
import { FaGithub } from "react-icons/fa6";

export const MainTechnologies = [
    "Python",
    "Java",
    "C++",
    "React",
    "AWS",
    "Docker"
]

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Exp", link: "#experience" },
    { name: "Tech", link: "#technologies" },
    { name: "Patent", link: "#patent" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
];

export const technicalSkills = [
    <ReactIcon width="60" height="60"/>,
    <KubernetesIcon width="50" height="50"/>,
    <QtIcon width="50" height="50"/>,
    <ApacheSparkIcon width="50" height="50"/>,
    <GradleIcon width="50" height="50"/>,
    <ApacheAirflowIcon width="50" height="50"/>,
    <ApacheKafkaIcon width="50" height="50"/>,
    <SQLAlchemyIcon width="60" height="60"/>,
    // <FlaskIcon width="60" height="60"/>,
    // <NextJSIcon width="60" height="60"/>,
    <NodeJSIcon width="60" height="60"/>,
    <PlaywrightIcon width="60" height="60"/>,
    <PythonIcon width="60" height="60"/>,
    <TypescriptIcon width="60" height="60"/>,
    <JavascriptIcon width="60" height="60"/>,
    <DockerIcon width="60" height="60"/>,
    <AWSIcon width="60" height="60"/>,
    <JenkinsIcon width="60" height="60"/>,
    <GoIcon width="60" height="60"/>,
    // <RedisIcon width="60" height="60"/>,
    // <TerraformIcon width="60" height="60"/>,
    <TailwindCSSIcon width="60" height="60"/>,
    <HTMLIcon width="60" height="60"/>,
    <CSSIcon width="60" height="60"/>,
    // <ReduxIcon width="60" height="60"/>,
    // <PrismaIcon width="60" height="60"/>,
    <PostgressIcon width="60" height="60"/>,
    <MySQLIcon width="60" height="60"/>,
    <GithubIcon width="50" height="50"/>,
    // <FaGithub className='w-10 h-10' />,
    // <BootstrapIcon width="60" height="60"/>,
    // <GrfanaIcon width="60" height="60"/>,
    // <PrometheusIcon width="60" height="60"/>,
    <OpenAIIcon width="60" height="60"/>,
    // <SlackIcon width="60" height="60"/>,
    <GoogleCloudIcon width="60" height="60"/>,
    <AzureIcon width="50" height="50"/>,
    <FlutterIcon width='60' height='60'/>,
    <ExpressJSIcon width='70' height='70'/>,
    <DartIcon width='60' height='60'/>,
    <CPlusPlusIcon width='60' height='60'/>,
    <JavaIcon width='60' height='60'/>
    
]

export const projects = [
    {
        title: "Smart City Real-Time Data Analytics",
        description: "A scalable real-time data pipeline to monitor and analyze smart city infrastructure, handling vehicle movements, GPS tracking, traffic camera feeds, and weather data.",
        image: "/smart_city.jpg",
        githubLink : "https://github.com/OmkarYeole/Smart-City-Realtime-Data-Handling",
        tech: [
            <PythonIcon width="40" height="40"/>,
            <AWSIcon width="40" height="40"/>,
            <ApacheKafkaIcon  width="40" height="40"/>,
            <ApacheSparkIcon  width="40" height="40"/>, 
            <DockerIcon  width="40" height="40"/>, 
        ]
    },
    {
        title: "Real Time Platform for Data Analytics",
        description: "A real-time data engineering platform that reduced data processing time by 95% (from 24 hours to <1 hour) for a major e-commerce platform, enabling real-time decision-making.",
        image: "/realtime_data.jpg",
        githubLink : "https://github.com/OmkarYeole/Real-Time-E-Commerce-Data-Analytics-Platform",
        tech: [
            <AzureIcon width="30" height="30"/>,
            <MySQLIcon  width="40" height="40"/>,
            // <CSSIcon  width="40" height="40"/>, 
            // <JavascriptIcon  width="40" height="40"/>, 
        ]
    },
    {
        title: "Artify AI - Visual and Voice Companion",
        description: "An interactive application that blends AI with a versatile user experience. It allows users to engage via text, image, and audio inputs, offering features like intelligent Q&A, image recognition, and speech-to-text capabilities.",
        image: "/artify_ai.jpg",
        githubLink : "https://github.com/OmkarYeole/ArtifyAI",
        tech: [
            <OpenAIIcon width="40" height="40"/>,
            <PythonIcon  width="40" height="40"/>,
            // <CSSIcon  width="40" height="40"/>, 
            // <JavascriptIcon  width="40" height="40"/>, 
        ]
    },
    {
        title: "Modern Bank Application",
        description: "A modern user interface for banking, built with React, Tailwind CSS, and JavaScript. It highlights how contemporary design can enhance both usability and aesthetics delivering seamless and visually appealing user experience.",
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
        description: "Task Management Software that helps users efficiently manage their tasks through a web application. Designed to provide a user-friendly interface offering essential features for task organization and streamlined management.",
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
        title: "Car Dealership Simulation",
        description: "A Java-based simulation that replicates the operations of a car dealership. Users can buy, sell, repair, clean, and race cars within the simulation. It leverages Object-Oriented Programming principles and common software design patterns.",
        image: "/dealership.jpg",
        githubLink : "https://github.com/OmkarYeole/Friendly-Neighbourhood-Car-Dealership-using-OOP",
        tech: [
            <JavaIcon width="40" height="40"/>,
            // <GithubIcon width="35" height="35"/>,
            
        ]
    },
    // {
    //     title: "Crime Data Analysis",
    //     description: "This web application analyzes and visualizes crime data across the United States. It empowers users to make informed safety decisions and anonymously share crime-related experiences. The app promotes community-driven awareness and enhances public safety.",
    //     image: "/img4.png",
    //     githubLink : "https://github.com/OmkarYeole/Crime-Data-Analysis",
    //     tech: [
    //         <HTMLIcon width="40" height="40"/>,
    //         <CSSIcon width="40" height="40"/>,
    //         <PythonIcon width="40" height="40"/>,
    //         <BootstrapIcon width="40" height="40"/>,
    //         <MySQLIcon width="40" height="40"/>,
            
    //     ]
    // },
    {
        title: "Cafe Management System",
        description: "A Java-based application designed to streamline cafe operations. It offers a user-friendly interface for customers to place orders and track their order status. Additionally, it allows cafe staff to efficiently monitor and manage sales.",
        image: "/Coffee-logo.jpg",
        githubLink : "https://github.com/OmkarYeole/Cafe-Management-System-in-Java",
        tech: [
            <JavaIcon width="40" height="40"/>,
            <MySQLIcon width="40" height="40"/>,
            
        ]
    },
    {
        title: "Dengue Fever Prediction using ML",
        description: "A system to predict Dengue fever cases in two cities using various factors like weather, population, and past incidence data. Machine learning techniques are leveraged to provide accurate predictions while aiming to aid in early warning and prevention.",
        image: "/Dengue-Fever.jpg",
        githubLink : "https://github.com/OmkarYeole/Dengue-Fever-Prediction",
        tech: [
            <PythonIcon width="40" height="40"/>,
        ]
    },
]

export const workExperience = [
    {
        companyName: "Model Earth",
        designation: "Software Engineer",
        thumbnail: "/exp2.svg",
        description: "Developing a data-driven web application using Node.js, React, and Python to automate environmental project reporting and improve operational efficiency. Built RESTful APIs (SQL & NoSQL), optimizing data retrieval by 20%, and integrated OpenAI & Llama LLM APIs to enable Retrieval Augmented Generation (RAG) workflows."
    },
    {
        companyName: "ASANTe",
        designation: "Software Engineer Intern",
        thumbnail: "/exp1.svg",
        description: "Developed a Flutter-based cross-platform application, securing a $100,000 investment by delivering an intuitive and robust user experience. Engineered secure authentication systems (AWS Cognito, OAuth2, REST APIs) and built Python (Flask) backend services to ensure seamless AWS integration and secure API communication."
    },
    {
        companyName: "Accenture",
        designation: "Software Engineer",
        thumbnail: "/exp2.svg",
        description: "Optimized backend performance for an application serving 2M+ users, reducing production issues by 20% with Java, Spring Boot, and Apache Kafka. Improved microservices communication, automated CI/CD pipelines (Maven, Gradle), and enhanced system stability through end-to-end testing (Playwright, JMeter)."
    },
    {
        companyName: "Sattvarise Technologies",
        designation: "Software Engineer Intern",
        thumbnail: "/exp3.svg",
        description: "Optimized C++ geometric modeling algorithms, improving processing speed and mesh manipulation efficiency. Developed a real-time PCB schematic visualization tool (Qt), boosting user efficiency by 20%, and collaborated with international teams to align EDA software with industry standards."
    },
    {
        companyName: "Crest Test Systems",
        designation: "Software Engineer Intern",
        thumbnail: "/exp4.svg",
        description: "Developed a Python backend with Flask to control IoT devices via a web app, enabling seamless automation of office systems like lighting and climate control."
    },
]

export const patentPublished = [
    {
        companyName: "Australian Innovation Patents",
        designation: "Machine Learning based incorrect posture detection system",
        thumbnail: "/exp1.svg",
        description: "An innovative machine learning model in Python to detect and prevent Upper Cross Postural Syndrome by analyzing and classifying user posture based on key body points, reducing the risk of spinal problems.",
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