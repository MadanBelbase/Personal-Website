const bar = document.getElementById("bars");
const menu = document.querySelector(".navbar ul"); // Select the ul inside .navbar

if (bar) {
    bar.addEventListener("click", () => {
        menu.classList.toggle("active"); // Toggle the 'active' class
    });
}

