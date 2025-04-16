import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CryptoGame = () => {
  const navigate = useNavigate();

  const handleGameStart = () => {
    navigate("/app");
  };

  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body,
        html {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <div className="Cryptogame">
        <div className="navbar">
          <div className="logo">WAGMI💪</div>
          <div className="buttons">
            <div className="hero-btn">
              <button onClick={handleGameStart}>Play Game</button>
            </div>
            <div className="secondary-btn">
              <button>Get SQMI Token</button>
            </div>
          </div>
        </div>
        <div className="hero">
          <h1>PLAY THE LATEST CRYPTO GAME ONLINE</h1>
          <h2>
            Choose WAGMI or NGMI to Make LONG or SHORT actions in cryptocurrency
          </h2>
          <div className="hero-btn">
            <button onClick={handleGameStart}>Start the Game</button>
          </div>
        </div>
        <div className="game-rules">
          <h3>Do you want to play?</h3>
          <p className="rules-description">
            Players will compete in a game and increase their score by winning.
            All players will be ranked in a global leaderboard, from the highest
            score to the lowest score.
          </p>
          <div className="rules-container">
            <div className="correct-case">
              <h4>If you're correct</h4>
              <ul>
                <li>
                  <span className="icon">⬡</span> You receive back your initial
                  bet of ETH
                </li>
                <li>
                  <span className="icon">△</span> You are given a reward equal
                  to your bet in ETH in $SQUID tokens
                </li>
                <li>
                  <span className="icon">↑</span> You score increases and you
                  move up in the ranks in the leaderboard
                </li>
              </ul>
            </div>
            <div className="wrong-case">
              <h4>If you're wrong</h4>
              <ul>
                <li>
                  <span className="icon">⬡</span> You lose your bet in ETH
                </li>
                <li>
                  <span className="icon">◎</span> Your ETH is added to the prize
                  pool
                </li>
                <li>
                  <span className="icon">↓</span> Your score does not increase
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="leaderboard-section">
          <h3>Leaderboard</h3>
          <div className="rank-display">
            <div className="rank-display-bg">
              <div className="rank-item">
                <img
                  src="/goldbadge.png"
                  alt="Gold Badge"
                  className="rank-badge"
                />
                <div className="rank-text">
                  <div className="rank-number">25</div>
                  <div className="rank-label">Your Rank</div>
                </div>
              </div>
              <div className="rank-item">
                <img
                  src="/silver.png"
                  alt="Silver Badge"
                  className="rank-badge"
                />
                <div className="rank-text">
                  <div className="rank-number">$1200</div>
                  <div className="rank-label">Your Rank</div>
                </div>
              </div>
            </div>
          </div>
          <div className="leaderboard-list">
            <div className="leaderboard-item gold">
              <div className="rank">01</div>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="coins">
                <span className="coin-icon">$</span>
                <span className="coin-amount">83342</span>
              </div>
            </div>
            <div className="leaderboard-item silver">
              <div className="rank">03</div>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="coins">
                <span className="coin-icon">$</span>
                <span className="coin-amount">83342</span>
              </div>
            </div>
            <div className="leaderboard-item silver">
              <div className="rank">03</div>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="coins">
                <span className="coin-icon">$</span>
                <span className="coin-amount">83342</span>
              </div>
            </div>
            <div className="leaderboard-item silver">
              <div className="rank">04</div>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="coins">
                <span className="coin-icon">$</span>
                <span className="coin-amount">83342</span>
              </div>
            </div>
            <div className="leaderboard-item silver">
              <div className="rank">05</div>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="coins">
                <span className="coin-icon">$</span>
                <span className="coin-amount">83342</span>
              </div>
            </div>
            <div className="leaderboard-item silver">
              <div className="rank">06</div>
              <div className="player-info">
                <img src="/dp.png" alt="Player" className="player-avatar" />
                <span className="player-name">bella98</span>
              </div>
              <div className="rating">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
              <div className="coins">
                <span className="coin-icon">$</span>
                <span className="coin-amount">83342</span>
              </div>
            </div>
          </div>
        </div>
        <div className="leaderboard-section">
          <h3>Game Roadmap</h3>
          <div className="roadmap">
            <div className="road-container">
              <img src="/road.png" alt="Roadmap" className="road-image" />
              <div className="milestone q1">
                <div className="milestone-content">
                  <p>• Launch of the WAGMI prediction game platform</p>
                  <p>
                    • Implementation of basic game mechanics and user interface
                  </p>
                  <p>• Integration of wallet connectivity and token system</p>
                </div>
                <div className="quarter">Q1</div>
              </div>
              <div className="milestone q2">
                <div className="quarter">Q2</div>
                <div className="milestone-content">
                  <p>• Introduction of advanced trading features</p>
                  <p>• Launch of SQM token rewards system</p>
                  <p>• Implementation of global leaderboard rankings</p>
                </div>
              </div>
              <div className="milestone q3">
                <div className="milestone-content">
                  <p>• Release of multiplayer tournaments</p>
                  <p>• Enhanced reward mechanisms and special events</p>
                  <p>• Integration of community governance features</p>
                </div>
                <div className="quarter">Q3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="community-section">
          <h2 className="community-title">Join the Community</h2>
          <p className="community-description">
            Join a fast-growing community of crypto-lovers and investors
            connected all over the world
          </p>
          <div className="social-icons">
            <a href="#" className="social-link">
              <img src="/twitter.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <img src="/discord.png" alt="Discord" className="social-icon" />
            </a>
            <a href="#" className="social-link">
              <img src="/telegram.png" alt="Telegram" className="social-icon" />
            </a>
          </div>
        </div>

        <style jsx>{`
          @import url("https://api.fontshare.com/v2/css?f[]=clash-display@400,700,500,600&display=swap");
          .Cryptogame {
            background: url("/home.png");
            background-size: 100% auto;
            background-repeat: no-repeat;
            background-position: top center;
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            margin: 0;
            padding: 0;
            position: relative;
            overflow: hidden;
            min-height: 100vh;
          }
          .buttons {
            display: flex;
            align-items: center;
          }
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 0.1rem 4rem;
          }
          .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
            padding: 2rem;
            margin-bottom: 2rem;
          }
          h1 {
            font-size: 5rem;
            margin: 0;
            letter-spacing: 2px;
            font-family: "Clash Display";
            color: white;
            text-transform: uppercase;
            background: linear-gradient(to bottom, white, #c3c3c3);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            text-align: center;
            font-weight: 550;
            padding: 0 4rem;
          }
          h2 {
            color: white;
            font-size: 1.25rem;
            font-family: "Clash Display";
            font-weight: 400;
            margin-top: 1rem;
            text-align: center;
            padding: 0 6rem;
          }
          .logo {
            font-family: "Clash Display";
            font-size: 30px;
            font-weight: 600;
            background: linear-gradient(to bottom, white, #c3c3c3);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero-btn {
            margin-top: 2rem;
            display: flex;
            justify-content: center;
          }
          .hero-btn button {
            font-family: "Clash Display";
            background: url(/goldbutton.png);
            background-size: 100% 100%;
            border: none;
            padding: 2rem 3rem 2.5rem 3rem;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .hero-btn button:hover {
            transform: scale(1.05);
          }

          .secondary-btn {
            margin-top: 2rem;
          }
          .secondary-btn button {
            font-family: "Clash Display";
            background: url(/silverbutton.png);
            background-size: 100% 100%;
            border: none;
            padding: 2rem 3rem 2.5rem 3rem;
            font-size: 1.5rem;
            color: white;
            cursor: pointer;
            transition: transform 0.2s;
          }
          .secondary-btn button:hover {
            transform: scale(1.05);
          }

          .game-rules {
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 4rem;
            width: 100%;
            max-width: 1200px;
            padding: 0 2rem;
          }

          .game-rules h3 {
            font-family: "Clash Display";
            font-size: 3.5rem;
            color: white;
            margin-bottom: 1rem;
          }

          .rules-description {
            font-family: "Clash Display";
            color: #c3c3c3;
            font-size: 1.2rem;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .rules-container {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
          }

          .correct-case,
          .wrong-case {
            padding: 2rem;
            border-radius: 12px;
            width: 100%;
            max-width: 450px;
            backdrop-filter: blur(10px);
          }

          .correct-case {
            background: rgba(39, 174, 96, 0.1);
            border: 1px solid rgba(39, 174, 96, 0.2);
          }

          .wrong-case {
            background: rgba(235, 87, 87, 0.1);
            border: 1px solid rgba(235, 87, 87, 0.2);
          }

          .correct-case h4,
          .wrong-case h4 {
            font-family: "Clash Display";
            font-size: 2rem;
            color: white;
            margin-bottom: 1.5rem;
          }

          ul {
            list-style: none;
            padding: 0;
            text-align: left;
          }

          li {
            font-family: "Clash Display";
            color: #c3c3c3;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .icon {
            color: white;
            font-size: 1.2rem;
          }

          .leaderboard-section {
            width: 100%;
            max-width: 1200px;
            padding: 2rem;
            margin-top: 2rem;
            margin-bottom: 4rem;
            position: relative;
            z-index: 1;
          }

          .leaderboard-section h3 {
            font-family: "Clash Display";
            font-size: 3.5rem;
            color: white;
            text-align: center;
            margin-bottom: 1rem;
            margin-top: 0;
            position: relative;
          }

          .rank-display {
            width: 100%;
            max-width: 1600px;
            margin: 1rem auto 1rem;
            padding: 0 0rem;
            position: relative;
            z-index: 2;
          }

          .rank-display-bg {
            background: url(/leader-bg-section.png);
            background-size: cover;
            background-position: center;
            border-radius: 20px;
            padding: 1rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 5rem;
          }

          .rank-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-top: -4rem;
          }

          .rank-badge {
            width: 140px;
            height: 140px;
            object-fit: contain;
          }

          .rank-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            width: 100%;
          }

          .rank-number {
            font-family: "Clash Display";
            font-size: 1.5rem;
            font-weight: 600;
            color: white;
            margin-bottom: 0.25rem;
            line-height: 1;
          }

          .rank-label {
            font-family: "Clash Display";
            font-size: 0.9rem;
            font-weight:400;
            color:white;
          }

          .leaderboard-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0 2rem;
          }

          .leaderboard-item {
            display: flex;
            align-items: center;
            padding: 1.2rem 2rem;
            border-radius: 20px;
            background: url(/leaderboard.png);
            background-size: 100% 100%;
            background-position: center;
          }

          .leaderboard-item.gold {
            background: url(/leaderboard-gold.png);
            background-size: 100% 100%;
            background-position: center;
          }

          .rank {
            font-family: "Clash Display";
            font-size: 1.5rem;
            color: white;
            font-weight: 600;
            width: 60px;
          }

          .player-info {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex: 1;
          }

          .player-avatar {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
          }

          .player-name {
            font-family: "Clash Display";
            font-size: 1.2rem;
            color: white;
          }

          .rating {
            display: flex;
            gap: 0.25rem;
            margin-right: 2rem;
          }

          .star {
            background: linear-gradient(to bottom, white, #c3c3c3);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size: 1.5rem;
            drop-shadow(5px 5px);
          }

          .coins {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            background: linear-gradient(to bottom, white, #c3c3c3);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            font-family: "Clash Display";
            font-size: 1.2rem;
          }

          .coin-icon {
            font-weight: bold;
          }

          .coin-amount {
            font-weight: 500;
          }

          .roadmap-section {
            width: 100%;
            max-width: 1400px;
            padding: 4rem 2rem;
            margin-top: 2rem;
            margin-bottom: 4rem;
            position: relative;
          }

          .roadmap {
            position: relative;
            width: 100%;
            height: 800px;
          }

          .road-container {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .road-image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: contain;
            z-index: 1;
          }

          .milestone {
            position: absolute;
            color: white;
            font-family: "Clash Display";
            display: flex;
            align-items: center;
            z-index: 2;
            width: 400px;
            margin: 0px;
          }

          .quarter {
            font-size: 2.3rem;
            font-weight: 600;
            color: #daa520;
            background: linear-gradient(to bottom, white, #c3c3c3);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 1.5rem;
          }

          .milestone-content {
            max-width: 400px;
          }

          .milestone-content p {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.8rem;
            margin-bottom: 0.4rem;
            line-height: 1.6;
            text-align: left;
          }

          .q1 {
            top: 20%;
            left: 35%;
          }

          .q2 {
            top: 45%;
            right: 35%;
          }

          .q3 {
            bottom: 22%;
            left: 35%;
          }
          .milestone q2 {
            margin: 20px;
          }

          .community-section {
            width: 100%;
            max-width: 1200px;
            padding: 4rem 2rem;
            text-align: center;
            margin-top: 2rem;
            margin-bottom: 4rem;
          }

          .community-title {
            font-family: "Clash Display";
            font-size: 4rem;
            font-weight:400;
            color: white;
            margin-bottom: 1.5rem;
            background: linear-gradient(to bottom, white, #c3c3c3);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .community-description {
            font-family: "Clash Display";
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.8);
            max-width: 600px;
            margin: 0 auto 3rem;
            line-height: 1.6;
          }

          .social-icons {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 2rem;
          }

          .social-link {
            display: block;
            width: 140px;
            height: 140px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            padding: 1.5rem;
            transition: transform 0.3s ease;
          }

          .social-link:hover {
            transform: translateY(-5px);
          }

          .social-icon {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        `}</style>
      </div>
    </>
  );
};

export default CryptoGame;
