# Feature : CSS qui ne bloque plus le titre

Date : 2026-09-23

## Métier

- Besoin : le titre du bandeau s'affiche sans attendre
  les grosses feuilles du CDN
- Qui est concerné : un visiteur sur mobile, et le jury
  qui regarde le score Lighthouse
- Impact si on ne le fait pas : sur mobile le plus gros
  élément reste le titre, bloqué environ 2 s par
  Bootstrap et Font Awesome (rapport du 23 septembre,
  performance 69)

## Ce qu'on fait

- Comportement visible : le bandeau et la barre sont
  en place tout de suite. Les icônes GitHub, enveloppe
  et mallette restent visibles. La grille, les cartes
  et le menu hamburger arrivent avec Bootstrap, sans
  décaler la barre ni le titre
- Fichiers touchés : `docs/index.html`, `docs/style.css`,
  `README.md`

## Choix techniques

| Choix | Pourquoi | Alternative rejetée | Impact métier |
|-------|----------|---------------------|---------------|
| Icônes en SVG dans la page | 4 icônes, plus de feuille ni de fichiers de police | Garder le CDN Font Awesome, même en différé | le titre n'attend plus cette feuille, les icônes sont dans le HTML |
| Bootstrap en `media="print"` puis `onload` passe en `all` | le fichier se télécharge, le navigateur peint avant | Laisser la feuille bloquante dans le head | le titre n'attend plus Bootstrap |
| `noscript` avec la feuille normale | sans JavaScript, Bootstrap s'applique quand même | Seulement le `onload` | la page reste mise en forme si le JS est coupé |
| `style.css` reste bloquant | il est petit et il dessine le bandeau | Le passer aussi en différé | le titre a sa taille et sa couleur dès le premier affichage |
| Règles de barre et de `.container` recopiées dans `style.css` | mêmes largeurs et même hamburger qu'après Bootstrap, la barre ne saute pas | Réécrire toute la grille sans Bootstrap | le menu et les colonnes restent ceux du sujet |
| Sélecteur `nav.navbar-dark` pour le blanc | notre règle gagne même si Bootstrap arrive après | Compter sur l'ordre des feuilles | les liens restent blancs |
| Pas de hash SRI | un hash faux casse Bootstrap le jour de la démo | Ajouter `integrity` | le site charge. Choix déjà noté dans `pret-eval.md` |

## Traçabilité

| Fichier | Fonction / bloc | Justifié par |
|---------|-----------------|--------------|
| `docs/index.html` | lien Bootstrap `media="print"` | Bootstrap en print puis all |
| `docs/index.html` | bloc `noscript` | sans JavaScript |
| `docs/index.html` | `svg.icon` | icônes en SVG |
| `docs/style.css` | `body`, `.fixed-top`, `.container`, `.navbar*` | la barre ne saute pas |
| `docs/style.css` | `.hero_title`, `.hero_desc`, padding de `.hero-text` | titre stable |
| `docs/style.css` | `nav.navbar-dark` | liens blancs |
| `docs/style.css` | `.icon` | taille des SVG |
| `README.md` | tableau des optimisations | ce que le jury lit |

## Notes

Le rapport Lighthouse garde le passage de 13 h 37 (mobile 69)
et le passage du 23 septembre vers 14 h 42 sur la page
publiée, sans extension (mobile 100, ordinateur 100,
LCP mobile 1,1 s).
