// Mémoire des prospects déjà CONTACTÉS par courriel, pour ne jamais écrire
// deux fois à la même entreprise.
import fs from 'node:fs';
import { config } from '../config.js';

export function loadContacted() {
  try {
    const parsed = JSON.parse(fs.readFileSync(config.contactedFile, 'utf8'));
    return new Set(parsed.emails || []);
  } catch {
    return new Set();
  }
}

export function saveContacted(set) {
  fs.mkdirSync(config.dataDir, { recursive: true });
  fs.writeFileSync(
    config.contactedFile,
    JSON.stringify(
      { updatedAt: new Date().toISOString(), count: set.size, emails: [...set] },
      null,
      2
    )
  );
}

export function contactKey(prospect) {
  return (prospect.email || '').trim().toLowerCase();
}
