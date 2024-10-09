import React, { useEffect } from 'react';
import styles from './Images.module.css';

function Images() {
    useEffect(() => {
        const images = document.querySelectorAll(`.${styles.lazyLoad}`); // Usando styles.lazyLoad

        const options = {
            root: null, // Usar a viewport
            rootMargin: '0px',
            threshold: 0.1 // A imagem precisa estar 10% visível
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                console.log(entry); // Debug: verifique se as imagens estão sendo observadas
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add(styles.visible); // Adiciona a classe para mostrar a imagem
                    observer.unobserve(img); // Para observar a imagem após a transição
                }
            });
        }, options);

        images.forEach(image => {
            observer.observe(image); // Inicia a observação para cada imagem
        });

        // Limpeza do observer ao desmontar o componente
        return () => {
            images.forEach(image => observer.unobserve(image));
        };
    }, []); // O array vazio garante que o efeito seja executado apenas uma vez após o montamento do componente

    return (
        <>
            <div className={styles.images} id="images">
                <div className={styles.cool}>
                    <div className={styles.box_sub1}>
                        <img className={`${styles.sub1} ${styles.lazyLoad}`} src="/img/img2.jpg" alt="" />
                    </div>
                    <div className={styles.box_sub2}>
                        <img className={`${styles.sub2} ${styles.lazyLoad}`} src="/img/img3.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.coolCenter}>
                    <img className={`${styles.imgCenter} ${styles.lazyLoad}`} src="/img/img1 (definitiva).jpg" alt="" />
                </div>
                <div className={styles.cool}>
                    <div className={styles.box_sub3}>
                        <img className={`${styles.sub1} ${styles.lazyLoad}`} src="/img/img3.jpg" alt="" />
                    </div>
                    <div className={styles.box_sub4}>
                        <img className={`${styles.sub2} ${styles.lazyLoad}`} src="/img/img2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Images;