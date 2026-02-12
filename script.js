window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.querySelector(".navbar").classList.remove("hidden");
        document.body.style.overflow = "auto";
    }, 2600);
});
