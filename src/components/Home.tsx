import React from 'react'
import Footer from "./Footer.tsx";
import NavBar from "./NavBar.tsx";

const Home = () => {
    return (
        <>
            <section className="min-h-screen flex flex-col">
                <NavBar/>

                <Footer/>
            </section>
        </>
    )
}
export default Home
