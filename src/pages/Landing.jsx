import About from "../components/Landing/About";
import Hero from "../components/Landing/Hero"
import Footer from "../components/Footer";


const Landing = ()=> {
    return <div id="landing" className=" min-h-screen">
        <Hero/>
        <About/>
        <Footer />
    </div>
};

export default Landing;