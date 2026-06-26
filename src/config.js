// Chargement de la configuration depuis les variables d'environnement.
// On lit un éventuel fichier .env sans dépendance externe (dotenv-like).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function loadDotEnv() {
  const envPath = path.join(rootDir, '.env');
  if (!fs.existsSync(envPath)) return;
  const content = fs.readFileSync(envPath, 'utf8');
  for (const rawLine of content.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eq = line.indexOf('=');
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    // Retire les guillemets éventuels
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadDotEnv();

function splitList(value, fallback = []) {
  if (!value) return fallback;
  return value
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

export const config = {
  rootDir,
  dailyTarget: parseInt(process.env.DAILY_TARGET || '100', 10),

  cities: splitList(process.env.TARGET_CITIES, [
    'Montréal',
    'Québec',
    'Laval',
    'Gatineau',
    'Longueuil',
    'Sherbrooke',
    'Trois-Rivières',
  ]),

  smtp: {
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: (process.env.SMTP_SECURE || 'true') === 'true',
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASS || '',
  },
  email: {
    from: process.env.EMAIL_FROM || process.env.SMTP_USER || '',
    to: process.env.EMAIL_TO || '',
  },

  googlePlacesApiKey: process.env.GOOGLE_PLACES_API_KEY || '',

  // --- Prospection : envoi de courriels personnalisés aux prospects ---
  outreach: {
    // 'draft' = génère les courriels et te les envoie pour validation.
    // 'auto'  = envoie directement aux prospects depuis ton adresse.
    mode: (process.env.OUTREACH_MODE || 'draft').toLowerCase(),
    // Nombre maximum de courriels de prospection envoyés par jour.
    dailyCap: parseInt(process.env.OUTREACH_DAILY_CAP || '40', 10),
    // Délai entre deux envois (ms) pour rester sous les radars anti-spam.
    throttleMs: parseInt(process.env.OUTREACH_THROTTLE_MS || '8000', 10),
  },

  // Identité de l'expéditeur (utilisée dans le courriel + obligatoire LCAP).
  sender: {
    name: process.env.SENDER_NAME || '',
    business: process.env.SENDER_BUSINESS || 'WebElite',
    phone: process.env.SENDER_PHONE || '',
    // Adresse postale physique — OBLIGATOIRE selon la loi C-28 (LCAP).
    address: process.env.SENDER_ADDRESS || '',
    portfolio: process.env.SENDER_PORTFOLIO || '',
    // Adresse de réponse (par défaut = ton adresse d'envoi).
    replyTo: process.env.SENDER_REPLY_TO || process.env.SMTP_USER || '',
  },

  dataDir: path.join(rootDir, 'data'),
  outDir: path.join(rootDir, 'out'),
  seenFile: path.join(rootDir, 'data', 'seen.json'),
  contactedFile: path.join(rootDir, 'data', 'contacted.json'),
};

export function emailConfigured() {
  const { smtp, email } = config;
  return Boolean(smtp.host && smtp.user && smtp.pass && email.to);
}

// Vérifie que l'identité minimale requise par la LCAP est renseignée.
export function senderConfigured() {
  const { sender } = config;
  return Boolean(sender.name && sender.address);
}
