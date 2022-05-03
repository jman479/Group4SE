import React from "react";
import Header from "./../components/Header";
import ShopGirlsSection from "./../components/homeComponents/ShopGirlsSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";

const GirlsScreen = ({ match }) => {
    window.scrollTo(0, 0);
    const keyword = match.params.keyword;
    const pagenumber = match.params.pagenumber;
    return (
        <div>
            <Header />
            <ShopGirlsSection keyword={keyword} pagenumber={pagenumber} />
            <CalltoActionSection />
            <ContactInfo />
            <Footer />
        </div>
    );
};

export default GirlsScreen;
