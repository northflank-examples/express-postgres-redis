const main = (req, res) => {
  res.send(`
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
    <h1>Express with Postgres and Redis</h1>
    <ul>
      <li>
        <Link to="/postgres">
          Postgres
        </Link>
      </li>
      <li>
        <Link to="/redis">
          Redis
        </Link>
      </li>
    </ul>
    </div>
  `);
};

export default main;