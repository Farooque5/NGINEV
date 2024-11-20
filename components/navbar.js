import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]); // Only depend on lastScrollY

  const isActive = (path) => router.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full h-20 bg-black bg-opacity-50 z-20 flex justify-between items-center px-6 md:px-16 shadow-md transition-transform duration-300 ${
        scrollingUp ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <Link href="/" aria-label="Go to homepage" className="text-2xl font-bold text-red-600 cursor-pointer">
        NGINEV
      </Link>

      {/* Hamburger/Close Icon */}
      <button
        className={`md:hidden text-3xl cursor-pointer transition-transform duration-300 ${
          menuOpen ? 'rotate-180' : 'rotate-0'
        }`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={toggleMenu}
        style={{ zIndex: 30 }}  // Ensure it stays in front of the menu
      >
        {menuOpen ? <FaTimes className="text-red-600" /> : <FaBars className="text-red-600" />}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 font-semibold text-lg">
        {[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Contact Us', path: '/contact' },
        ].map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className={`${
                isActive(link.path) ? 'text-red-600' : 'text-gray-200'
              } hover:text-red-600 group`}
            >
              {link.name}
              <span
                className={`block h-0.5 bg-red-600 transition-all duration-200 ${
                  isActive(link.path) ? 'w-full' : 'w-0'
                } group-hover:w-full`}
              />
            </Link>
          </li>
        ))}

        {/* Dropdown for Services */}
        <li className="relative group">
          <button
            className={`text-gray-200 hover:text-red-600 ${
              ['/software', '/hardware', '/marketing', '/printing'].includes(router.pathname)
                ? 'text-red-600'
                : ''
            }`}
            aria-haspopup="menu"
            aria-expanded={menuOpen ? 'true' : 'false'}
          >
            Services
            <span className="block w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full" />
          </button>
          <ul
            className="absolute top-full bg-black bg-opacity-75 rounded-md shadow-lg p-2 space-y-2 text-gray-100 hidden group-hover:block"
            role="menu"
          >
            {['Software', 'Hardware', 'Marketing', 'Printing'].map((service) => (
              <li key={service}>
                <Link
                  href={`/${service.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-950 hover:text-red-600 rounded-md"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <ul
        className={`md:hidden text-gray-100 text-lg space-y-4 p-5 absolute top-20 right-0 w-1/2 bg-black bg-opacity-90 rounded-bl-lg shadow-lg transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="menu"
        style={{ zIndex: 20 }}  // Ensure it stays behind the hamburger/close icon
      >
        {['Home', 'About', 'Software', 'Hardware', 'Marketing', 'Printing', 'Contact Us'].map((item) => (
          <li key={item}>
            <Link
              href={`/${item.toLowerCase().replace(/\s/g, '')}`}
              className={`${
                isActive(`/${item.toLowerCase().replace(/\s/g, '')}`)
                  ? 'text-red-600'
                  : 'text-gray-100'
              } hover:text-red-600 block font-semibold`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
