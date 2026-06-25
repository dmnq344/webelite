// Mémoire anti-doublons : on garde la trace des prospects déjà envoyés
// pour ne jamais renvoyer deux fois la même entreprise jour après jour.
import fs from 'node:fs';
import path from 'node:path';
import { config } from './config.js';

export function loadSeen() {
  try {
    const raw = fs.readFileSync(config.seenFile, 'utf8');
    const parsed = JSON.parse(raw);
    return new Set(parsed.ids || []);
  } catch {
    return new Set();
  }
}

export function saveSeen(seenSet) {
  fs.mkdirSync(config.dataDir, { recursive: true });
  const payload = {
    updatedAt: new Date().toISOString(),
    count: seenSet.size,
    ids: [...seenSet],
  };
  fs.writeFileSync(config.seenFile, JSON.stringify(payload, null, 2));
}

// Clé de déduplication robuste : si la même entreprise apparaît via OSM ET
// Google, on la considère identique (même nom normalisé + même téléphone).
export function dedupKey(prospect) {
  const name = (prospect.name || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]/g, '');
  const phone = (prospect.phone || '').replace(/\D/g, '');
  return phone ? `tel:${phone}` : `name:${name}:${prospect.city.toLowerCase()}`;
}

ensureDirs();

function ensureDirs() {
  fs.mkdirSync(config.dataDir, { recursive: true });
  fs.mkdirSync(config.outDir, { recursive: true });
}
