const header = document.getElementById("header");
let lastScrollTop = 0;

const handleScroll = () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз - ховати хедер
        header.style.top = "-81px"; // приховуємо, висота хедера - 60px
    } else {
        // Прокрутка вгору - показати хедер
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для безпеки
};

window.addEventListener("scroll", handleScroll);
