import React, { useState } from "react";

type GameResult = 'win' | 'loss' | null;
type SelectedAmount = '1SOL' | '2.5SOL' | '5SOL' | '0.5SOL' | null;

const App = () => {
  const [result, setResult] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAmount, setSelectedAmount] = useState<SelectedAmount>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showLossPopup, setShowLossPopup] = useState(false);
  const [wagmiEarned, setWagmiEarned] = useState(0);
  const [gameResult, setGameResult] = useState<GameResult>(null);
  const [rotationDegrees, setRotationDegrees] = useState(0);

  const handlePlay = (choice) => {
    if (!selectedAmount) {
      alert("Please select an amount first!");
      return;
    }
    if (isPlaying) return;

    setIsPlaying(true);
    setSelectedOption(choice);
    setIsRotating(true);
    setGameResult(null);

    // Slower and more controlled rotation
    const fullRotations = Math.floor(Math.random() * 2) + 6;
    const finalPosition = choice === "wagmi" ? 0 : 180;
    const totalDegrees = fullRotations * 360 + finalPosition;
    setRotationDegrees(totalDegrees);

    setTimeout(() => {
      setIsRotating(false);
      const randomResult = Math.random() < 0.5 ? "wagmi" : "ngmi";
      
      // Set the result based on exact match
      if (choice === randomResult) {
        setWagmiEarned(521);
        setShowSuccessPopup(true);
        setGameResult("win");
        setResult(
          randomResult === "wagmi"
            ? "🚀 TO THE MOON! Your investment doubled!"
            : "📉 You predicted the downfall correctly!"
        );
      } else {
        setShowLossPopup(true);
        setGameResult("loss");
        setResult(
          randomResult === "wagmi"
            ? "📉 You missed the moon shot!"
            : "🚀 You missed the downfall prediction!"
        );
      }
      
      setIsPlaying(false);
      setTimeout(() => setRotationDegrees(0), 1500);
    }, 7000);
  };

  const handleReset = () => {
    setResult("");
    setSelectedOption("");
    setSelectedAmount(null);
    setIsRotating(false);
    setShowSuccessPopup(false);
    setShowLossPopup(false);
    setGameResult(null);
  };

  return (
    <div
      className={`crypto-game ${gameResult ? `game-${gameResult}` : ""} ${
        showSuccessPopup || showLossPopup ? "popup-active" : ""
      }`}
    >
      <div className="header">
        <div className="logo" onClick={() => window.location.href = '/'}>
          <span className="emoji">💪</span>
          <span className="wagmi-text">WAGMI</span>
        </div>
        <div className="nav-items">
          <div className="nav-item wallet">
            <img src="/meta.png" alt="Wallet Icon" className="icon" />
            0x710...8976F
          </div>
          <div className="nav-item balance">
            <span className="icon">💰</span>
            5.258 SOL
          </div>
          <div className="nav-item rank">
            <span className="icon">⭐</span>
            Rank 23
          </div>
          <div className="nav-item score">Score 2023</div>
        </div>
        <div className="user-section">
          <div className="sparkle">✨</div>
          <div className="flag">🇺🇸</div>
          <div className="avatar">
            <img
              src="/dp.png"
              alt="profile"
              className="icon"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="game-container">
        <h1>WAGMI NGMI</h1>
        <h2>CRYPTO CULTURE GAME</h2>

        <div className="yin-yang-container">
          <div
            className={`yin-yang ${selectedOption ? "active" : ""} ${
              isRotating ? "rotating" : ""
            }`}
            style={{
              transform: `rotate(${rotationDegrees}deg)`,
              transition: isRotating
                ? "transform 7s cubic-bezier(0.3, 0, 0.2, 1)"
                : "transform 0.5s ease",
            }}
          >
            <img
              src="/wheel.png"
              alt="WAGMI/NGMI Wheel"
              className="wheel-image"
            />
            <div className="click-areas">
              <div
                className="wagmi-area"
                onClick={() => !isPlaying && !isRotating && handlePlay("wagmi")}
              />
              <div
                className="ngmi-area"
                onClick={() => !isPlaying && !isRotating && handlePlay("ngmi")}
              />
            </div>
          </div>
        </div>

        <div className="sol-selection">
          <h4>Select SOL Amount</h4>
          <div className="amount-buttons">
            <button
              className={`amount-btn sol ${
                selectedAmount === "0.5SOL" ? "selected" : ""
              }`}
              onClick={() => setSelectedAmount("0.5SOL")}
            >
              <div className="amount-content">
                <div className="amount-main">
                  <span className="currency">0.5 SOL</span>
                </div>
                <div className="amount-sub">
                  <span className="wagmi-amount">50</span>
                  <span className="wagmi-text">WAGMI</span>
                </div>
              </div>
            </button>
            <button
              className={`amount-btn sol ${
                selectedAmount === "1SOL" ? "selected" : ""
              }`}
              onClick={() => setSelectedAmount("1SOL")}
            >
              <div className="amount-content">
                <div className="amount-main">
                  <span className="currency">1 SOL</span>
                </div>
                <div className="amount-sub">
                  <span className="wagmi-amount">100</span>
                  <span className="wagmi-text">WAGMI</span>
                </div>
              </div>
            </button>
            <button
              className={`amount-btn sol ${
                selectedAmount === "2.5SOL" ? "selected" : ""
              }`}
              onClick={() => setSelectedAmount("2.5SOL")}
            >
              <div className="amount-content">
                <div className="amount-main">
                  <span className="currency">2.5 SOL</span>
                </div>
                <div className="amount-sub">
                  <span className="star">★</span>
                  <span className="plus">+250</span>
                  <span className="wagmi-amount">WAGMI</span>
                </div>
              </div>
            </button>
            <button
              className={`amount-btn sol-large ${
                selectedAmount === "5SOL" ? "selected" : ""
              }`}
              onClick={() => setSelectedAmount("5SOL")}
            >
              <div className="amount-content">
                <div className="amount-main">
                  <span className="currency">5 SOL</span>
                </div>
                <div className="amount-sub">
                  <span className="wagmi-amount">500</span>
                  <span className="wagmi-text">WAGMI</span>
                </div>
              </div>
            </button>
            <button className="amount-btn custom">
              <div className="amount-content">
                <span>Enable Quickplay</span>
              </div>
            </button>
          </div>
        </div>

        {/* Add Leaderboard Section */}
        <div className="leaderboard-section">
          <h3 className="leaderboard-title">Leaderboard</h3>
          <div className="leaderboard-container">
            <div className="leaderboard-item gold">
              <span className="leaderboard-rank">01</span>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="player-stats">
                <div className="stars">
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                  <span className="star">★</span>
                </div>
                <div className="score">
                  <img src="/coin.png" alt="coin" className="coin-icon" />
                  <span>83342</span>
                </div>
              </div>
            </div>

            {[2, 3, 4, 5].map((rank) => (
              <div key={rank} className="leaderboard-item">
                <span className="leaderboard-rank">0{rank}</span>
                <div className="player-info">
                  <img src="/dp.png" alt="Player" className="player-avatar" />
                  <span className="player-name">bella98</span>
                </div>
                <div className="player-stats">
                  <div className="stars">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>
                  <div className="score">
                    <img src="/coin.png" alt="coin" className="coin-icon" />
                    <span>83342</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {isPlaying && (
          <div className="loading">
            <p>Trading in progress...</p>
          </div>
        )}

        {showSuccessPopup && (
          <div className="success-popup">
            <button
              className="close-btn"
              onClick={() => setShowSuccessPopup(false)}
            >
              ×
            </button>
            <div className="crown-container">
              <img src="/crown.png" alt="Crown" className="crown-icon" />
            </div>
            <div className="popup-content">
              <div className="wagmi-earned">
                + {wagmiEarned} WAGMI{" "}
                <img src="/coin.png" alt="coin" className="coin-icon" />
              </div>
              <h3>You made it King</h3>
              <div className="result-details">
                <div className="bet-detail">
                  Your Bet:{" "}
                  <span className="highlight">{selectedAmount} SOL</span>
                </div>
                <div className="bet-detail">
                  Result: <span className="highlight">WAGMI 👑</span>
                </div>
              </div>
              <button
                className="continue-btn"
                onClick={() => {
                  setShowSuccessPopup(false);
                  handleReset();
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {showLossPopup && (
          <div className="loss-popup">
            <button
              className="close-btn"
              onClick={() => setShowLossPopup(false)}
            >
              ×
            </button>
            <div className="skull-container">
              <span className="skull-icon">💀</span>
            </div>
            <div className="popup-content">
              <div className="wagmi-lost">- {selectedAmount} SOL</div>
              <h3>NGMI This Time</h3>
              <div className="result-details">
                <div className="bet-detail">
                  Your Bet:{" "}
                  <span className="highlight-loss">{selectedAmount} SOL</span>
                </div>
                <div className="bet-detail">
                  Result: <span className="highlight-loss">NGMI 💀</span>
                </div>
              </div>
              <button
                className="continue-btn-loss"
                onClick={() => {
                  setShowLossPopup(false);
                  handleReset();
                }}
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @import url("https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600&display=swap");

        *,
        *::before,
        *::after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
          background: #0a0b0d !important;
          font-family: "Clash Display", sans-serif;
        }

        body {
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        #__next {
          height: 100%;
        }
      `}</style>

      <style jsx>{`
        .crypto-game {
          min-height: 100vh;
          width: 100vw;
          margin: 0;
          padding: 0;
          color: white;
          font-family: "Clash Display", sans-serif;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background-image: url("/Game-bg.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: top center;
          background-attachment: fixed;
        }

        .crypto-game::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(
              circle at 90% 10%,
              rgba(255, 165, 0, 0.05),
              transparent 40%
            ),
            radial-gradient(
              circle at 10% 90%,
              rgba(255, 165, 0, 0.03),
              transparent 40%
            );
          pointer-events: none;
          z-index: 1;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1.5rem;
          margin: 1rem 2rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.2),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1);
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .logo:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.02);
        }

        .logo .emoji {
          font-size: 1.25rem;
        }

        .wagmi-text {
          font-size: 1.25rem;
          font-weight: 600;
          background: white;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.5px;
        }

        .nav-items {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .nav-item .icon {
          width: 1rem;
          height: 1rem;
          object-fit: contain;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .user-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
        }

        .sparkle,
        .flag,
        .avatar {
          font-size: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .sparkle:hover,
        .flag:hover,
        .avatar:hover {
          transform: scale(1.1);
        }

        .avatar {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .game-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 2rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        h1 {
          font-size: 5rem;
          margin: 0;
          letter-spacing: 2px;
          color: white;
          text-transform: uppercase;
          font-weight: bold; /* Makes the text bold */
          background: linear-gradient(to bottom, white, #c3c3c3);
          -webkit-background-clip: text; /* For Chrome, Safari, and Opera */
          background-clip: text; /* Standard syntax */
          -webkit-text-fill-color: transparent; /* For Chrome, Safari, and Opera */
          color: transparent;
        }

        h2 {
          font-size: 1.25rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0.5rem 0 3rem;
          letter-spacing: 4px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .yin-yang-container {
          margin: 3rem auto;
          width: 400px;
          height: 400px;
          position: relative;
          user-select: none;
        }

        .yin-yang {
          width: 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
          transform-origin: center center;
          will-change: transform;
          pointer-events: ${isRotating ? "none" : "auto"};
        }

        .click-areas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
        }

        .wagmi-area,
        .ngmi-area {
          position: absolute;
          width: 50%;
          height: 100%;
          top: 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .wagmi-area {
          left: 0;
          border-top-left-radius: 200px;
          border-bottom-left-radius: 200px;
        }

        .ngmi-area {
          right: 0;
          border-top-right-radius: 200px;
          border-bottom-right-radius: 200px;
        }

        .wagmi-area:hover,
        .ngmi-area:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        .wheel-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          pointer-events: none;
          filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.2));
        }

        .yin-yang.rotating {
          animation: glow 7s ease-in-out;
        }

        @keyframes glow {
          0% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(255, 215, 0, 0));
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 15px rgba(255, 215, 0, 0.3));
          }
          100% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(255, 215, 0, 0));
          }
        }

        .sol-selection {
          margin-top: 3rem;
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 2rem 8rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          max-width: 2000px;
          margin-left: auto;
          margin-right: auto;
        }

        .sol-selection h4 {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 1.5rem 2rem;
          text-align: left;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .amount-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: nowrap;
          margin: 0 2rem;
        }

        .amount-btn {
          background: transparent;
          border: none;
          padding: 1rem;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 240px;
          position: relative;
          font-family: "Clash Display", sans-serif;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
          overflow: hidden;
          flex: 1;
        }

        .amount-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/unselected-amount.png");
          background-size: cover;
          background-position: center;
          border-radius: inherit;
          opacity: 1;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .amount-btn.selected::before {
          opacity: 0;
        }

        .amount-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("/selected-amount.png");
          background-size: 100% 100%;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .amount-btn.selected::after {
          opacity: 1;
        }

        .amount-main {
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: 1px;
          margin-bottom: 0.4rem;
          color: white;
          text-align: left;
          position: relative;
          z-index: 1;
        }

        .amount-sub {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: white;
          text-align: left;
          position: relative;
          z-index: 1;
        }

        .star {
          color: #ffd700;
          font-size: 1.4rem;
        }

        .plus {
          color: white;
          font-weight: 500;
        }

        .wagmi-amount {
          color: white;
          font-weight: 500;
        }

        .amount-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.25rem;
        }

        .amount-btn:hover {
          transform: translateY(-2px);
        }

        .amount-btn.selected {
          transform: scale(0.98);
        }

        .amount-btn.custom {
          display: none;
        }

        .loading {
          margin: 2rem 0;
          font-size: 1.2rem;
          color: #ffd700;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        .success-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(39, 174, 96, 0.2);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 3rem;
          width: 90%;
          max-width: 500px;
          text-align: center;
          z-index: 1000;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 24px;
          cursor: pointer;
          padding: 5px;
        }

        .crown-container {
          width: 80px;
          height: 80px;
          background: rgba(39, 174, 96, 0.3);
          border-radius: 50%;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .crown-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }

        .wagmi-earned {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .coin-icon {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .popup-content h3 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .result-details {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .bet-detail {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.2rem;
        }

        .highlight {
          color: white;
          font-weight: 500;
        }

        .continue-btn {
          background: linear-gradient(to right, #ffd700, #ffa500);
          border: none;
          padding: 1rem 3rem;
          border-radius: 50px;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Clash Display", sans-serif;
        }

        .continue-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
        }

        .crypto-game {
          transition: all 1s ease;
        }

        .game-win {
          background: linear-gradient(
              rgba(39, 174, 96, 0.3),
              rgba(39, 174, 96, 0.3)
            ),
            url("/Game.png");
          background-size: cover;
          background-position: center;
          animation: pulseWin 2s ease-in-out;
        }

        .game-loss {
          background: linear-gradient(
              rgba(235, 87, 87, 0.3),
              rgba(235, 87, 87, 0.3)
            ),
            url("/Game.png");
          background-size: cover;
          background-position: center;
          animation: pulseLoss 2s ease-in-out;
        }

        @keyframes pulseWin {
          0% {
            background-color: transparent;
          }
          50% {
            background-color: rgba(39, 174, 96, 0.5);
          }
          100% {
            background-color: rgba(39, 174, 96, 0.3);
          }
        }

        @keyframes pulseLoss {
          0% {
            background-color: transparent;
          }
          50% {
            background-color: rgba(235, 87, 87, 0.5);
          }
          100% {
            background-color: rgba(235, 87, 87, 0.3);
          }
        }

        .loss-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(235, 87, 87, 0.2);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 3rem;
          width: 90%;
          max-width: 500px;
          text-align: center;
          z-index: 1000;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px 0 rgba(235, 87, 87, 0.37);
          animation: shakePopup 0.5s ease-in-out;
        }

        @keyframes shakePopup {
          0%,
          100% {
            transform: translate(-50%, -50%);
          }
          25% {
            transform: translate(-52%, -50%);
          }
          75% {
            transform: translate(-48%, -50%);
          }
        }

        .skull-container {
          width: 80px;
          height: 80px;
          background: rgba(235, 87, 87, 0.3);
          border-radius: 50%;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skull-icon {
          font-size: 40px;
        }

        .wagmi-lost {
          font-size: 1.5rem;
          color: #ff6b6b;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .highlight-loss {
          color: #ff6b6b;
          font-weight: 500;
        }

        .continue-btn-loss {
          background: linear-gradient(to right, #ff6b6b, #ff8585);
          border: none;
          padding: 1rem 3rem;
          border-radius: 50px;
          color: white;
          font-size: 1.2rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: "Clash Display", sans-serif;
        }

        .continue-btn-loss:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
        }

        .crypto-game {
          transition: all 1s ease;
        }

        .popup-active {
          position: relative;
        }

        .popup-active::after {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 1;
        }

        .success-popup,
        .loss-popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          pointer-events: auto;
        }

        .yin-yang {
          width: 100%;
          height: 100%;
          position: relative;
          cursor: pointer;
          transform-origin: center center;
          will-change: transform;
        }

        .yin-yang.rotating {
          animation: glow 7s ease-in-out;
        }

        @keyframes glow {
          0% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(255, 215, 0, 0));
          }
          50% {
            filter: brightness(1.2) drop-shadow(0 0 15px rgba(255, 215, 0, 0.3));
          }
          100% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(255, 215, 0, 0));
          }
        }

        .amount-main .currency {
          color: white;
          font-family: "Clash Display", sans-serif;
          font-weight: 600;
        }

        .amount-sub {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1rem;
        }

        .leaderboard-section {
          margin: 4rem auto;
          width: 100%;
          max-width: 1000px;
          padding: 3rem;
        }

        .leaderboard-title {
          font-size: 3.5rem;
          color: white;
          text-align: center;
          margin-bottom: 3rem;
          font-weight: 600;
          letter-spacing: 2px;
          background: linear-gradient(to right, #ffffff, #d1d1d1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .leaderboard-container {
          background: rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 30px;
          padding: 2.5rem;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        }

        .leaderboard-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem 2rem;
          margin: 1rem 0;
          background: url("/leaderboard.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 20px;
          transition: all 0.3s ease;
          min-height: 100px;
        }

        .leaderboard-item.gold {
          background: url("/leaderboard-gold.png");
          background-size: 100% 100%;
          background-repeat: no-repeat;
          background-position: center;
          border: none;
        }

        .leaderboard-item:hover {
          transform: translateY(-2px);
          filter: brightness(1.1);
        }

        .leaderboard-rank {
          font-size: 1.8rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          min-width: 60px;
        }

        .gold .leaderboard-rank {
          color: #ffd700;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .player-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .player-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }

        .player-name {
          font-size: 1.3rem;
          color: white;
          font-weight: 500;
        }

        .player-stats {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .stars {
          display: flex;
          gap: 4px;
        }

        .star {
          color: #ffd700;
          font-size: 1.2rem;
        }

        .score {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: white;
          font-weight: 500;
          font-size: 0.9rem;
        }

        .score .coin-icon {
          width: 18px;
          height: 18px;
          object-fit: contain;
        }

        .nav-item.rank {
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.9);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default App;
