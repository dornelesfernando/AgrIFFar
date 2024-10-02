// Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <h4>Sobre Nós</h4>
                    <p>Somos uma empresa dedicada a oferecer os melhores serviços e soluções para nossos clientes.</p>
                    <p><a href="/sobre" className={styles.link}>Saiba mais</a></p>
                </div>
                <div className={styles.support}>
                    <h4>Suporte</h4>
                    <ul>
                        <li><a href="/faq" className={styles.link}>FAQ</a></li>
                        <li><a href="/contato" className={styles.link}>Contato</a></li>
                        <li><a href="/política-de-privacidade" className={styles.link}>Política de Privacidade</a></li>
                        <li><a href="/termos-de-serviço" className={styles.link}>Termos de Serviço</a></li>
                    </ul>
                </div>
                <div className={styles.socials}>
                    <h4>Siga-nos</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>LinkedIn</a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>YouTube</a>
                    </div>
                </div>
                <div className={styles.newsletter}>
                    <h4>Inscreva-se na Newsletter</h4>
                    <form>
                        <input type="email" placeholder="Seu email" required className={styles.emailInput} />
                        <button type="submit" className={styles.subscribeButton}>Inscrever-se</button>
                    </form>
                </div>
            </div>
            <div className={styles.copyRight}>
                <p>&copy; 2024 Sua Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;