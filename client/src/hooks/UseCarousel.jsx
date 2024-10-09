import { useEffect, useRef } from 'react';
import stylesCardEquipe from '../pages/Home/components/CardEquipe.module.css'; // Certifique-se de importar o CSS

export const useCarousel = () => {
    const wrapperRef = useRef(null);
    const carouselRef = useRef(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const carousel = carouselRef.current;

        if (!carousel) {
            console.error("O carrossel não foi encontrado.");
            return;
        }

        const firstCard = carousel.querySelector(`.${stylesCardEquipe.card}`);
        if (!firstCard) {
            console.error("Nenhum card foi encontrado.");
            return;
        }

        const firstCardWidth = firstCard.offsetWidth;
        const arrowBtns = wrapper.querySelectorAll("i");

        // Verifique se os botões de seta foram encontrados corretamente
        if (arrowBtns.length === 0) {
            console.error("Botões de seta não foram encontrados.");
            return;
        }

        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        const carouselChildrens = [...carousel.children];

        // Inserir cópias para rolagem infinita
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Função para rolar o carrossel para a esquerda ou direita
        const scrollCarousel = (direction) => {
            const scrollAmount = firstCardWidth;  // Defina a quantidade de scroll como o tamanho de um card
            if (direction === 'left') {
                console.log('Movendo para a esquerda');
                carousel.scrollLeft -= scrollAmount;
            } else {
                console.log('Movendo para a direita');
                carousel.scrollLeft += scrollAmount;
            }
        };

        // Adicionando eventos de clique para os botões de seta
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const direction = btn.id === "left" ? 'left' : 'right';
                console.log(`Botão ${direction} clicado`);
                scrollCarousel(direction);  // Rolar o carrossel na direção correspondente
            });
        });

        // Eventos de arrastar e rolar
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            clearTimeout(timeoutId);
            if (!wrapper.matches(":hover")) autoPlay();
        };

        const autoPlay = () => {
            if (window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        };

        autoPlay();

        // Eventos para arrastar e mover o carrossel
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);

        return () => {
            // Limpar eventos ao desmontar o componente
            carousel.removeEventListener("mousedown", dragStart);
            carousel.removeEventListener("mousemove", dragging);
            document.removeEventListener("mouseup", dragStop);
            carousel.removeEventListener("scroll", infiniteScroll);
            wrapper.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
            wrapper.removeEventListener("mouseleave", autoPlay);
        };
    }, []);

    return { wrapperRef, carouselRef };
};