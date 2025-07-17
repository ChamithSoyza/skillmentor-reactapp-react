import {Link, NavLink} from "react-router";

const NavBar = () => {
    return (
        <>
            <header className="sticky top-0 z-50 py-2 text-white w-full bg-gray-800 backdrop-blur">
                <div className="container flex flex-wrap h-14 items-center justify-between">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="../../assets/logo-iWUvXd4s.webp" className="size-12 rounded-full" alt="Logo"/>
                            <span className="font-semibold text-xl">Skill Mentor</span>
                        </Link>
                        <div className="ml-6 hidden md:block">
                            <nav className="flex items-center gap-6 font-medium text-sm">
                                <NavLink
                                    to="/tutors"
                                    className={({isActive}) => `
                                        hover:text-amber-400 transition-colors ${isActive ? "text-amber-400" : "text-white"}
                                    `}> Tutors</NavLink>
                                <NavLink
                                    to="/aboutus"
                                    className={({isActive}) => `
                                        hover:text-amber-400 transition-colors ${isActive ? "text-amber-400" : "text-white"}
                                    `}>About Us</NavLink>
                                <NavLink
                                    to="/resources"
                                    className={({isActive}) => `
                                        hover:text-amber-400 transition-colors ${isActive ? "text-amber-400" : "text-white"}
                                    `}>Resources</NavLink>
                                <NavLink
                                    to="/dummy"
                                    className={({isActive}) => `
                                        hover:text-amber-400 transition-colors ${isActive ? "text-amber-400" : "text-white"}
                                    `}>Dummy</NavLink>
                            </nav>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-2">
                            <button
                                className="p-2 inline-flex items-center justify-center text-sm text-white hover:text-black bg-transparent hover:bg-amber-50 rounded transition duration-150 font-semibold">Login
                            </button>
                            <button
                                className="p-2 inline-flex items-center justify-center text-sm text-gray-900 bg-amber-400 hover:bg-amber-500 rounded transition duration-150 font-semibold">Sign
                                Up
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default NavBar
