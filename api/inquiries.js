import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, project, budget, deadline, details } = req.body || {};
  if (!name?.trim() || !email?.trim() || !details?.trim()) {
    return res.status(400).json({ error: 'Please complete your name, email and project details.' });
  }
  if (!process.env.DATABASE_URL) {
    return res.status(500).json({ error: 'Database is not configured yet.' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      INSERT INTO inquiries (name, email, project_type, budget, deadline, details)
      VALUES (${name.trim()}, ${email.trim()}, ${project || null}, ${budget || null}, ${deadline || null}, ${details.trim()})
    `;
    return res.status(201).json({ ok: true });
  } catch (error) {
    console.error('Inquiry save failed:', error);
    return res.status(500).json({ error: 'Could not save your enquiry.' });
  }
}