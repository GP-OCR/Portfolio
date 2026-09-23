# Rapport Lighthouse

Page testée : https://gp-ocr.github.io/Portfolio/

Date du passage : 23 septembre 2026, vers 13 h 37 (heure de Paris).
Outil : Lighthouse 13.5.0, en ligne de commande, sur la page publiée.

Deux passages. Le mobile simule un écran de 412 px, un réseau lent
et un processeur ralenti (réglage par défaut de Lighthouse).
L'ordinateur simule un écran de 1350 px et une connexion plus large.

Ce passage est celui d'avant le correctif CSS.

## Scores

| Catégorie | Mobile | Ordinateur |
|---|---|---|
| Performance | 69 | 97 |
| Accessibilité | 100 | 100 |
| Bonnes pratiques | 100 | 100 |
| SEO | 100 | 100 |

## Mesures de performance

| Mesure | Mobile | Ordinateur |
|---|---|---|
| FCP, premier affichage | 3,8 s | 0,6 s |
| LCP, plus gros élément | 5,5 s | 1,2 s |
| TBT, blocage du fil principal | 0 ms | 0 ms |
| CLS, décalage de mise en page | 0 | 0 |
| SI, indice de vitesse | 5,1 s | 0,7 s |

Sur mobile, le plus gros élément est le titre du bandeau
(« Bonjour, moi c'est Gaetan Pruvot »). Il attend les feuilles
de style. Lighthouse estime environ 1,1 s pour Bootstrap
et environ 1,0 s pour Font Awesome.

Lighthouse indique que ces valeurs sont estimées et peuvent
varier d'un passage à l'autre.

## Après le correctif CSS

Page testée : https://gp-ocr.github.io/Portfolio/

Date du passage : 23 septembre 2026, vers 14 h 42 (heure de Paris).
Outil : Lighthouse 13.5.0, en ligne de commande, Chrome sans
extensions. Mêmes réglages que le passage de 13 h 37.

| Catégorie | Mobile | Ordinateur |
|---|---|---|
| Performance | 100 | 100 |
| Accessibilité | 100 | 100 |
| Bonnes pratiques | 100 | 100 |
| SEO | 100 | 100 |

| Mesure | Mobile | Ordinateur |
|---|---|---|
| FCP, premier affichage | 0,8 s | 0,2 s |
| LCP, plus gros élément | 1,1 s | 0,6 s |
| TBT, blocage du fil principal | 0 ms | 0 ms |
| CLS, décalage de mise en page | 0 | 0,011 |
| SI, indice de vitesse | 0,8 s | 0,2 s |

Les cinq notes de performance sont au plafond (10, 25, 30, 25
et 10), donc 100. Sur ordinateur le CLS vaut 0,011, sur les
liens du menu. La note de cette mesure reste à 25.

Lighthouse cite encore `style.css` comme feuille bloquante.
Le score de performance reste 100.

Un passage dans une fenêtre Chrome avec des extensions, le
même jour, donnait 96 en mobile et 95 en ordinateur.
Lighthouse prévenait que les extensions pesaient sur le
chargement. Le passage en ligne de commande, sans extension,
est celui du tableau.
