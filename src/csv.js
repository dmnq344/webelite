// Génération du CSV (joint à l'email + sauvegardé dans /out).
import fs from 'node:fs';
import path from 'node:path';
import { config } from './config.js';

const COLUMNS = [
  ['name', 'Nom'],
  ['category', 'Catégorie'],
  ['phone', 'Téléphone'],
  ['email', 'Email'],
  ['address', 'Adresse'],
  ['city', 'Ville'],
  ['facebook', 'Facebook'],
  ['source', 'Source'],
  ['osmUrl', 'Lien OSM'],
];

function escapeCsv(value) {
  const s = String(value ?? '');
  if (/[",\n;]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

export function toCsv(prospects) {
  const header = COLUMNS.map(([, label]) => label).join(',');
  const rows = prospects.map((p) =>
    COLUMNS.map(([key]) => escapeCsv(p[key])).join(',')
  );
  // BOM UTF-8 pour qu'Excel affiche correctement les accents.
  return '﻿' + [header, ...rows].join('\n');
}

export function writeCsvFile(prospects, dateStr) {
  fs.mkdirSync(config.outDir, { recursive: true });
  const filePath = path.join(config.outDir, `prospects-${dateStr}.csv`);
  fs.writeFileSync(filePath, toCsv(prospects), 'utf8');
  return filePath;
}
