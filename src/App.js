import React from "react";
import '../src/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import toast, { Toaster } from 'react-hot-toast';
import Header from "./HomePage/Header/header";
import AimAndObjective from "./Navlinks/AboutUs/AimAndObjective";
import OurTeam from "./Navlinks/AboutUs/OurTeam";
import Navbar from "./HomePage/Navbar/Navbar";
import Footer from "./HomePage/Footer/footer";
import Home from "./HomePage/Home/Home";
import PresedentMessage from "./Navlinks/PresedentMessage/PresedentMessage";
import GlobalWarming from "./Navlinks/Faq/GlobalWarming";
import OrganDonating from "./Navlinks/Faq/OrganDonating";
import HealthCareAwareness from "./Navlinks/OurFocus/HealthCare";
import ConsumerAwareness from "./Navlinks/ConsumerAwareness/ConsumerAwareness";
import PressRelease from "./Navlinks/NewsViews/PressRelease";
import PhotoGallery from "./Navlinks/NewsViews/PhotoGallary";
import TraficSence from "./Navlinks/OurFocus/TraficSence";
import JoinUs from "./Navlinks/AboutUs/JoinUs";
import ContactDetail from "./Navlinks/AboutUs/ContactDetail";
import Events from "./Navlinks/NewsViews/Events";
import Volunteer from "./Navlinks/NavButtonSection/Volunteer";
import DonateNow from "./Navlinks/NavButtonSection/DonateNow";
import EmployeeForm from "./Navlinks/NavButtonSection/EmployeeForm";
import EmployeeDetail from "./Navlinks/NavButtonSection/EmployeeDetail";
import ListAndDonar from "./HomePage/Footer/ListAndDonar";
import Global_warming from "./HomePage/CardCarousel/Global_warming";
import PhotoDetail from "./Navlinks/NewsViews/PhotoDetail";
import Editjobdetails from "./Navlinks/NavButtonSection/Editjobdetails";
import Showevent from "./Navlinks/NewsViews/Showevent";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aimAndObjective" element={<AimAndObjective />} />
          <Route path="/ourTeam" element={<OurTeam />} />
          <Route path="/presedentMessage" element={<PresedentMessage />} />
          <Route path="/about-Global-Warming" element={<GlobalWarming />} />
          <Route path="/about-Organ-Donating" element={<OrganDonating />} />
          <Route path="/health-care-awareness" element={<HealthCareAwareness />} />
          <Route path="/consumer-awareness" element={<ConsumerAwareness />} />
          <Route path="/press-release" element={<PressRelease />} />
          <Route path="/photo" element={<PhotoGallery />} />
          <Route path="/trafic-sence" element={<TraficSence />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/trafic-sence" element={<TraficSence />} />
          <Route path="/contact-detail" element={<ContactDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<DonateNow />} />
          <Route path="/employeForm" element={<EmployeeForm />} />
          <Route path="/employeDetail" element={<EmployeeDetail />} />
          <Route path="/editdetail/:_id" element={<Editjobdetails />} />
          <Route path="/donar" element={<ListAndDonar />} />
          <Route path="/global-warming" element={<Global_warming />} />
          <Route path="/photodetail/:_id" element={<PhotoDetail />} />
          <Route path="/showevent/:_id" element={<Showevent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster />
    </>
  );
};

export default App;
