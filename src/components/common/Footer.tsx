import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                    <div>
                        <h3 className="font-semibold text-lg mb-4">About</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-amber-400 cursor-pointer">Help Center</li>
                            <li className="hover:text-amber-400 cursor-pointer">Carers</li>
                            <li className="hover:text-amber-400 cursor-pointer">Press</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Join</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-amber-400 cursor-pointer">Skill Mentor for kids</li>
                            <li className="hover:text-amber-400 cursor-pointer">Skill Mentor for business</li>
                            <li className="hover:text-amber-400 cursor-pointer">Become a tutor</li>
                            <li className="hover:text-amber-400 cursor-pointer">Become an ambassador</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Other</h3>
                        <ul className="space-y-3">
                            <li className="hover:text-amber-400 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-amber-400 cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Social</h3>
                        <div className="flex space-x-4">
                            <a className=""><FontAwesomeIcon className="text-xl hover:text-amber-400 cursor-pointer"
                                                             icon={faInstagram}/></a>
                            <a className=""><FontAwesomeIcon className="text-xl hover:text-amber-400 cursor-pointer"
                                                             icon={faFacebook}/></a>
                            <a className=""><FontAwesomeIcon className="text-xl hover:text-amber-400 cursor-pointer"
                                                             icon={faYoutube}/></a>
                            <a className=""><FontAwesomeIcon className="text-xl hover:text-amber-400 cursor-pointer"
                                                             icon={faTwitter}/></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="p-2 container pt-8 border-t border-white/40">
                <div className="flex flex-col md:flex-row items-center justify-between mt-3">
                    <div className="flex items-center">
                        <a href="" className="flex items-center space-x-2">
                            <img src="../../assets/logo-iWUvXd4s.webp" className="size-16 rounded-full" alt="Logo"/>
                            <span className="font-semibold text-5xl">Skill Mentor</span>
                        </a>
                    </div>
                    <div className="text-gray-400">SkillMentor Inc. © Copyright 2025. All Rights Reserved.</div>
                </div>
            </div>

        </footer>
    )
}
export default Footer
