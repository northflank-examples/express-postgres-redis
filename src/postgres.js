import { db } from './utils/postgres.js';

export const postgresPage = async (req, res) => {
  // Create the table if it does not already exist.
  await db.query('CREATE TABLE IF NOT EXISTS messages (message TEXT)');

  // Get the messages.
  const messageQuery = await db.query('SELECT message FROM messages');
  const messages = messageQuery.rows.map((r) => r.message);

  res.send(`
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>Postgres</h1>
      <ul>
        <li>
          <a href="/">
            Back
          </a>
        </li>
      </ul>

      <h4>Add Message</h4>
      <form method="POST">
        <input name="message" type="text" style={{ marginRight: '5px' }} />
        <button type="submit">Add</button>
      </form>

      <h4>View Messages</h4>
      <ul>
        ${messages.map((m) => (
    `<li key={m}>${m}</li>`
  ))}
      </ul>
    </div>
  `);
};

export const postgresHandler = async (req, res) => {
  // Get the form data.
  const formData = await req.body;

  // Get the message.
  const message = formData['message'];

  // Create the table if it does not already exist.
  await db.query('CREATE TABLE IF NOT EXISTS messages (message TEXT)');

  // Save the message to the database.
  await db.query('INSERT INTO messages (message) VALUES ($1)', [message]);

  await postgresPage(req, res);
}
