import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from '../src/parts/Home'
import AboutUs from '../src/parts/AboutUs'
import ContactUs from '../src/parts/ContactUs'



function App() {
  return (
    <Router>
      
     < Route path ='/' exact component={Home} />
     < Route path ='/aboutus' component={AboutUs} />
     < Route path ='/contactus' component={ContactUs} />
    
     </Router>
     );
}

export default App;
