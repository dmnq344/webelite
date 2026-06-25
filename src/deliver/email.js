// Livraison par email : envoie la liste quotidienne avec le CSV en pièce jointe
// et un tableau HTML récapitulatif dans le corps du message.
import nodemailer from 'nodemailer';
import { config } from '../config.js';
import { toCsv } from '../csv.js';

function htmlTable(prospects) {
  const rows = prospects
    .map(
      (p, i) => `
      <tr>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;">${i + 1}</td>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;"><strong>${escapeHtml(
          p.name
        )}</strong></td>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;">${escapeHtml(
          p.category
        )}</td>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;">${escapeHtml(
          p.phone || '—'
        )}</td>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;">${escapeHtml(
          p.email || '—'
        )}</td>
        <td style="padding:6px 10px;border-bottom:1px solid #eee;">${escapeHtml(
          p.city
        )}</td>
      </tr>`
    )
    .join('');

  return `
  <div style="font-family:Arial,Helvetica,sans-serif;color:#222;">
    <h2 style="margin-bottom:4px;">📋 ${prospects.length} prospects du jour — Québec</h2>
    <p style="color:#666;margin-top:0;">Entreprises sans site web, classées par potentiel. Le fichier CSV complet est en pièce jointe.</p>
    <table style="border-collapse:collapse;font-size:14px;width:100%;">
      <thead>
        <tr style="background:#0d6efd;color:#fff;text-align:left;">
          <th style="padding:8px 10px;">#</th>
          <th style="padding:8px 10px;">Entreprise</th>
          <th style="padding:8px 10px;">Catégorie</th>
          <th style="padding:8px 10px;">Téléphone</th>
          <th style="padding:8px 10px;">Email</th>
          <th style="padding:8px 10px;">Ville</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <p style="color:#999;font-size:12px;margin-top:16px;">Généré automatiquement par l'agent WebElite • Source : OpenStreetMap / Google Places</p>
  </div>`;
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export async function sendProspectEmail(prospects, dateStr) {
  const transporter = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: { user: config.smtp.user, pass: config.smtp.pass },
  });

  const csv = toCsv(prospects);

  const info = await transporter.sendMail({
    from: config.email.from,
    to: config.email.to,
    subject: `🎯 ${prospects.length} prospects sans site web — Québec (${dateStr})`,
    html: htmlTable(prospects),
    attachments: [
      {
        filename: `prospects-${dateStr}.csv`,
        content: csv,
        contentType: 'text/csv; charset=utf-8',
      },
    ],
  });

  return info.messageId;
}
