import React from "react";

const ContactInfo = () => {
  return (
      <div className="contactInfo container">
          {/* Sub Header & navbar */}
          <div className="Announcement ">
              <div className="container">
                  <div>
                      <ul className="headerNavBar">
                          <li><a href="/GirlsScreen" data-text="Girls">Girls</a></li>
                          <li><a href="/GuysScreen" data-text="Guys">Guys</a></li>
                          <li><a href="/Accessories" data-text="Accessories">Accessories</a></li>
                          <li><a href="/About" data-text="About">About</a></li>
                          <li><a href="/Custom" data-text="Contact">Contact</a></li>
                      </ul>
                  </div>
              </div>
          </div>
         <br></br> <br></br>
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us Monday-Saturday </h5>
                      <p>8 a.m - 6 p.m</p>
                      <p>864 - 275 - 6969</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Headquarters</h5>
            <p>San Antonio, TX</p>
            <p>United States</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>TikTok</h5>
            <p>VintageVixen80s</p> 
            <p>&#10003;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
