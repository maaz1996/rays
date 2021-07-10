import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react"
import { css } from "styled-components/macro"; //eslint-disable-line

import Home from "../src/parts/Home";
import AboutUs from "../src/parts/AboutUs"
import Product from "../src/parts/Product";
import Contact from "../src/parts/ContactUs"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;


  return (
    <Router>

     < Route path ='/' exact component={Home} />
     < Route path ='/aboutus' component={AboutUs} />
     < Route path ='/product' component={Product} />
     < Route path ='/contact' component={Contact} />
     </Router>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;
