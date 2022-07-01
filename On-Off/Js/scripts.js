const statusDiv = document.querySelector(".status");
const statusDesc = document.querySelector(".statusDesc");
const iconStatus = document.querySelector(".icone");

const statusTexto = navigator.onLine ? "Online" : "Offline";

if (statusTexto === "Online") {
  statusDesc.innerText = statusTexto;
  iconStatus.setAttribute("class", "fa-solid fa-wifi");
  statusDiv.classList.add("online");
} else {
  statusDesc.innerText = statusTexto;
  iconStatus.setAttribute("class", "fa-thin fa-wifi-slash");
  //statusDiv.classList.add("offline");
}

window.addEventListener("online", () => {
  statusDiv.classList.remove("offline");
  statusDesc.innerText = "Online";
  iconStatus.setAttribute("class", "fa-solid fa-wifi");
  statusDiv.classList.add("online");
});

window.addEventListener("offline", () => {
  statusDiv.classList.remove("online");
  statusDesc.innerText = "Offline";
  iconStatus.setAttribute("class", "fa-thin fa-wifi-slash");
  statusDiv.classList.add("offline");
});
