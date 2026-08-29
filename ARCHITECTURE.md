# Architecture Technique - Yahya Express

Ce document detaille l'architecture technique, l'organisation des fichiers et le fonctionnement du site web statique de Yahya Express.

---

## 1. Vue d'Ensemble du Projet

- **Nom du projet :** Yahya Express
- **Type d'application :** Site web vitrine et de mise en relation statique (JAMstack / Client-Side)
- **Hebergement :** GitHub Pages avec workflow de deploiement automatise via GitHub Actions
- **Nom de domaine :** https://yahyaexpress.com
- **Technologies utilisees :** HTML5 semantique, CSS3 moderne, JavaScript Vanilla (ES6+)
- **Dependances externes :** Aucune dependance logicielle lourde ou framework JS (zero build step requis)

---

## 2. Arborescence du Repertoire

```
yahya-express/
 index.html                      # Page d'accueil (Hero, Engagements, Territoire, Services)
 services.html                   # Page detaillee des 3 prestations
 gallery.html                    # Galerie responsive des photos et videos reelles
 contact.html                    # Formulaire de commande et coordonnees
 mentions-legales.html           # Mentions legales (Droit marocain)
 cgu.html                        # Conditions Generales d'Utilisation
 politique-confidentialite.html  # Politique de protection des donnees (Loi 09-08 & RGPD)
 cookies.html                    # Politique relative aux cookies et traceurs
 sitemap.html                    # Plan du site format HTML
 sitemap.xml                     # Plan du site format XML pour moteurs de recherche

 styles/
    style.css                   # Feuille de style principale (Variables, Layout, Composants)

 scripts/
    main.js                     # Logique applicative (Menu mobile, validation, pont WhatsApp)

 assets/
    images/                     # Logos, photographies reelles et favicons
    videos/                     # Fichiers video MP4

 .github/
    workflows/
        deploy.yml              # Pipeline GitHub Actions pour GitHub Pages

 .gitignore                      # Fichiers exclus du suivi de version
 README.md                       # Documentation generale du projet
 ARCHITECTURE.md                 # Description technique de l'architecture
 GUIDELINES.md                   # Regles de developpement et directives strictes
 CONTRIBUTING.md                 # Guide de contribution pour developpeurs
 LEGAL_COMPLIANCE.md             # Conformite juridique marocaine et europeenne
 ASSETS_MAP.md                   # Inventaire detaille des fichiers medias
 CHANGELOG.md                    # Journal des modifications et deploiements
```

---

## 3. Charte Graphique et System de Design (CSS)

Le fichier `styles/style.css` centralise l'ensemble des declarations de style en utilisant des variables CSS natives (`:root`) :

### Palette de Couleurs
- `--color-primary` : `#D60000` (Rouge officiel)
- `--color-primary-hover` : `#B30000`
- `--color-dark` : `#111111` (Noir profond pour les textes, arriere-plans sombres et footer)
- `--color-dark-alt` : `#1F1F1F`
- `--color-white` : `#FFFFFF` (Contrastes et fonds de section clairs)
- `--color-gray-light` : `#F8F9FA` (Sections alternees)
- `--color-gray-border` : `#E5E7EB` (Bordures discretes)
- `--color-gray-text` : `#4B5563` (Paragraphes et descriptions)
- `--color-gray-muted` : `#6B7280`

### Typographie
- Police systeme moderne sans empattement : `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Hierarchie stricte : H1 (titres de pages), H2 (titres de sections), H3 (titres de blocs), P (texte courant)

### Mise en Page (Layout)
- Grille responsive basee sur CSS Grid (`grid-template-columns`) et Flexbox.
- Breakpoints :
  - Ordinateurs de bureau : > 900px
  - Tablettes : 768px a 900px
  - Mobiles : < 768px

---

## 4. Logique JavaScript (`scripts/main.js`)

Le script JavaScript natif comprend trois modules principaux :

1. **Gestion de la Navigation Mobile :**
   - Bascule de la classe CSS `.mobile-open` sur le menu `.nav-links` lors du clic sur `.mobile-menu-btn`.

2. **Pont de Commande WhatsApp :**
   - Interception de la soumission du formulaire `contactForm`.
   - Extraction et validation des champs (`nom`, `telephone`, `adresse`, `typeLivraison`, `message`).
   - Formatage d'un message structure en texte brut.
   - Encodage via `encodeURIComponent()` et redirection vers l'API WhatsApp officielle (`https://wa.me/212697893261`).

3. **Mise a Jour Dynamique du Copyright :**
   - Recuperation de l'annee en cours via `new Date().getFullYear()` et injection dans les elements `.current-year`.

---

## 5. Pipeline d'Integration et Deploiement Continu

Le workflow `.github/workflows/deploy.yml` declenche automatiquement les etapes suivantes a chaque commande `git push` sur la branche `main` :
1. `actions/checkout@v4` : Recuperation des sources.
2. `actions/configure-pages@v5` : Configuration de l'environnement GitHub Pages.
3. `actions/upload-pages-artifact@v3` : Emballage des fichiers statiques a la racine du depot.
4. `actions/deploy-pages@v4` : Publication vers l'URL officielle https://yahyaexpress.com.
