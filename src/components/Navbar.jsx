import React, { useContext, useEffect, useState } from 'react'
import  { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky , setIsSticky] = useState(false);

    const {user} = useContext(AuthContext)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(()=> {
        const handleScroll = () => {
            if(window.scrollY > 100) {
                setIsSticky(true);
            }
            else{
                setIsSticky(false);
            }

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.addEventListener("scroll",handleScroll);
            }
        }

    },[]);

    const navItems = [
        {link: "Home" , path:"/"},
        {link: "About" , path:"/about"},
        {link: "Shop" , path:"/shop"},
        {link: "Sell your book" , path:"/admin/dashboard"},
        {link: "Blog" , path:"/blog"},
    ]

  return (
    <header className='w-full bg-gradient-to-b from-cyan-900 to-cyan-800   fixed top-0 right-0 left-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 right-0 left-0 bg-gradient-to-b from-cyan-900 to-cyan-200 ":""}`}>
            <div className='flex justify-between items-center text-base text-white gap-8'>
                <Link to="/" className='text-2xl font-bold text-blue-200 flex items-center gap-2' >
                    <FaBlog className='inline-block'/>Book-Z
                </Link>

                <ul className='md:flex space-x-12 hidden'>
                  {
                    navItems.map(({link, path}) =>  <Link key={path} to={path} className='block text-base uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                  }
                </ul>
                
                <div className="space-x-12 hidden  lg:flex items-center">
                    <button>
                        <FaBarsStaggered className='w-5 hover:text-blue-700'/>
                    </button>
                </div>

                {/* this section is to design mobile devices */}
                
                <div className="md:hidden">
                    <button onClick={toggleMenu} className='focus:outline-none '> 
                        {
                            isMenuOpen ? <FaXmark className='w-5 h-5 '/> : <FaBarsStaggered className='w-5 h-5 '/>
                        }
                    </button>
                </div>  

                <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                  {
                    navItems.map(({link, path}) =>  <Link key={path} to={path} className='block text-base uppercase text-white cursor-pointer hover:text-blue-700'>{link}</Link>)
                  } 
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Navbar
