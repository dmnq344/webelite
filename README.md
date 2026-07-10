# Expert Isolation — Site démo

Site vitrine démo pour **Expert Isolation**, compagnie d'isolation et de toiture au Québec.

## Aperçu

- **Thème** : « Nuit nordique » — fond marine profond, accent ambre (chaleur) et bleu glacial (hiver).
- **Pièce maîtresse** : scène 3D Three.js sur la page d'accueil — une maison québécoise dans une nuit d'hiver (neige, sapins, cheminée fumante, lampadaire). La caméra est **chorégraphiée par le scroll** : elle orbite autour de la maison au fil des sections et révèle une **coupe murale** montrant l'isolant incandescent dans la section « Performance thermique ».
- **Animations** : GSAP + ScrollTrigger (révélations, scrub 3D), compteurs, jauges thermiques, marquee, slider de témoignages, accordéons FAQ, neige 2D sur les sous-pages.
- **Aucune dépendance externe au chargement** : Three.js, GSAP et les polices (Sora / Inter) sont auto-hébergés. Aucun CDN, aucune photo externe — tous les visuels sont des SVG procéduraux.

## Pages

| Fichier | Contenu |
|---|---|
| `index.html` | Accueil — héros 3D, services, performance thermique (coupe 3D), processus, réalisations, témoignages, FAQ, soumission |
| `services.html` | Isolation, toiture, ventilation d'entretoit, calfeutrage |
| `realisations.html` | Galerie de projets filtrable, avant/après |
| `a-propos.html` | Histoire, chronologie, valeurs, équipe, certifications, zone desservie |
| `contact.html` | Formulaire de soumission, coordonnées, carte stylisée, urgence 24/7 |

## Structure

```
├── index.html / services.html / realisations.html / a-propos.html / contact.html
├── css/
│   └── styles.css        # design system complet (+ css par page au besoin)
├── js/
│   ├── hero3d.js         # scène 3D scroll-driven (accueil)
│   ├── main.js           # interactions communes
│   └── vendor/           # three.module.js, gsap.min.js, ScrollTrigger.min.js
└── assets/
    ├── fonts/            # Sora + Inter (woff2, auto-hébergées)
    └── svg/              # favicon
```

## Lancer localement

Aucun build requis — c'est un site statique :

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

> Un serveur est nécessaire (plutôt qu'ouvrir `index.html` directement) parce que
> la scène 3D est un module ES (`js/hero3d.js`).

## Notes

- Contenu, coordonnées et numéro RBQ sont des **exemples fictifs** (site démo).
- Le contenu de la page d'accueil est structuré pour être facilement remplacé.
- Respecte `prefers-reduced-motion` (rendu statique, animations coupées).
