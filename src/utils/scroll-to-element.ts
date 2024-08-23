export const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);

    if (element) {
        if (elementId === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
            return;
        }

        const yOffset = window.innerWidth <= 768 ? -40 : -100;
        const y =
            element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    }
};
