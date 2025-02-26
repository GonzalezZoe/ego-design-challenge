"use client";
import { useEffect, useState } from 'react';
import Navbar from '../../ego-app/components/Navbar';
import './styles/globals.scss';
import HomePage from '../../ego-app/components/HomePage';
import ModelSheet from "./modelos/[slug]/page";
import Footer from '../../ego-app/components/Footer';

export default function Layout({ children }) {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 500); // 0.5 segundos de demora

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8"/>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Navbar /> 
        {children}
        {showFooter && <Footer />}
      </body>
    </html>
  );
}

