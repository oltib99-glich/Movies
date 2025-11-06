
const icon = document.getElementById("themeIcon");

icon.addEventListener("click", () => {
    document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
} else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
   }
});

function updateOra() {
  const now = new Date();
  document.getElementById('ora').textContent = now.toLocaleTimeString();
}
setInterval(updateOra, 1000);
updateOra();

