"use client";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Tabs from "./Tabs";

export default function Navbar() {

    return (
    <div className="navbar-container">
    <div className="navbar-left">
    <Logo/>
    <Tabs/>
    </div>
    <Menu/>
    </div>
    );
  }