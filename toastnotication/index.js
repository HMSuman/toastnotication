const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
btn.addEventListener("click", () => {
    creteNotification();
});

function creteNotification() {
    const notif = document.createElement("div");
    notif.classList.add("toast");
    notif.innerText = "this challenge is crazy";
    container.appendChild(notif);
    setTimeout(() => {
        notif.remove();
    }, 3000);
}