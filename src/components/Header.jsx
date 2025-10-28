import { motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = ({ navLinks = ["Home", "About", "Services", "Portfolio", "Contact"] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute w-full z-50 transition-all duration-300">
      {/* ======= MAIN NAVBAR ======= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo / Branding */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="w-10 h-10 text-xl font-bold text-[#163832] tracking-wide rounded-xl bg-linear-to-r from-gray-500 to-gray-100 flex items-center justify-center mr-3">
            T
          </div>
          <span className="text-xl font-bold bg-linear-to-r from-[#daf1de] to-[#8eb69b] bg-clip-text text-transparent">
            Tehilah
          </span>
        </motion.div>

        {/* ======= DESKTOP NAV ======= */}
        <div className="lg:flex hidden space-x-8">
          {navLinks.map((item) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative text-[#daf1de] hover:text-[#051f20] font-medium transition-colors duration-300 group"
              href="#"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#051f20] group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* ======= DESKTOP SOCIALS + HIRE ME ======= */}
        <div className="md:flex hidden items-center space-x-4">
          {[FiGithub, FiTwitter, FiLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="text-[#daf1de] hover:text-[#051f20] transition-colors duration-300"
              href="#"
            >
              <Icon size={24} className="w-5 h-5" />
            </motion.a>
          ))}

          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-linear-to-r from-gray-600 to-gray-300 
              text-[#163832] font-bold hover:to-[#051f20] hover:text-white transition-all duration-500"
          >
            Hire Me
          </motion.button>
        </div>

        {/* ======= MOBILE MENU BUTTON ======= */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={toggleMenu}
            className="text-[#daf1de]"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* ======= MOBILE SIDE MENU ======= */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 w-3/4 h-full bg-[#daf1de] shadow-lg z-40 p-6 flex flex-col space-y-6 md:hidden"
      >
        <button
          onClick={toggleMenu}
          className="self-end text-[#235347] hover:text-[#0b2b26]"
        >
          <FiX size={24} />
        </button>

        <nav className="flex flex-col space-y-4 mt-6">
          {navLinks.map((item) => (
            <a
              key={item}
              onClick={toggleMenu}
              className="text-[#235347] font-semibold text-lg hover:text-[#0b2b26] transition-colors duration-300"
              href="#"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col space-y-4">
          <div className="flex space-x-4">
            <FiGithub className="w-5 h-5 text-[#235347]" />
            <FiLinkedin className="w-5 h-5 text-[#235347]" />
            <FiTwitter className="w-5 h-5 text-[#235347]" />
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="w-full py-2 rounded-lg bg-linear-to-r from-[#8eb69b] to-[#235347] text-white font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* ======= MOBILE OVERLAY ======= */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={toggleMenu}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
        />
      )}

      {/* ======= CONTACT FORM BACKDROP ======= */}
      {contactFormOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeContactForm}
        >
          {/* Placeholder Contact Form (add your form here later) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#daf1de] text-[#051f20] p-6 rounded-xl shadow-lg w-full max-w-md"
          >
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <p className="text-sm mb-2">Form coming soon...</p>
            <button
              onClick={closeContactForm}
              className="mt-2 px-4 py-2 bg-[#235347] text-white rounded-lg hover:bg-[#0b2b26]"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
