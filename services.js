// ============================================================
//  NALDRUSH NAILS — Services et modeles
//  EXEMPLES A REMPLACER par les vrais services de la patronne :
//  ses prix, ses durees et ses photos a elle.
// ============================================================
 
const SERVICES = [
  { nom: "Manucure classique", duree: "45 min", prix: 0, desc: "Limage, cuticules, hydratation et vernis classique au choix.", photo: "service1.jpg" },
  { nom: "Pose gel complète", duree: "1 h 30", prix: 0, desc: "Construction gel sur ongles naturels ou capsules, finition brillante.", photo: "service2.jpg", populaire: true },
  { nom: "Remplissage gel", duree: "1 h", prix: 0, desc: "Entretien de la pose gel, renforcement et nouvelle couleur.", photo: "service3.jpg" },
  { nom: "Beauté des pieds", duree: "30 min", prix: 0, desc: "Dessins, strass, effets et finitions selon vos envies du moment.", photo: "service4.jpg" },
  { nom: "Nail art personnalisé", duree: "1 h", prix: 0, desc: "Pédicure spa complète, gommage, massage et vernis.", photo: "service5.jpg" },
  { nom: "Dépose + soin réparateur", duree: "30 min", prix: 0, desc: "Retrait en douceur du gel et soin nourrissant des ongles naturels.", photo: "service6.jpg" }
];
 
const MODELES = [
  { nom: "Rose poudré", photo: "modele1.jpg" },
  { nom: "French classique", photo: "modele2.jpg" },
  { nom: "Rouge glamour", photo: "modele3.jpg" },
  { nom: "Nude élégant", photo: "modele4.jpg" },
  { nom: "Brillants de soirée", photo: "modele5.jpg" },
  { nom: "Fleurs délicates", photo: "modele6.jpg" }
];
 
function formatPrix(n) {
  return n + " $";
}