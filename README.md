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
| Lighthouse | Performance |
| Console | Pas d'erreur JavaScript après le chargement des cartes |
| Revue manuelle | Compétences, projets, contact, menu mobile |

Contrôles fonctionnels :

- 0 erreur dans la console
- 6 cartes de compétences
- 4 cartes de projets avec image, texte et lien GitHub
- Icônes Font Awesome visibles
- Email cliquable (`mailto:`)
- Menu hamburger lisible sur mobile

## Bugs corrigés (Phase 1)

| # | Symptôme | Correction |
|---|----------|------------|
| 1 | Icônes contact invisibles | CDN Font Awesome dans `index.html` |
| 2 | Section Mes projets vide | `apendChild` -> `appendChild` |
| 3 | Carte Test affiche `undefined` | clé JSON `"text"` |
| 4 | Email non cliquable | lien `mailto:` |
| 5 | Menu mobile illisible sur le hero | fond sombre sous 991px |

## Optimisations (Phase 1)

| # | Theme | Actions |
|---|-------|---------|
| 1 | Images | Compression du hero (5,1 Mo -> 300 Ko), `loading="lazy"`, dimensions sur la photo |
| 2 | Lisibilité | voile sombre sur le hero, texte blanc sur fond sombre |
| 3 | Structure | titres h1 puis h2 puis h3, `style.css` après Bootstrap |

## Lancement en local

```bash
python3 -m http.server 8123
```

Ouvrir http://localhost:8123

## Projets présentés

- [Print-It](https://github.com/GP-OCR/Print-It)
- [Sophie-Bluel](https://github.com/GP-OCR/Sophie-Bluel)
- [Kasa](https://github.com/GP-OCR/Kasa)
- [Eco-Bliss-Bath](https://github.com/GP-OCR/Eco-Bliss-Bath)
