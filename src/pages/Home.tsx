import Footer from "../components/common/Footer.tsx";
import NavBar from "../components/common/NavBar.tsx";
import HeroSection from "../components/views/HeroSection.tsx";
import Cources from "../components/Cources.tsx";

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
