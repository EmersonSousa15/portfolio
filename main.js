const technologiesSection = document.querySelector("#technologies-container");
const downloadButton = document.querySelector("#downloadButton");

const cardsInformations = [
    {
        title: "HTML",
        image: "./assets/icons/html-5-svgrepo-com.svg"
    },
    {
        title: "CSS",
        image: "./assets/icons/css-3-svgrepo-com.svg"
    },
    {
        title: "JavaScript",
        image: "./assets/icons/javascript-svgrepo-com.svg"
    },
    {
        title: "TypeScript",
        image: "./assets/icons/TypeScript.svg"
    },
    {
        title: "React",
        image: "./assets/icons/react-svgrepo-com.svg"
    },
    {
        title: "Next",
        image: "./assets/icons/next-16-svgrepo-com.svg"
    }
]

cardsInformations.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("card-tecnologies");

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = `${card.title} icon`;
    img.loading = "lazy";

    const h2 = document.createElement("h2");
    h2.textContent = card.title;

    div.append(img, h2);
    technologiesSection.appendChild(div);
});


downloadButton.addEventListener("click", () => {
    window.open("https://drive.google.com/file/d/1FTujvTEhYhMVxavF5pUr-BG74fFyuDOt/view?usp=sharing", "_blank");
})