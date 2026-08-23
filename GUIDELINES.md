# Directives de Developpement et Regles Strictes - Yahya Express

Ce document etablit les standards editoriaux, graphiques et techniques a respecter obligatoirement lors de toute modification ou extension du projet, que ce soit par un developpeur humain ou un agent d'intelligence artificielle (IA).

---

## 1. Regles Editoriales et Tonalite

- **Interdiction absolue des Emojis :** Aucun caractere emoji ne doit apparaitre dans le code HTML, les scripts JS, les fichiers CSS, les commentaires de code, les documents Markdown ou les textes visibles sur le site.
- **Tonalite Professionnelle et Neutre :** Le ton doit demeurer sobre, factuel, institutionnel et corporatif.
- **Interdiction du vocabulaire promotionnel exagere :** Bannir les termes grandiloquents ou artificiels (ex. « revolutionnaire », « magique », « incroyable », « n°1 inconteste » sans preuve documentaire).
- **Interdiction des faux temoignages ou fausses donnees :** Ne jamais inventer d'avis clients fictifs, de statistiques non verifiees ou de faux logos partenaires.
- **Interdiction du style redactionnel propre aux IA :** Eviter les phrases d'introduction creuses, les tournures de remplissage ou les salutations superflues.

---

## 2. Charte Graphique et Assets Visuels

- **Couleurs Officielles Immuables :**
  - Rouge principal : `#D60000` (survol : `#B30000`)
  - Noir : `#111111` (surfaces secondaires : `#1F1F1F`)
  - Blanc : `#FFFFFF`
  - Gris neutres : `#F8F9FA`, `#E5E7EB`, `#4B5563`, `#6B7280`
- **Typographie :** Sans-serif moderne, sans polices decoratives exotiques.
- **Gestion des Images :**
  - Utiliser exclusivement les photographies, affiches et videos reelles fournies par l'entreprise situees dans le dossier `assets/images/` et `assets/videos/`.
  - Ne jamais integrer d'images de banques d'images tierces ou generees par IA sans autorisation expresse.

---

## 3. Coordonnees Officielles de l'Entreprise

Toutes les mentions de contact doivent pointer strictement vers les canaux officiels ci-apres :

- **Standard Telephonique et Ligne Principale :** `+212 697-893261` (Format d'appel HTML : `tel:+212697893261`)
- **Ligne WhatsApp Directe :** `+212 697-893261` (Lien API : `https://wa.me/212697893261?text=Demande%20de%20livraison`)
- **Page Facebook :** `https://www.facebook.com/share/r/18RxTsJQQd/`
- **Profil Instagram :** `https://www.instagram.com/yahyaexpress?utm_source=qr&igsi=OGlzcHl0dHpwaDJ2`
- **Compte TikTok :** `https://www.tiktok.com/@yahya.express?_r=1&_t=ZS-9989slw1Ds7`
- **Zone Geographique d'Intervention :** Ville de Berkane, Region de l'Oriental, Royaume du Maroc.

---

## 4. Conformite Juridique et Protection des Donnees

- Maintenir a jour les 4 documents legaux obligatoires :
  1. `mentions-legales.html` (Loi n° 31-08 et Loi n° 17-97)
  2. `cgu.html` (Conditions Generales d'Utilisation)
  3. `politique-confidentialite.html` (Conformite Loi n° 09-08 CNDP et RGPD UE 2016/679)
  4. `cookies.html` (Gestion des traceurs techniques)
- S'assurer que le site n'embarque aucun traceur publicitaire ou outil de tracking intrusif non declare.
- Les formulaires de contact ne doivent collecter que les donnees strictement indispensables a l'acheminement des colis.

---

## 5. Regles Techniques et Performance

- **Compatibilite Mobile-First :** Le site doit rester parfait sur smartphone, tablette et grand ecran.
- **Zero Dependance Inutile :** Ne pas ajouter de librairies lourdes (comme jQuery, Bootstrap ou Tailwind) sans besoin critique averee. Le code CSS natif et JS natif garantissent un temps de chargement inferieur a 1 seconde.
- **Bouton d'Appel Flottant :** Conserver le bouton fixe d'appel direct en bas a droite de l'ecran pour une accessibilite immediate par les clients mobiles.
- **En-tete Fixe (Sticky) :** Conserver la barre de navigation visible lors du defilement.
