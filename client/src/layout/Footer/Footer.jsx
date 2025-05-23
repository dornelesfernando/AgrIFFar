// Footer.js
import React from 'react';
import styles from './Footer.module.css'; // Importando o CSS do módulo
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate(); 

    const handleButtonClick = () => {
        navigate('/notfound');
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footerCol}>
                        <h4>Empresa</h4>
                        <ul>
                            <li><a href='/home/aboutUs'>Sobre Nós</a></li>
                            <li><a href='/home/ourServices'>Nossos Serviços</a></li>
                            <li><a href='/home/privacyPolicy'>Plítica de Privacidade</a></li>
                            <li><a href='/home/institution'>Instituição</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerCol}>
                        <h4>Peça Ajuda</h4>
                        <ul>
                            <li><a href='/home/FAQ'>FAQ</a></li>
                            {/*<li><a onClick={() => handleButtonClick()}>Shipping</a></li>
                            <li><a onClick={() => handleButtonClick()}>Returns</a></li>
                            <li><a onClick={() => handleButtonClick()}>Order Status</a></li>
                            <li><a onClick={() => handleButtonClick()}>Payment Options</a></li>*/}
                        </ul>
                    </div>
                    {/*<div className={styles.footerCol}>
                        <h4>Online Shop</h4>
                        <ul>
                            <li><a onClick={() => handleButtonClick()}>Watch</a></li>
                            <li><a onClick={() => handleButtonClick()}>Bag</a></li>
                            <li><a onClick={() => handleButtonClick()}>Shoes</a></li>
                            <li><a onClick={() => handleButtonClick()}>Dress</a></li>
                        </ul>
                    </div>*/}
                    <div className={styles.footerCol}>
                        <h4>Siga nos</h4>
                        <div className={styles.socialLinks}>
                            <a><i className='fab fa-facebook-f'></i></a>
                            <a><i className='fab fa-twitter'></i></a>
                            <a><i className='fab fa-instagram'></i></a>
                            <a><i className='fab fa-linkedin-in'></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;