import './App.css';

function App() {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Top Section: Welcome Banner */}
      <header className="App-header" style={{ flex: '0 0 auto', minHeight: 'unset', height: 'auto', justifyContent: 'flex-start' }}>
        <img
          src="Octocat.png"
          className="App-logo"
          alt="GitHub Octocat"
        />
        <p className="react-heading">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="React-logo"
            alt="React logo"
          />
          React
        </p>
        <p className="small">
          Welcome to React Codespaces <span className="atom">⚛️</span>
        </p>
      </header>

      {/* Panels */}
      <div className="split-screen" style={{ flex: '0 0 auto', marginTop: 'auto' }}>
        {/* Panel 1: MMORPG */}
        <div className="panel mmorpg">
          <h2>MMORPG Worlds</h2>
          <img
            src="https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif"
            alt="World of Warcraft Preview"
            className="panel-gif"
          />
          <p>Immersive Real-Time Adventures</p>
        </div>
        {/* Panel 2: Social Media */}
        <div className="panel social">
          <h2>Social Media</h2>
          <img
            src="https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif"
            alt="Social Media Preview"
            className="panel-gif"
          />
          <div className="social-actions-scroll-wrapper">
            <div className="social-actions-scroll">
              <span className="heart">❤️</span> Like&nbsp;&nbsp;
              <span role="img" aria-label="follow">👤</span> Follow&nbsp;&nbsp;
              <span role="img" aria-label="share">🔄</span> Share&nbsp;&nbsp;
              <span role="img" aria-label="subscribe">🔔</span> Subscribe&nbsp;&nbsp;
            </div>
          </div>
        </div>
        {/* Panel 3: Art */}
        <div className="panel art">
          <h2>Creative Arts</h2>
          <img
            src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
            alt="Art Preview"
            className="panel-gif"
          />
          <p className="rainbow-text">
            <span role="img" aria-label="palette">🎨</span> Express Yourself
          </p>
        </div>
        {/* Panel 4: Cybersecurity */}
        <div className="panel cyber">
          <h2>Cybersecurity</h2>
          <img
            src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
            alt="Cybersecurity Preview"
            className="panel-gif"
          />
          <p>
            <span role="img" aria-label="shield">🛡️</span> Defend Against Attackers
          </p>
        </div>
      </div>

      {/* Centerpiece image (now between panels and logos) */}
      <div className="centerpiece">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React Centerpiece"
          className="centerpiece-logo"
        />
      </div>

      {/* Logos Row */}
      <div className="logo-row">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" />
        <img src="https://cdn.simpleicons.org/meta/000000" alt="Meta" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Alphabet Inc." />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" />
        <img src="https://cdn.simpleicons.org/cloudflare/000000" alt="Cloudflare" />
        <img src="https://cdn.simpleicons.org/discord/5865F2" alt="Discord" />
        <img src="https://cdn.simpleicons.org/tiktok/000000" alt="TikTok" />
        <img src="https://cdn.simpleicons.org/baidu/000000" alt="Baidu" />
      </div>
    </div>
  );
}

export default App;