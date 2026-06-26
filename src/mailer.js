// Transporteur SMTP partagé (réutilisé par la livraison et la prospection).
import nodemailer from 'nodemailer';
import { config } from './config.js';

let cached = null;

export function getTransporter() {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: config.smtp.host,
    port: config.smtp.port,
    secure: config.smtp.secure,
    auth: { user: config.smtp.user, pass: config.smtp.pass },
  });
  return cached;
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
