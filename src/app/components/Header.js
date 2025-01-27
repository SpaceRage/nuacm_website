const Header = () => {
    return (
      <header className="bg-black text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md border-b border-celestial-blue">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Website Name */}
          <div className="flex items-center space-x-2">
            <img src="/circle.svg" alt="ACM Logo" className="h-8 w-8" />
            <h1 className="text-xl font-bold">ACM @ Northeastern</h1>
          </div>
          {/* Navigation Links */}
          <nav className="space-x-4">
            <a href="#home" className="hover:text-tiffany-blue">
              Home
            </a>
            <a href="#events" className="hover:text-tiffany-blue">
              Events
            </a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScS02Ue9s1cGUU_nbAl6OeJV2YJ85r9gKAw-sAF1NXgsVNLlQ/viewform" className="hover:text-tiffany-blue">Join Us</a>
            {/* <a href="#contact" className="hover:text-tiffany-blue">
              Contact Us
            </a> */}
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  