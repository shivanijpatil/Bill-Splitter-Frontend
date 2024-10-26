import React from "react";
import './Footer.css';

function FooterSection() {
    return (
        <footer className="containerfooter">
            {/* Menu Section */}
            <div className="section_footer">
                <h5>Menu</h5>
                <ul className="nav">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Services</a></li>
                    <li><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </div>

            {/* Help Section */}
            <div className="section_footer1">
                <h5>Help</h5>
                <ul className="nav">
                    <li><a href="#" className="nav-link">FAQ</a></li>
                    <li><a href="#" className="nav-link">Terms & Conditions</a></li>
                    <li><a href="#" className="nav-link">Reporting</a></li>
                    <li><a href="#" className="nav-link">Documentation</a></li>
                    <li><a href="#" className="nav-link">Support Policy</a></li>
                    <li><a href="#" className="nav-link">Privacy</a></li>
                </ul>
            </div>

            {/* Contact/Newsletter Section */}
            <div className="contactus">
                <form>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Don't miss any updates!</p>
                    <div className="helpmenu">
                        <input
                            id="newsletter1"
                            type="text"
                            className="form-control"
                            placeholder="Email address"
                        />
                        <button className="btn btn-primary" type="button">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </footer>
    );
}

export default FooterSection;
