import { redis } from './utils/redis.js';

export const redisPage = async (req, res) => {
  const messageValue = await redis.get('messages');
  const messages = messageValue ? JSON.parse(messageValue) : [];

  res.send(`
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>Redis</h1>
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

export const redisHandler = async (req, res) => {
  // Get the messages.
  const messageValue = await redis.get('messages');
  const messages = messageValue ? JSON.parse(messageValue) : [];

  // Get the form data.
  const formData = await req.body;

  // Get the message.
  const message = formData['message'];

  // Push the message onto the messages.
  messages.push(message);

  // Save the messages.
  await redis.set('messages', JSON.stringify(messages));

  await redisPage(req, res);
}
