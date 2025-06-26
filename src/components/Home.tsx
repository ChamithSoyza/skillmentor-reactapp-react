import Footer from "./Footer.tsx";
import NavBar from "./NavBar.tsx";
import HeroSection from "../views/HeroSection.tsx";
import Cources from "../views/Cources.tsx";

const Home = () => {

    return (
        <>
            <section className="min-h-screen flex flex-col" style={{backgroundColor: '#f1f4f9'}}>
                <NavBar/>
                <div className="py-8">
                    <HeroSection/>
                </div>
                <div className="py-2 ">
                    <Cources/>
                </div>
                <Footer/>
            </section>
        </>
    )
}
export default Home
