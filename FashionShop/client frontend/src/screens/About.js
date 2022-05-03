import React from "react";
import Header from "./../components/Header";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import AboutCode from "../components/AboutCode";

const About = ({ match }) => {
    window.scrollTo(0, 0);
    return (
        <div>
            <Header />
            <AboutCode />
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default About;
