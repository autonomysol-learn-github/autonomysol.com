import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewNavbar from "../views/NewHeader";
import Home from "../views/routerviews/Home/Home";
import Excel from "../views/routerviews/addins/Excel-Addin/Excel";
import Outlook from "../views/routerviews/addins/Outlook-Addin/Outlook";
import Powerpoint from "../views/routerviews/addins/PowerPoint-Addin/PowerPoint";
import Word from "../views/routerviews/addins/Word-Addin/Word";
import ContactForm from "../views/routerviews/Contact/ContactForm";
import NewFooter from "../views/NewFooter";

function RouterApp() {
    return (
        <Router>
            <div className="overflow-x-hidden">
                <NewNavbar />
                <Routes>
                    <Route path="/autonomysol.com" element={<Home />} />
                    <Route path="/excel" element={<Excel />} />
                    <Route path="/outlook" element={<Outlook />} />
                    <Route path="/powerpoint" element={<Powerpoint />} />
                    <Route path="/word" element={<Word />} />
                    <Route path="/contact-us" element={<ContactForm />} />
                </Routes>
                <NewFooter />
            </div>
        </Router>
    )
}

export default RouterApp;
