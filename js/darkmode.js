const themeToggle = document.getElementById("themeToggle");
const icon = themeToggle.querySelector("i");

// Load tema saat halaman dibuka
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    icon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");

        icon.classList.replace("bi-moon-stars-fill", "bi-sun-fill");

    } else {

        localStorage.setItem("theme", "light");

        icon.classList.replace("bi-sun-fill", "bi-moon-stars-fill");

    }

});