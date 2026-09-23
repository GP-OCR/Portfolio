# Portfolio

Portfolio de Gaetan Pruvot, testeur logiciel en formation
OpenClassrooms (projet 12).

Site statique : HTML, CSS, JavaScript et données JSON
(`data/skills.json`, `data/portfolio.json`).

## Contexte

Deux phases : corriger et optimiser le portfolio fourni (Phase 1),
puis le personnaliser et le publier (Phase 2).

Compétences visées : déboguer avec les Chrome DevTools, optimiser
la performance, déployer un site statique.

## Tests et vérifications (Phase 1)

| Outil | Objectif |
|-------|----------|
| Lighthouse | Scores de la page publiée |
| WAVE | Erreurs et alertes sur la page publiée |
| Console | Pas d'erreur JavaScript après le chargement des cartes |
| Revue manuelle | Compétences, projets, contact, menu mobile |

Rapports du 23 septembre 2026, dans le dépôt :

- [rapport/rapport-wave.md](rapport/rapport-wave.md)
  (0 erreur, 6 alertes, score AIM 9,9)
- [rapport/rapport-lighthouse.md](rapport/rapport-lighthouse.md)
  (avant : mobile 69, ordinateur 97. Après, sur la page
  publiée, sans extension : mobile 100, ordinateur 100.
  Accessibilité, bonnes pratiques et SEO : 100)

Contrôles fonctionnels :

- 0 erreur dans la console
- 6 cartes de compétences
- 4 cartes de projets avec image, texte et lien GitHub
- Icônes de contact visibles (SVG dans la page)
- Email cliquable (`mailto:`)
- Menu hamburger lisible sur mobile

## Bugs corrigés (Phase 1)

| # | Symptôme | Correction |
|---|----------|------------|
| 1 | Icônes contact invisibles | d'abord le CDN Font Awesome, puis des SVG dans la page (la feuille bloquait le titre) |
| 2 | Section Mes projets vide | `apendChild` -> `appendChild` |
| 3 | Carte Test affiche `undefined` | clé JSON `"text"` |
| 4 | Email non cliquable | lien `mailto:` |
| 5 | Menu mobile illisible sur le hero | fond sombre sous 991px |

## Optimisations (Phase 1)

| # | Theme | Actions |
|---|-------|---------|
| 1 | Images | Bandeau : environ 5,1 Mo dans le zip de départ (pas dans git), 622 Ko au premier commit, 300 Ko maintenant. Aperçu Eco Bliss Bath : 386 Ko puis 27 Ko. Photo en 500 px. `loading="lazy"` sur les cartes |
| 2 | Lisibilité | voile sombre sur le hero, texte blanc sur fond sombre |
| 3 | Structure | titres h1 puis h2 puis h3 |
| 4 | CSS bloquant | Font Awesome retiré. Bootstrap en `media="print"` puis `all`, il ne bloque plus le premier affichage. `style.css` reste bloquant : il est petit et il dessine le bandeau |

## Lancement en local

```bash
python3 -m http.server 8123 -d docs
```

Ouvrir http://localhost:8123

## Déploiement

GitHub Pages sert le dossier `docs` de la branche main.
Le rapport WAVE est dans `rapport/`, à la racine du dépôt.

https://gp-ocr.github.io/Portfolio/

## Projets présentés

- [Print-It](https://github.com/GP-OCR/Print-It)
- [Sophie-Bluel](https://github.com/GP-OCR/Sophie-Bluel)
- [Kasa](https://github.com/GP-OCR/Kasa)
- [Eco-Bliss-Bath](https://github.com/GP-OCR/Eco-Bliss-Bath)
