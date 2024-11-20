import { FaDiscourse, FaFacebookF, FaGithub, FaInstagram } from 'react-icons/fa';
import ImgLogo from '../../assets/fish.png';
import { Link } from "react-router-dom";
import { FaTwitter } from 'react-icons/fa6';
const Footer = () => {
    return (
        <footer className="bg-blue-100 dark:bg-gray-900 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-12 lg:py-8">
                <div className="md:flex md:justify-between items-center">
                    <div className="mb-6 md:mb-0 flex justify-center items-center">
                        <img src={ImgLogo} className="w-14 h-14"></img>
                        <Link to='/' className="btn btn-ghost text-2xl text-blue-600  font-semibold">BlueDepths</Link>
                    </div>
                    <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3 mt-6">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Services</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to='/' className="hover:underline">24 hours Services</Link>
                                </li>
                                <li>
                                    <Link to='/' className="hover:underline">Budget Friendly Package</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to='/' className="hover:underline">Twitter</Link>
                                </li>
                                <li>
                                    <Link to='/' className="hover:underline">Facebook</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <Link to='/' className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li><Link to='/' className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a className="hover:underline">BlueDepths™</a>. All Rights Reserved.
                    </span>

                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white">
                            <FaFacebookF />
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white ms-5">
                            <FaDiscourse />
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white ms-5">
                            <FaTwitter />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white ms-5">
                            <FaGithub />
                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-black dark:hover:text-white ms-5">
                            <FaInstagram />
                            <span className="sr-only">Instagram account</span>
                        </a>
                    </div>
                    <div>
                        <fieldset className="form-control w-80">
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item">Subscribe</button>
                            </div>
                        </fieldset>

                    </div>
                </div>
            </div>
        </footer >

    );
};

export default Footer;