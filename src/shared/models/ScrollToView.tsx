/**
 * calculate scroll offset
 * @param id
 * @returns
 */
const getOffset = (id: string) => {
    let offset = -0.2;
    const projectSection = document.getElementById("projects");

    if (id === "home") {
        offset = 0;
    } else if (id === "projects") {
        if (projectSection) {
            const projectTop =
                projectSection.getBoundingClientRect().top + window.scrollY;
            offset = window.scrollY < projectTop ? 1 : 0;
        }
    }

    return offset;
};

/**
 * scroll to section
 * @param sectionId
 */
export const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const offset = getOffset(sectionId) * window.innerHeight;

        window.scrollTo({
            top: sectionTop - offset,
            behavior: "smooth",
        });
    }
};
