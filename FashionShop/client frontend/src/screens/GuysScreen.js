import React from "react";
import Header from "./../components/Header";
import ShopGuysSection from "./../components/homeComponents/ShopGuysSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const GuysScreen = ({ match }) => {
    window.scrollTo(0, 0);
    const keyword = match.params.keyword;
    const pagenumber = match.params.pagenumber;
    return (
        <div>
            <Header />
            <ShopGuysSection keyword={keyword} pagenumber={pagenumber} />
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default GuysScreen;
