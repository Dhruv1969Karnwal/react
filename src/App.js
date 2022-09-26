// import logo from './logo.svg';
// import './App.css';
// import Login from './Components/Login/Login';
// import CreateEvent from './Pages/createEvent/createEvent';
// import BookingPage from './Pages/BookingPage/BookingPage';

// function App() {
//   return (
    // <Login />
//     <CreateEvent />
//     // <BookingPage />
//   );
// }

// export default App;
import Navbar from "../src/Pages/LandingPage/Navbar/Navbar";
import Intro from "../src/Pages/LandingPage/Intro/Intro";
import Services from "../src/Pages/LandingPage/Services/Services";
import "./App.css";
import Works from "../src/Pages/LandingPage/Works/Works";
import Portfolio from "../src/Pages/LandingPage/Portfolio/Portfolio";
import Testimonial from "../src/Pages/LandingPage/Testimonials/Testimonial";
import Contact from "../src/Pages/LandingPage/Contact/Contact";
import Footer from "../src/Pages/LandingPage/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login";
import CreateEvent from './Pages/createEvent/createEvent'
import BookingPage from './Pages/BookingPage/BookingPage'
import { useContext } from "react";
import { themeContext } from "./Context";
import Dashboard from "./Pages/Dashboard";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
      <Login />
      <CreateEvent />
      {/* <BookingPage /> */}
      <Dashboard />
      {/* <Routes>
        <Route path="/login" component={<Login />} /> 
      </Routes> */}
    </div>
  );
}

export default App;
