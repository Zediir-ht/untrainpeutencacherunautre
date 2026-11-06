---
name: Un train peut en cacher un autre
description: Le convoi d'art actuel qui traverse les villages de la Bouriane, en papiers déchirés et wagons farceurs.
colors:
  ink: "#15103c"
  outremer: "#2338ff"
  tomate: "#ff4b2b"
  moutarde: "#ffc61a"
  menthe: "#6fe3b0"
  rose-guimauve: "#ff9bd0"
  lilas: "#b9a6ff"
  papier-os: "#fff6e2"
  ciel-vitre: "#bfe6ff"
  rouge-tampon: "#b81d08"
  papier-hachure: "#ece0c2"
  encre-douce: "#5a5480"
  rose-erreur: "#fff0ec"
typography:
  display:
    fontFamily: "Bagel Fat One, Arial Rounded MT Bold, sans-serif"
    fontSize: "clamp(2.3rem, 6.2vw, 5.4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0em"
  headline:
    fontFamily: "Bagel Fat One, Arial Rounded MT Bold, sans-serif"
    fontSize: "clamp(2rem, 4.8vw, 3.7rem)"
    fontWeight: 400
    lineHeight: 1.02
  title:
    fontFamily: "Bagel Fat One, Arial Rounded MT Bold, sans-serif"
    fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.02
  body:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 450
    lineHeight: 1.55
  label:
    fontFamily: "Special Elite, Courier New, monospace"
    fontSize: "0.85rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "0.04em"
rounded:
  xs: "4px"
  plaque: "6px"
  champ: "8px"
  wagon: "12px 12px 5px 5px"
  pastille: "999px"
spacing:
  gouttiere: "clamp(16px, 4vw, 48px)"
  section: "clamp(3.5rem, 8vw, 7rem)"
  bande: "clamp(4rem, 9vw, 8rem)"
  collage-gap: "1.6rem 1.4rem"
  conteneur: "1240px"
components:
  billet-primaire:
    backgroundColor: "{colors.tomate}"
    textColor: "{colors.ink}"
    padding: "0.7rem 1.8rem"
    height: "4.4rem"
  billet-secondaire:
    backgroundColor: "{colors.moutarde}"
    textColor: "{colors.ink}"
    padding: "0.7rem 1.8rem"
    height: "4.4rem"
  billet-encre:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.papier-os}"
    padding: "0.7rem 1.8rem"
  wagon-nav:
    backgroundColor: "{colors.tomate}"
    textColor: "{colors.ink}"
    rounded: "{rounded.wagon}"
    padding: "0.55rem 1.1rem 0.5rem"
  wagon-nav-actif:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.tomate}"
    rounded: "{rounded.wagon}"
  papier:
    backgroundColor: "{colors.papier-os}"
    textColor: "{colors.ink}"
    padding: "1.5rem 1.7rem"
  champ:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.champ}"
    padding: "0.8rem 0.9rem"
  pastille-choix:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.pastille}"
    padding: "0.6rem 1rem"
  pastille-choix-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.moutarde}"
    rounded: "{rounded.pastille}"
  plaque-wagon:
    backgroundColor: "{colors.papier-os}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plaque}"
    padding: "3px 9px 2px"
---

# Design System: Un train peut en cacher un autre

## Overview

**Creative North Star: "Le Convoi d'Art Actuel"**

Le site est un train de marchandises qui transporte l'art de village en village. Chaque page est un wagon peint d'une livrée différente. Les contenus voyagent dessus comme des papiers déchirés collés à la main, et des wagons farceurs passent, s'arrêtent et cachent ce qu'il y a derrière. Le nom de l'association est le moteur du système : partout, une chose en cache une autre. Le second train est sous le premier, la page suivante arrive derrière un convoi, les plaques n'apparaissent qu'une fois le train soulevé.

Le ressenti est **tactile et farceur**. Tout ressemble à un objet en papier ou en tôle peinte qu'on pourrait attraper : il penche un peu, il a une ombre, il réagit au doigt. L'humour vit dans le décor, les passagers et les titres, jamais dans les faits ni dans les libellés d'action. Densité moyenne, beaucoup d'air entre les morceaux, aucune grille rigide visible.

L'anti-modèle confirmé est **le site culturel institutionnel** : hero photo sage, grille de cartes égales, fond crème et serif élégant. Si une page commence à y ressembler, elle a perdu le convoi.

**Key Characteristics:**
- Une couleur de fond pleine par page (la livrée), jamais un fond neutre.
- Des papiers déchirés aux bords irréguliers, légèrement tournés, avec une ombre douce.
- Des titres en mots-rançon, chaque mot sur son propre papier.
- Des trains dessinés avec des passagers absurdes (œil, moustache, poisson, vache, œuf, fantôme, chapeau melon).
- Des billets de train à encoches comme boutons d'action.
- Un mouvement physique : les trains accélèrent, freinent, les yeux suivent la souris et clignent.

## Colors

Palette pleine de cinq teintes saturées de livrée, posée sur une encre bleu-nuit et un papier os, sans aucun gris neutre.

### Primary
- **Bleu Outremer** (outremer) : livrée de l'accueil et des Cours et stages. Grand aplat de fond, jamais en petit accent.
- **Rouge Tomate** (tomate) : livrée de l'Historique et des Liens ; billet d'action principal (« Monter à bord ») ; wagon de tête du menu.

### Secondary
- **Jaune Moutarde** (moutarde) : livrée d'Adhérer et de la Boutique ; billet secondaire ; cuivres des locomotives ; anneau de focus sur fond sombre.
- **Vert Menthe** (menthe) : livrée des Artistes ; bandes de section sur l'accueil.

### Tertiary
- **Rose Guimauve** (rose-guimauve) : livrée du Contact et du Livre d'or ; bouton « Soulever le train » ; rideaux des wagons ; joues des locos.
- **Lilas** (lilas) : livrée de l'Actualité ; wagons et papiers d'appoint.
- **Ciel de Vitre** (ciel-vitre) : fond des fenêtres, hublots et lucarnes, là où un passager regarde dehors.

### Neutral
- **Encre Bleu-Nuit** (ink) : tout le texte posé sur papier, tous les contours, les roues, les toits, le pied de page et la livrée de la page Photos. C'est la seule « couleur sombre » du système.
- **Papier Os** (papier-os) : le papier par défaut des morceaux déchirés, les plaques émaillées, les rayons des roues.
- **Papier Hachure** (papier-hachure) : la seconde teinte des hachures « pas encore disponible » (récaps à intégrer, billet désactivé).
- **Encre Douce** (encre-douce) : uniquement le texte d’exemple des champs (placeholder), 4,6:1 sur blanc.
- **Rose Erreur** (rose-erreur) : le fond d’un champ refusé.
- **Rouge Tampon** (rouge-tampon) : uniquement pour l'encre des tampons (« Jusqu'à 66 % », « Fragile, art actuel ») et les messages d'erreur. C'est une version foncée de la tomate, qui passe le contraste sur papier os.

### Named Rules
**The Livrée Rule.** Chaque page possède exactement une couleur de fond pleine, et un papier ne prend jamais la couleur du fond sur lequel il est posé.

**The Encre Unique Rule.** Le texte sur papier est toujours à l'encre bleu-nuit. Le texte sur fond outremer ou encre est blanc. Pas de gris pour le texte secondaire : on teinte depuis l'encre ou on réduit la taille.

**The Tampon Rule.** Le rouge tampon est réservé aux tampons et aux erreurs. La tomate n'est jamais utilisée comme couleur de texte sur papier clair (contraste 3,1:1).

## Typography

**Display Font:** Bagel Fat One (avec Arial Rounded MT Bold, sans-serif)
**Body Font:** Bricolage Grotesque, axes optique et graisse (avec system-ui)
**Label/Mono Font:** Special Elite (avec Courier New)

**Character:** une linogravure dodue pour crier les titres comme une affiche de fête de village, une grotesque à caractère pour lire confortablement, et une machine à écrire pour tout ce qui est tamponné, composté ou imprimé sur un billet. Les trois polices sont auto-hébergées dans `assets/fonts/`.

### Hierarchy
- **Display** (400, clamp(2.3rem, 6.2vw, 5.4rem), 1) : le titre de l'accueil et les titres de page, toujours en mots-rançon majuscules. Plafond de 5,4rem sur toutes les pages.
- **Headline** (400, clamp(2rem, 4.8vw, 3.7rem), 1.02) : titres de section, suivis d'un bout de voie dessiné dessous.
- **Title** (400, clamp(1.3rem, 2.2vw, 1.7rem), 1.02) : titres à l'intérieur des papiers, wagons du menu, plaques.
- **Body** (450, 1.0625rem, 1.55) : texte courant, largeur maximale 62ch. Le gras (700 à 800) sert aux noms d'artistes et aux liens.
- **Label** (400, 0.85rem, 0.04em, souvent en majuscules) : dates, lieux, petites lignes des billets, étiquettes de champs, tampons.

### Échelle
Toutes les tailles hors titres fluides passent par huit marches : 0.75 · 0.85 · 0.95 · 1.05 · 1.25 · 1.5 · 1.9 · 2.4rem (variables `--fs-2xs` à `--fs-3xl`). Seule exception : l’inscription « Fragile, art actuel » dessinée sur les wagons de fret (0.6rem), qui fait partie du dessin et non du texte.

### Named Rules
**The Rançon Rule.** Un titre de page se compose de mots séparés, chacun sur un papier de couleur différente, avec une rotation de ±1 à 3°. Un mot sur deux ou trois peut changer de police (Special Elite ou Bricolage 800) pour l'effet découpé.

**The Machine à Écrire Rule.** Special Elite ne sert qu'à ce qui serait imprimé ou tamponné dans le monde réel : billets, dates, lieux, tampons, étiquettes. Jamais pour un paragraphe de plus de deux lignes, sauf une citation.

## Layout

Conteneur de 1240px maximum, centré, avec une gouttière fluide de 16 à 48px. Les sections respirent : 3,5 à 7rem entre sections et 4 à 8rem pour les bandes de couleur pleine largeur. Les compositions de papiers utilisent une grille de 12 colonnes où chaque papier occupe une étendue différente (7 + 5, 5 + 6, 8 centrée…) et se décale verticalement de 1,5 à 2,5rem par rapport à son voisin. Ça donne un collage, pas une grille de cartes.

Les bandes de couleur ont un **bord supérieur déchiré** (bande de 40px générée en JS) qui mord sur la section précédente. Le pied de page encre en a un aussi.

Les pages chronologiques (Historique, Cours et stages) suivent une **voie verticale** à gauche, avec traverses, et un petit train collant qui descend avec le visiteur. Les stations alternent leur retrait.

Points de rupture : **900px**, où tous les collages passent en une colonne, le menu se replie derrière « Tous les wagons » et le bouton du train passe dans le flux. **700px** : le hublot des en-têtes disparaît. **560px** : la voie verticale et les papiers se resserrent.

## Elevation & Depth

La profondeur vient du papier posé sur le mur : chaque morceau porte une ombre portée douce et décalée vers le bas, appliquée en `filter: drop-shadow` pour suivre le bord déchiré. Pas de verre, pas de flou, pas de halo coloré. Les objets dessinés (trains, hublots) ont des contours encre épais (3 à 8px) qui suffisent à les détacher.

### Shadow Vocabulary
- **Papier posé** (`filter: drop-shadow(0 7px 7px rgb(12 6 70 / 0.3))`) : tous les papiers déchirés, les groupes de billets, les mots-rançon.
- **Objet suspendu** (`box-shadow: 0 12px 18px rgb(12 6 70 / 0.3)`) : le hublot des en-têtes, les affiches dans l'Actualité.

### Named Rules
**The Papier Posé Rule.** Une ombre a toujours un décalage vertical et un flou doux. L'ombre décalée sans flou (néo-brutaliste) n'appartient pas à ce monde.

## Shapes

Deux familles de formes cohabitent. **Le papier déchiré** : rectangles dont les quatre bords sont découpés par un polygone irrégulier, généré de façon déterministe par élément, avec 3 à 6px d'amplitude. **La tôle de train** : formes arrondies et épaisses, toits bombés (rayon 14px en haut), caisses à 5px, wagons du menu à 12px en haut et 5px en bas, roues parfaitement rondes à rayons.

Les billets sont des rectangles avec deux **encoches semi-circulaires** de 11px sur les côtés (masque radial), et les billets d'expo une perforation pointillée entre souche et corps. Les champs ont un rayon de 8px et les choix une forme de pastille.

Les arrondis d’interface se limitent à cinq valeurs (4, 6, 8px, le wagon 12/12/5/5px, la pastille). Les pièces dessinées des trains (toits, tampons, fenêtres) gardent leurs propres rayons : ce sont des illustrations, pas des composants.

**The Pas de Rond Parfait Rule.** Un papier n'est jamais un rectangle net : s'il n'est pas déchiré, c'est qu'il est en tôle (wagon), en carton (billet) ou en émail (plaque).

## Components

### Buttons (billets de train)
- **Character:** un billet en carton qu'on composte.
- **Shape:** rectangle à encoches latérales de 11px, hauteur minimale de 4,4rem.
- **Primary:** fond tomate, texte encre. Une petite ligne en machine à écrire majuscule au-dessus (« Billet aller · coopérer »), puis l'action en Bagel 1,5rem (« Monter à bord »).
- **Secondary:** fond moutarde. **Encre:** fond encre, texte papier os, pour un terminus (« Toute la ligne »).
- **Hover / Focus:** soulevé de 4px et tourné de -1,5° en 200ms, sur appareil à souris uniquement. Au clic, `scale(0.97)` en 100ms. Focus : double anneau (contour encre 3px plus anneau moutarde ou blanc de 6px).
- **Disabled:** hachures papier os, curseur interdit.

### Chips (pastilles de choix)
- **Style:** pastille blanche, contour encre 3px, texte gras.
- **State:** sélectionnée, elle passe en encre avec texte moutarde et se tourne de -2°.

### Cards / Containers (papiers déchirés)
- **Corner Style:** bords déchirés, pas de rayon.
- **Background:** une teinte de la palette, différente de la livrée de la page, avec un grain de fibres en surimpression.
- **Shadow Strategy:** Papier posé.
- **Border:** aucune, le bord déchiré suffit.
- **Internal Padding:** 1,5rem × 1,7rem (0,9 × 1,2rem en version serrée).
- **Rotation:** -2° à +2°, variée selon la position.

### Inputs / Fields
- **Style:** fond blanc, contour encre 3px, rayon 8px, curseur tomate, placeholder encre adouci (#5a5480).
- **Focus:** double anneau du système.
- **Error:** contour tomate, fond rosé, message rouge tampon qui dit le problème avec humour mais clairement. Le champ secoue la tête une fois (260ms).

### Navigation (le train de voyageurs et le train de marchandises)
- **Style:** deux trains de liens attelés. En haut, six wagons principaux en Bagel 1,1rem (Accueil, Actualité, Les artistes, Historique, Adhérer, Contact). En dessous, cinq wagons de marchandises plus petits (0,92rem). Chaque wagon a deux roues et un attelage vers le suivant.
- **States:** survol : le wagon se soulève et se penche, ses roues font deux tours. Page en cours : le wagon passe en encre et son nom prend sa couleur.
- **Mobile:** sous 900px, les deux trains se replient derrière un wagon moutarde « Tous les wagons · 11 rubriques », et les attelages disparaissent.

### Trains (signature)
Générés en JS. Il existe quatre types de wagons :
- **voyageurs** : toit à aérateurs, deux fenêtres à rideaux festonnés avec un passager, plaque émaillée ;
- **fret** : planches, porte en X, lucarne, tampon « Fragile, art actuel » ;
- **plat-toile** : un tableau dans son cadre moutarde ;
- **plat-sculpture** : une poire-sculpture lilas à un œil.

Tous ont deux bogies de quatre roues cerclées de tomate et des tampons. La locomotive porte une cheminée cerclée, des dômes en laiton, un phare, un conducteur, des yeux qui suivent la souris (ressort) et clignent, des joues roses et une moustache.

**Mouvement :** arrivée en 2s avec un `ease-out` (`cubic-bezier(0.23, 1, 0.32, 1)`). Départ en 1,2s avec un `ease-in-out` franc (`cubic-bezier(0.77, 0, 0.175, 1)`). Les roues freinent au lieu de s'arrêter net.

### Mots-rançon et hublot (en-têtes de page)
Le titre en mots-rançon se colle mot par mot au chargement (60ms d'écart). À droite, un hublot rond, cerclé d'encre et de blanc, montre le passager de la rubrique et se balance doucement.

### Passage entre pages (signature)
Au clic sur un lien interne, un train sur fond encre traverse l'écran en 400ms et cache le changement de page, puis repart vers la droite à l'arrivée de la page suivante.

## Do's and Don'ts

### Do:
- **Do** donner à chaque nouvelle page sa propre livrée pleine prise dans la palette, et un passager pour son hublot.
- **Do** poser le contenu sur des papiers déchirés qui varient en couleur, en étendue et en rotation (±2°).
- **Do** écrire les titres de page en mots-rançon et les titres de section avec leur bout de voie.
- **Do** utiliser les billets à encoches pour toute action principale, avec une ligne en machine à écrire qui dit le contexte.
- **Do** garder les durées d'interface sous 250ms (survol 200ms, clic 100ms), et réserver les mouvements longs aux trains et au passage entre pages.
- **Do** réserver les survols aux appareils à souris (`@media (hover: hover) and (pointer: fine)`) et couper les mouvements de position sous `prefers-reduced-motion`.
- **Do** garder l'humour dans le décor, les passagers et les titres, et les faits exacts.

### Don't:
- **Don't** ressembler au site culturel institutionnel : pas de hero photo sage, pas de grille de cartes égales, pas de fond crème avec serif élégant.
- **Don't** poser un papier de la même couleur que la livrée de la page.
- **Don't** utiliser la tomate comme couleur de texte sur papier clair : c'est le rouge tampon qui sert.
- **Don't** utiliser d'ombre décalée sans flou, de verre, de flou décoratif ou de dégradé dans le texte.
- **Don't** utiliser d'emoji ni de caractère Unicode comme icône : les passagers et les objets sont dessinés en SVG avec un trait encre de 3px.
- **Don't** mettre de blague dans un libellé d'action ou un message d'erreur au point d'en cacher le sens.
- **Don't** faire de blague dans les sections de mémoire (artistes disparus) : elles restent sobres, sur fond encre.
