import { Link } from "react-router-dom";

function Footer() {
  return (
  <div >
    <footer class="footer-area py-4 ">
      <div className="container">
        <p className="">&copy; {new Date().getFullYear()} PortFolio. All Rights Reserved.</p>
        {/* <ul className="flex space-x-4 mt-2 md:mt-0">
          <li>
            <Link to="/Resume" className="hover:text-gray-300 transition duration-200">
              Resume
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="hover:text-gray-300 transition duration-200">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/About-Me" className="hover:text-gray-300 transition duration-200">
              About Me
            </Link>
          </li>
          <li>
            <Link to="/Contact-Me" className="hover:text-gray-300 transition duration-200">
              Contact Me
            </Link>
          </li>
        </ul> */}
      </div>
    </footer>
  </div>
 );
}

export default Footer;
