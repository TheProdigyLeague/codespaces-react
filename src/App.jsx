import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showVirus, setShowVirus] = useState(false);
  const [showArtModal, setShowArtModal] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showMockPayment, setShowMockPayment] = useState(false);
  const [showMMORPGModal, setShowMMORPGModal] = useState(false);
  const [showF2PDownload, setShowF2PDownload] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [showPayToPlay, setShowPayToPlay] = useState(false);

  // Mock download progress effect
  useEffect(() => {
    let timer;
    if (showF2PDownload && downloadProgress < 100) {
      timer = setTimeout(() => {
        setDownloadProgress(prev => Math.min(prev + Math.random() * 7, 100));
      }, 400);
    }
    return () => clearTimeout(timer);
  }, [showF2PDownload, downloadProgress]);

  const handleCyberClick = () => setShowVirus(true);
  const handleRecover = () => setShowVirus(false);

  const artGallery = [
    // Cool art GIFs
    "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif", // Abstract art animation
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif", // Digital painting process
    // Cool gaming art
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    // Your masterpieces
    "https://lh3.googleusercontent.com/sYm8HlSartFKXTQVNjxCKsZHoPQ2kQFanjxcRZrEfBzQe7MlWw9KZYI0UvNWVcb6eUviR1Ho-kkbGunR_w=s265-w265-h265",
    "https://lh3.googleusercontent.com/N4lUHDm-bxsxOJAAannuxee-AVJv21ZQQKLP8nWaV1Fe6ZRIQRXHk1NHzpia96SXE3hvUJmhoiD_dmVJhQ=s265-w265-h265",
    "https://lh3.googleusercontent.com/ZOi2w1zc6_VivgCxPF8aMm40-Z_Tg-ec9dfCGemmXxTTOM1llH0qN-mpZAqzJ06Oe5-fx-YH9bhqJzIenQ=s265-w265-h265",
    "https://lh3.googleusercontent.com/7VfuifhlBWRdF7c7VV8_DUhCNjCNGnnL7TC00H0OHF1TJP_2w_nEl-iyZnfAGQLXId8DqNLIywadZqWoQw=s265-w265-h265"
  ];

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
        <div
          className="panel mmorpg"
          tabIndex={0}
          onClick={() => setShowMMORPGModal(true)}
        >
          <h2>MMORPG Worlds</h2>
          <img
            src="https://media.giphy.com/media/1kkxWqT5nvLXupUTwK/giphy.gif"
            alt="World of Warcraft Preview"
            className="panel-gif"
          />
          <p>
            <span className="sword" role="img" aria-label="sword">🗡️</span>
            Immersive Real-Time Adventures
          </p>
        </div>
        {/* Panel 2: Social Media */}
        <div
          className="panel social"
          tabIndex={0}
          onClick={() => setShowPaywall(true)}
        >
          <h2>Social Media</h2>
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="Social Media Preview"
            className="panel-gif"
          />
          <p className="rainbow-text">
            <span role="img" aria-label="chat">💬</span> Connect & Share
          </p>
        </div>
        {/* Panel 3: Art */}
        <div
          className="panel art"
          tabIndex={0}
        >
          <h2>Creative Arts</h2>
          <img
            src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
            alt="Art Preview"
            className="panel-gif"
          />
          <p className="rainbow-text">
            <span role="img" aria-label="palette">🎨</span> Express Yourself
          </p>
          <button
            style={{
              marginTop: '1em',
              padding: '0.6em 1.5em',
              fontSize: '1em',
              background: '#d76d77',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => setShowArtModal(true)}
          >
            View Art Gallery
          </button>
        </div>
        {/* Panel 4: Cybersecurity */}
        <div
          className="panel cybersecurity"
          tabIndex={0}
          onClick={handleCyberClick}
        >
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

      {/* Virus Simulation Modal */}
      {showVirus && (
        <div className="ransomware-modal">
          <h1>⚠️ Virus Detected! ⚠️</h1>
          <p>
            Your system has been <span style={{ color: '#ff3333', fontWeight: 'bold' }}>infected</span>.<br />
            All your files are now encrypted.<br />
            <span style={{ color: '#fff', fontSize: '1.2em' }}>Send 1 BTC to recover your data.</span>
          </p>
          <button
            style={{
              marginTop: '2em',
              padding: '0.8em 2em',
              fontSize: '1.1em',
              background: '#222',
              color: '#fff',
              border: '2px solid #ff3333',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onClick={handleRecover}
          >
            Recover System
          </button>
          <p style={{ marginTop: '2em', fontSize: '0.9em', color: '#fff' }}>
            (This is a harmless simulation for educational purposes.)
          </p>
        </div>
      )}

      {/* Art Gallery Modal */}
      {showArtModal && (
        <div className="ransomware-modal" style={{ background: "rgba(30,30,40,0.98)", color: "#fff" }}>
          <h1 style={{ color: "#d76d77" }}>🎨 Art Gallery</h1>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5em",
            justifyContent: "center",
            maxHeight: "60vh",
            overflowY: "auto",
            margin: "2em 0"
          }}>
            {artGallery.map((url, idx) => (
              <img
                key={idx}
                src={url}
                alt={`Art ${idx + 1}`}
                style={{
                  width: "220px",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.22)"
                }}
                onError={e => e.target.style.display = 'none'}
              />
            ))}
          </div>
          <button
            style={{
              marginTop: '1.5em',
              padding: '0.8em 2em',
              fontSize: '1.1em',
              background: '#d76d77',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onClick={() => setShowArtModal(false)}
          >
            Close Gallery
          </button>
        </div>
      )}

      {/* Social Media Paywall Modal */}
      {showPaywall && (
        <div className="ransomware-modal" style={{
          background: "rgba(30,30,40,0.98)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#23243a",
            borderRadius: "16px",
            padding: "2em 2.5em",
            position: "relative",
            minWidth: "320px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            textAlign: "center"
          }}>
            {/* X Button */}
            <button
              onClick={() => setShowPaywall(false)}
              style={{
                position: "absolute",
                top: "1em",
                right: "1em",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5em",
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: "#ffaf7b", marginBottom: "1em" }}>Paywall</h2>
            <p style={{ fontWeight: "bold", fontSize: "1.1em", marginBottom: "2em" }}>
              You must login, register, and subscribe to view this content.
            </p>
            <button
              style={{
                background: "#ffaf7b",
                color: "#23243a",
                border: "none",
                borderRadius: "8px",
                padding: "0.8em 2em",
                fontSize: "1.1em",
                fontWeight: "bold",
                cursor: "pointer"
              }}
              onClick={() => {
                setShowPaywall(false);
                setShowMockPayment(true);
              }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      )}

      {/* Mock Payment Modal */}
      {showMockPayment && (
        <div className="ransomware-modal" style={{
          background: "rgba(30,30,40,0.98)",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#23243a",
            borderRadius: "16px",
            padding: "2em 2.5em",
            position: "relative",
            minWidth: "340px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            textAlign: "center"
          }}>
            {/* X Button */}
            <button
              onClick={() => setShowMockPayment(false)}
              style={{
                position: "absolute",
                top: "1em",
                right: "1em",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5em",
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: "#ffaf7b", marginBottom: "1em" }}>Mock Payment</h2>
            <p style={{ marginBottom: "1.5em" }}>
              Please enter your payment details below to subscribe.
            </p>
            <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "260px" }}>
              <label>Card Number</label>
              <input disabled value="•••• •••• •••• ••••" style={{ width: "100%", marginBottom: "0.7em" }} />
              <label>CVV</label>
              <input disabled value="•••" style={{ width: "100%", marginBottom: "0.7em" }} />
              <label>Address</label>
              <input disabled value="123 Main St" style={{ width: "100%", marginBottom: "0.7em" }} />
              <label>Social Security Number</label>
              <input disabled value="•••-••-••••" style={{ width: "100%", marginBottom: "0.7em" }} />
            </div>
            <p style={{ color: "#ff3333", fontWeight: "bold", marginTop: "1.5em" }}>
              This is a mock scenario. <br />
              Never enter real payment or personal information here!
            </p>
          </div>
        </div>
      )}

      {/* MMORPG Modal */}
      {showMMORPGModal && (
        <div className="ransomware-modal" style={{ background: "rgba(30,30,40,0.98)", color: "#fff" }}>
          <div style={{
            background: "#23243a",
            borderRadius: "16px",
            padding: "2em 2.5em",
            position: "relative",
            minWidth: "340px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            textAlign: "center"
          }}>
            <button
              onClick={() => setShowMMORPGModal(false)}
              style={{
                position: "absolute",
                top: "1em",
                right: "1em",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5em",
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: "#2ecc40", marginBottom: "1em" }}>Choose option:</h2>
            <p style={{ fontWeight: "bold", fontSize: "1.1em", marginBottom: "2em" }}>
              Play F2P game or Pay-to-Play
            </p>
            <div style={{ display: "flex", gap: "1.5em", justifyContent: "center" }}>
              <button
                style={{
                  background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
                  color: "#23243a",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.8em 2em",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 12px #43e97b, 0 2px 8px rgba(0,0,0,0.12)",
                  borderTop: "2px solid #baffc9",
                  borderBottom: "2px solid #00ffb0",
                  textShadow: "0 1px 2px #fff"
                }}
                onClick={() => {
                  setShowMMORPGModal(false);
                  setShowF2PDownload(true);
                  setDownloadProgress(0);
                }}
              >
                Play F2P
              </button>
              <button
                style={{
                  background: "linear-gradient(90deg, #ffd700 0%, #ffb347 100%)",
                  color: "#23243a",
                  border: "none",
                  borderRadius: "8px",
                  padding: "0.8em 2em",
                  fontSize: "1.1em",
                  fontWeight: "bold",
                  cursor: "pointer",
                  boxShadow: "0 0 12px #ffd700, 0 2px 8px rgba(0,0,0,0.12)",
                  borderTop: "2px solid #fff8dc",
                  borderBottom: "2px solid #ffb347",
                  textShadow: "0 1px 2px #fff"
                }}
                onClick={() => {
                  setShowMMORPGModal(false);
                  setShowPayToPlay(true);
                }}
              >
                Pay-to-Play
              </button>
            </div>
          </div>
        </div>
      )}

      {/* F2P Download Modal */}
      {showF2PDownload && (
        <div className="ransomware-modal" style={{ background: "rgba(30,30,40,0.98)", color: "#fff" }}>
          <div style={{
            background: "#23243a",
            borderRadius: "16px",
            padding: "2em 2.5em",
            position: "relative",
            minWidth: "340px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            textAlign: "center"
          }}>
            <button
              onClick={() => setShowF2PDownload(false)}
              style={{
                position: "absolute",
                top: "1em",
                right: "1em",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5em",
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: "#43e97b", marginBottom: "1em" }}>Downloading...</h2>
            <p style={{ color: "#ff3333", fontWeight: "bold", marginBottom: "1em" }}>
              If the product is free, <span style={{ textDecoration: "underline" }}>you are the product</span>
            </p>
            <div style={{
              width: "100%",
              background: "#444",
              borderRadius: "8px",
              overflow: "hidden",
              margin: "1em 0"
            }}>
              <div style={{
                width: `${downloadProgress}%`,
                background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
                height: "22px",
                transition: "width 0.4s"
              }} />
            </div>
            <div style={{ fontFamily: "monospace", fontSize: "1.1em" }}>
              downloading resources {((downloadProgress/100)*10).toFixed(2)}/10GB complete...
            </div>
            {downloadProgress >= 100 && (
              <div style={{ marginTop: "1.5em", color: "#43e97b", fontWeight: "bold" }}>
                Download complete! Enjoy your F2P experience.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pay-to-Play Modal (MMORPG with bots) */}
      {showPayToPlay && (
        <div className="ransomware-modal" style={{ background: "rgba(30,30,40,0.98)", color: "#fff" }}>
          <div style={{
            background: "#23243a",
            borderRadius: "16px",
            padding: "2em 2.5em",
            position: "relative",
            minWidth: "340px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
            textAlign: "center"
          }}>
            <button
              onClick={() => setShowPayToPlay(false)}
              style={{
                position: "absolute",
                top: "1em",
                right: "1em",
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5em",
                cursor: "pointer"
              }}
              aria-label="Close"
            >
              ×
            </button>
            <h2 style={{ color: "#ffd700", marginBottom: "1em" }}>Welcome to Pay-to-Play!</h2>
            <p style={{ marginBottom: "1.5em" }}>
              You paid and downloaded the game.<br />
              <span style={{ color: "#ffb347" }}>But everyone here is a bot!</span>
            </p>
            <div style={{
              background: "#181a2b",
              borderRadius: "10px",
              padding: "1em",
              margin: "1em 0",
              minHeight: "120px"
            }}>
              <div style={{ color: "#b3e6ff", fontWeight: "bold", marginBottom: "0.5em" }}>
                <span role="img" aria-label="bot">🤖</span> MMORPG Chat
              </div>
              <div style={{ textAlign: "left", fontFamily: "monospace", fontSize: "1em" }}>
                <div><span style={{ color: "#43e97b" }}>BotWarrior42</span>: Anyone want to trade?</div>
                <div><span style={{ color: "#ffd700" }}>BotMage99</span>: Looking for group for dungeon!</div>
                <div><span style={{ color: "#ffb347" }}>BotHealerX</span>: Healing for tips!</div>
                <div><span style={{ color: "#b3e6ff" }}>BotArcher7</span>: Selling rare bow, PM me!</div>
                <div><span style={{ color: "#ff3333" }}>BotPvPPro</span>: Duel me at the arena!</div>
              </div>
            </div>
            <div style={{ color: "#ff3333", fontWeight: "bold", marginTop: "1em" }}>
              (This is a mock scenario. All players are bots.)
            </div>
          </div>
        </div>
      )}

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