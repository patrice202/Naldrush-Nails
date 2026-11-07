// ============================================================
//  NALDRUSH NAILS — Moteur du site
// ============================================================
 
// ---------- CONFIGURATION — A PERSONNALISER ----------
// Remplace ces trois lignes par les vraies informations :
// 1) Le lien de reservation (Cal.com ou Calendly de la patronne)
// 2) Le numero WhatsApp du salon (format international, chiffres seulement)
// 3) Le lien Instagram du salon
const LIEN_RESERVATION = "https://cal.com/";
const NUMERO_WHATSAPP = "50935230731";
const LIEN_INSTAGRAM = "https://www.instagram.com/ruth_naldrush?exln=a2U3MGcxc3dzbmc0";
 
// ---------- Liens du site ----------
document.querySelectorAll(".js-book").forEach(function (a) {
  a.href = LIEN_RESERVATION;
});
document.querySelectorAll(".js-wa").forEach(function (a) {
  a.href = "https://wa.me/" + NUMERO_WHATSAPP;
});
document.querySelectorAll(".js-insta").forEach(function (a) {
  a.href = LIEN_INSTAGRAM;
});
 
// ---------- Services ----------
const listeServices = document.getElementById("liste-services");
SERVICES.forEach(function (s) {
  const carte = document.createElement("article");
  carte.className = "service-carte";
  carte.innerHTML =
    (s.populaire ? '<span class="badge-pop">★ Populaire</span>' : "") +
    '<img src="' + s.photo + '" alt="' + s.nom + '" loading="lazy" onerror="this.style.display=\'none\'">' +
    "<h3>" + s.nom + "</h3>" +
    '<p class="duree">' + s.duree + "</p>" +
    "<p>" + s.desc + "</p>" +
    '<p class="prix">' + formatPrix(s.prix) + "</p>" +
    '<a class="btn btn-or js-book" href="' + LIEN_RESERVATION + '" target="_blank" rel="noopener">Réserver</a>';
  listeServices.appendChild(carte);
});
 
// ---------- Galerie cinematique ----------
const vitrine = document.getElementById("vitrine");
MODELES.forEach(function (m) {
  const carte = document.createElement("div");
  carte.className = "modele-carte";
  carte.setAttribute("data-nom", m.nom);
  carte.innerHTML = '<img src="' + m.photo + '" alt="' + m.nom + '" loading="lazy" draggable="false" onerror="this.style.display=\'none\'">';
  vitrine.appendChild(carte);
});
 
function majVitrine() {
  const cartes = vitrine.querySelectorAll(".modele-carte");
  if (!cartes.length) return;
  const centre = vitrine.scrollLeft + vitrine.clientWidth / 2;
  let meilleure = null, meilleureDist = Infinity;
  cartes.forEach(function (carte) {
    const c = carte.offsetLeft + carte.offsetWidth / 2;
    const dist = Math.abs(c - centre);
    if (dist < meilleureDist) { meilleureDist = dist; meilleure = carte; }
    carte.classList.remove("active");
  });
  if (meilleure) {
    meilleure.classList.add("active");
    document.getElementById("modele-nom").textContent = meilleure.getAttribute("data-nom");
  }
}
 
let defile = false;
vitrine.addEventListener("scroll", function () {
  if (!defile) {
    defile = true;
    requestAnimationFrame(function () { majVitrine(); defile = false; });
  }
});
 
let appuye = false, departX = 0, departDefile = 0, aBouge = false;
vitrine.addEventListener("pointerdown", function (e) {
  appuye = true; aBouge = false;
  departX = e.clientX; departDefile = vitrine.scrollLeft;
});
window.addEventListener("pointermove", function (e) {
  if (!appuye) return;
  if (Math.abs(e.clientX - departX) > 6) aBouge = true;
  vitrine.scrollLeft = departDefile - (e.clientX - departX);
});
window.addEventListener("pointerup", function () { appuye = false; });
 
function glisserVitrine(dir) {
  vitrine.scrollBy({ left: dir * vitrine.clientWidth * 0.7, behavior: "smooth" });
}
 
// ---------- Visionneuse photo ----------
vitrine.addEventListener("click", function (e) {
  if (aBouge) return;
  const carte = e.target.closest(".modele-carte");
  if (!carte) return;
  const img = carte.querySelector("img");
  document.getElementById("visionneuse-img").src = img.src;
  document.getElementById("visionneuse-legende").textContent = carte.getAttribute("data-nom");
  document.getElementById("visionneuse").classList.remove("hidden");
});
document.getElementById("visionneuse").addEventListener("click", function () {
  document.getElementById("visionneuse").classList.add("hidden");
});
 
// ---------- Apparition en douceur (moteur sur) ----------
document.documentElement.classList.add("js-reveal");
function verifierApparitions() {
  document.querySelectorAll(".reveal:not(.visible)").forEach(function (el) {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", verifierApparitions, { passive: true });
window.addEventListener("resize", verifierApparitions);
window.addEventListener("hashchange", function () { setTimeout(verifierApparitions, 60); });
verifierApparitions();
setTimeout(verifierApparitions, 400);
 
// ---------- Divers ----------
document.getElementById("annee").textContent = new Date().getFullYear();
majVitrine();