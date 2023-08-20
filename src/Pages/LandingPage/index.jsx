import LandingPage from "./Herosection";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer"
import Services from "./Services";
import Featured from "./Featued";
import Contact from "../Contact";

export default function index() {
    return (<>
    <Navbar/>
    <LandingPage />
    <Featured/>
    <Services/>
    <Contact/>
    <Footer/>
    </>)
}