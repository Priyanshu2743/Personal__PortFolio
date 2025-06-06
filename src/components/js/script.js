import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MagnificPopup from "react-magnific-popup";

const PortfolioScripts = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");
    
    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkMode);
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        new ClipboardJS(".btn-copy");
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const sliderSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        prevArrow: <i className="fas left icon fa-arrow-left"></i>,
        nextArrow: <i className="fas right icon fa-arrow-right"></i>,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    };

    return (
        <div>
            <button className="theme-control-btn" onClick={toggleDarkMode}>Toggle Theme</button>
            
            {/* Mobile menu control */}
            <div className="mobile-menu-control-bar" onClick={() => {
                document.querySelector(".mobile-menu-overlay").classList.add("show");
                document.querySelector(".navbar-main").classList.add("show");
            }}>
                Open Menu
            </div>
            <div className="mobile-menu-overlay" onClick={() => {
                document.querySelector(".mobile-menu-overlay").classList.remove("show");
                document.querySelector(".navbar-main").classList.remove("show");
            }}>
            </div>
            
            {/* Email copy button */}
            <button className="btn-copy" data-clipboard-text="your.email@example.com">Copy Email</button>
            
            {/* Magnific Popup */}
            <MagnificPopup>
                <div className="parent-container">
                    <a href="image-url.jpg" className="gallery-popup">Open Image</a>
                </div>
            </MagnificPopup>
            
            {/* Client Feedback Slider */}
            <Slider {...sliderSettings} className="client-feedback-slider">
                <div>Feedback 1</div>
                <div>Feedback 2</div>
            </Slider>

            {/* Article Publications Slider */}
            <Slider {...sliderSettings} className="article-publications-slider">
                <div>Article 1</div>
                <div>Article 2</div>
            </Slider>
        </div>
    );
};

export default PortfolioScripts;