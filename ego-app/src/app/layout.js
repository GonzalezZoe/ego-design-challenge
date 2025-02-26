import Navbar from "../../components/Navbar";
import './styles/globals.scss';
import HomePage from "../../components/HomePage";
import ModelSheet from "./modelos/[slug]/page";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
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
      <Footer/>
      </body>
    </html>
  );
}
