# Guide de Contribution et Maintenance - Yahya Express

Ce guide s'adresse aux developpeurs et administrateurs techniques charges de la maintenance, de la mise a jour ou de l'evolution du site web Yahya Express.

---

## 1. Execution en Local

Le site etant concu en HTML/CSS/JS statique sans etape de compilation prealable, il peut etre teste localement avec n'importe quel serveur web simple :

### Avec Python 3 :
```bash
# Se placer dans le repertoire du projet
cd "Yahya expres"

# Lancer un serveur HTTP local sur le port 8000
python -m http.server 8000
```
Ouvrir ensuite votre navigateur a l'adresse : `http://localhost:8000/`.

### Avec l'extension VS Code Live Server :
Ouvrir le dossier dans VS Code ou Antigravity IDE, faire un clic droit sur `index.html` et selectionner *Open with Live Server*.

---

## 2. Ajout de Nouvelles Photographies dans la Galerie

1. Placer le fichier image optimise (format `.jpg` ou `.png`, compression web) dans le dossier `assets/images/`.
2. Ouvrir le fichier `gallery.html`.
3. Ajouter un bloc de carte dans la section `.gallery-grid` :
```html
<div class="gallery-card">
  <img src="assets/images/nom-de-votre-image.jpg" alt="Description precise" loading="lazy">
  <div class="gallery-card-info">
    <div class="gallery-card-title">Titre du visuel</div>
    <div class="gallery-card-desc">Description contextuelle</div>
  </div>
</div>
```
4. Verifier que le fichier est correctement charge sans erreur 404.

---

## 3. Modification des Informations de Contact

Si le numero de telephone ou les canaux de messagerie changent, veiller a reporter la modification dans l'ensemble des fichiers suivants :
- `index.html` (Bandeau d'en-tete, Hero, Section Contact, Footer)
- `services.html` (Boutons d'appel et footer)
- `gallery.html` (Boutons d'appel et footer)
- `contact.html` (Panneau d'information, formulaire et footer)
- `mentions-legales.html` (Article 1)
- `cgu.html` (Article 5)
- `politique-confidentialite.html` (Article 6)
- `cookies.html` (Pied de page)
- `sitemap.html` (Pied de page)
- `scripts/main.js` (Lien de generation WhatsApp dans `whatsappUrl`)
- `README.md` et `GUIDELINES.md`

---

## 4. Deploiement sur GitHub Pages

Le deploiement est gere automatiquement par GitHub Actions.

1. Verifier l'etat des modifications :
```bash
git status
```
2. Ajouter les fichiers modifies :
```bash
git add .
```
3. Creer un commit descriptif (norme Conventional Commits recommandee) :
```bash
git commit -m "fix: mise a jour des horaires d'ouverture"
```
4. Pousser vers la branche principale :
```bash
git push origin main
```
5. Le pipeline GitHub Actions construira et publiera automatiquement la nouvelle version sur `https://bilgassim.github.io/yahya-express/` en moins de 30 secondes.

---

## 5. Verification de la Qualite du Code

Avant tout deploiement en production, verifier les points suivants :
- Aucun caractere emoji present dans le code source ou la documentation.
- Validite de l'ensemble des liens internes (chemins relatifs).
- Affichage conforme sur ecran mobile (< 480px) et ordinateur de bureau (> 1200px).
- Fonctionnement du formulaire de contact et redirection vers WhatsApp avec message pre-rempli.
