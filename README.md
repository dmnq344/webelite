# WebElite — Agent prospects 🎯

Agent IA qui trouve **100 prospects par jour au Québec** : des entreprises **sans
site web** et qui en ont besoin, puis qui te les **envoie automatiquement par
email** (avec un fichier CSV en pièce jointe).

## Comment ça marche

1. **Recherche** — l'agent balaye les villes du Québec et récupère les
   commerces/PME via **OpenStreetMap** (gratuit, sans clé API). En option, il
   enrichit avec **Google Places** si tu fournis une clé.
2. **Filtrage** — il ne garde que les entreprises **sans vrai site web** (une
   simple page Facebook = au contraire un excellent prospect) et **joignables**
   (téléphone, email ou adresse).
3. **Anti-doublons** — il mémorise les prospects déjà envoyés (`data/seen.json`)
   pour ne jamais te renvoyer deux fois la même entreprise.
4. **Classement** — il trie par potentiel (joignabilité + catégorie porteuse :
   restaurants, salons, garages, cliniques…) et garde les **100 meilleurs**.
5. **Livraison** — il t'envoie la liste par **email** avec le CSV complet joint.

## Installation

```bash
npm install
cp .env.example .env   # puis remplis tes identifiants email
```

### Configuration de l'email (.env)

Exemple avec Gmail :

1. Active la **validation en 2 étapes** sur ton compte Google.
2. Crée un **mot de passe d'application** (Google → Sécurité → Mots de passe des
   applications).
3. Remplis dans `.env` :

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=ton.email@gmail.com
SMTP_PASS=le_mot_de_passe_application
EMAIL_FROM=WebElite Prospects <ton.email@gmail.com>
EMAIL_TO=mezidi.bilal@gmail.com
```

## Utilisation

```bash
# Test SANS envoyer d'email (vérifie que tout marche) :
npm run dry-run

# Exécution réelle (envoie l'email + met à jour l'anti-doublons) :
npm start
```

## Automatisation quotidienne (GitHub Actions)

Le workflow `.github/workflows/daily-prospects.yml` lance l'agent **tous les
jours à ~7h00 (Québec)**, sans serveur à gérer.

Dans ton dépôt GitHub → **Settings → Secrets and variables → Actions**, ajoute
ces **secrets** :

| Secret | Exemple |
|--------|---------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | `ton.email@gmail.com` |
| `SMTP_PASS` | mot de passe d'application |
| `EMAIL_FROM` | `WebElite Prospects <ton.email@gmail.com>` |
| `EMAIL_TO` | `mezidi.bilal@gmail.com` |
| `GOOGLE_PLACES_API_KEY` | *(optionnel)* |

Et éventuellement ces **variables** : `DAILY_TARGET` (défaut 100),
`TARGET_CITIES` (liste de villes séparées par des virgules).

Tu peux aussi lancer le workflow manuellement depuis l'onglet **Actions →
Prospects quotidiens → Run workflow**.

## Personnalisation

- **Villes ciblées** : variable `TARGET_CITIES` dans `.env`.
- **Nombre par jour** : variable `DAILY_TARGET`.
- **Catégories d'entreprises** : voir `src/sources/overpass.js` (liste des
  `amenity`/`shop`/`craft`…).
- **Google Places** : ajoute `GOOGLE_PLACES_API_KEY` pour enrichir les contacts.

## Structure

```
src/
  index.js                 Orchestrateur principal
  config.js                Lecture .env + configuration
  sources/overpass.js      Recherche OpenStreetMap (gratuit)
  sources/googlePlaces.js  Enrichissement Google (optionnel)
  store.js                 Mémoire anti-doublons
  score.js                 Classement par potentiel
  csv.js                   Génération du CSV
  deliver/email.js         Envoi de l'email
data/seen.json             Prospects déjà envoyés
out/                       Exports CSV quotidiens
```

## Note légale ⚖️

Les données proviennent d'OpenStreetMap (licence ODbL) et, en option, de Google
Places. Utilise les coordonnées de prospection dans le respect des lois
anti-pourriel canadiennes (**Loi C-28 / LCAP**) : identifie-toi clairement,
propose un moyen de désabonnement et privilégie un premier contact pertinent.
