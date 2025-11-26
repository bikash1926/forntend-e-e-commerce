import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Fotter = () => {
  return (
    <footer className=" text-gray-800 py-10 px-6 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        
        <div>
          <h3 className="text-2xl font-bold  mb-4">e-shop</h3>
          <p className="text-sm leading-relaxed">
            Your one-stop for all your needs. Shop with us and experience the best online shopping journey.
          </p>
        </div>

     
        <div>
          <h4 className="text-lg font-semibold  mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link to="/shop" className="hover:text-red-500 transition-colors">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
            <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-lg font-semibold   mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-300 rounded-full hover:bg-emerald-500 transition-colors">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-300 rounded-full hover:bg-emerald-500 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-300 rounded-full hover:bg-emerald-500 transition-colors">
              <FaGithub size={18} />
            </a>
            <a href="#" className="p-2 bg-gray-300 rounded-full hover:bg-emerald-500 transition-colors">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold  mb-4">Newsletter</h4>
          <p className="text-sm mb-3">Subscribe to get special offers, free giveaways, and updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button 
              type="submit" 
              className="bg-red-600 px-4 py-2 rounded-r-md text-white hover:bg-red-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

 
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} e-shop. All rights reserved.
      </div>
    </footer>
  )
}

export default Fotter
