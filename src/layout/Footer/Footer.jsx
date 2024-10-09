// Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Importando o CSS do módulo

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footerCol}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Affiliate Program</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Get Help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Payment Options</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Online Shop</h4>
                        <ul>
                            <li><a href="#">Watch</a></li>
                            <li><a href="#">Bag</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Dress</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Follow Us</h4>
                        <div className={styles.socialLinks}>
                            <a href="#"><i className={`${styles.fab} fa-facebook-f`}></i></a>
                            <a href="#"><i className={`${styles.fab} fa-twitter`}></i></a>
                            <a href="#"><i className={`${styles.fab} fa-instagram`}></i></a>
                            <a href="#"><i className={`${styles.fab} fa-linkedin-in`}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;