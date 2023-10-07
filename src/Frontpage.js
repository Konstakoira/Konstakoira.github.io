import React from "react";
import "./css/FrontPage.css";
import NavbarView from './components/Navbar';
import ProfileView from "./components/Profile";

const FrontPage = () => {
    return (
        <div>
        <div>
        <NavbarView/>
        </div>
        <div>
        <ProfileView/>
        </div>
        </div>
    );
};

export default FrontPage;