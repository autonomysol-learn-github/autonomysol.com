import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewNavbar from "../views/NewHeader";
import Home from "../views/routerviews/Home/Home";
import Excel from "../views/routerviews/addins/Excel-Addin/Excel";
import Outlook from "../views/routerviews/addins/Outlook-Addin/Outlook";
import Powerpoint from "../views/routerviews/addins/PowerPoint-Addin/PowerPoint";
import Word from "../views/routerviews/addins/Word-Addin/Word";
import Footer from "../views/Footer";

function RouterApp() {
    return (
        <Router>
            <div>
                <NewNavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/excel" element={<Excel />} />
                    <Route path="/outlook" element={<Outlook />} />
                    <Route path="/powerpoint" element={<Powerpoint />} />
                    <Route path="/word" element={<Word />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default RouterApp;
