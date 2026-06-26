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

## ✉️ Prospection : envoyer des courriels à ta place

L'agent peut aussi **rédiger et envoyer des courriels de prospection
personnalisés** à chaque prospect (ceux qui ont une adresse email), **depuis ta
propre adresse**. Deux modes :

- **`draft` (par défaut)** — l'agent génère tous les courriels et **te les
  envoie À TOI** pour relecture/validation. Rien n'est envoyé aux prospects.
- **`auto`** — l'agent **envoie directement** aux prospects depuis ton adresse,
  en respectant un plafond quotidien et un délai entre chaque envoi.

```bash
npm run outreach:dry    # aperçu, aucun envoi
npm run outreach        # mode défini par OUTREACH_MODE (.env) — « draft » par défaut
npm run outreach:auto   # force l'envoi direct aux prospects
```

### Identité expéditeur (obligatoire pour l'envoi auto)

La loi anti-pourriel canadienne (**LCAP / C-28**) exige que tu t'identifies.
Renseigne dans `.env` :

```
SENDER_NAME=Bilal Mezidi
SENDER_BUSINESS=WebElite
SENDER_PHONE=514-555-0199
SENDER_ADDRESS=123 rue Principale, Montréal, QC H2X 1A1   # adresse physique OBLIGATOIRE
SENDER_PORTFOLIO=https://webelite.ca
OUTREACH_MODE=draft        # ou « auto »
OUTREACH_DAILY_CAP=40      # max de courriels/jour
OUTREACH_THROTTLE_MS=8000  # délai entre envois (anti-spam)
```

Chaque courriel inclut automatiquement ta signature, ton adresse physique et un
mécanisme de désabonnement (« répondez STOP » + en-tête `List-Unsubscribe`).
L'agent **ne contacte jamais deux fois** la même entreprise.

> ⚖️ **Important** : n'active le mode `auto` que si tu acceptes la
> responsabilité légale de prospecter par courriel (LCAP). Commence par le mode
> `draft` pour valider le ton.

### Automatisation de la prospection

Le workflow `.github/workflows/outreach.yml` se lance **manuellement** (onglet
Actions → *Prospection* → Run workflow → choisis `draft` ou `auto`). Pour le
rendre quotidien, dé-commente le bloc `schedule` dans ce fichier. Ajoute les
**variables** `SENDER_NAME`, `SENDER_ADDRESS`, etc. dans *Settings → Secrets and
variables → Actions → Variables*.

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
