// src/components/DuelsPage.js
import React from 'react';

import '../styles.css'; // Import your CSS file

const DuelsPage = () => {
    // Define the startDuel function
    const startDuel = () => {
        // Add your JavaScript logic here
        alert('Duel Started!');
    };

    return (
        <div className="landing-section">
            <nav className="navbar" id="navbar">
                <div className="nav-menu">
                    <a href="/">Home</a>
                    <a href="/duels">Duels</a>
                    <a href="/nfts">NFTs</a>
                </div>
            </nav>

            <div className="landing-body">
                <div className="start-card" id="start-card">
                    <h1>Are you Ready?</h1>
                    <button onClick={startDuel} id="start-duel-btn">Start</button>
                </div>

                <div className="player-area">
                    <div className="p1-area player">
                        <img 
                            src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" 
                            alt="You" 
                        />
                        <h2>You</h2>
                        <button>Submit</button>
                    </div>

                    <div className="p2-area player">
                        <img 
                            src="https://static.vecteezy.com/system/resources/previews/001/993/889/non_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg" 
                            alt="Player 2" 
                        />
                        <h2>Player 2</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DuelsPage;
