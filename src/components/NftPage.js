// src/components/NftPage.js
import React from 'react';
import '../styles.css'; // Import your CSS file for styling

const NftPage = () => {
  // Array of NFTs with dummy data
  const nftData = [
    { id: 1, title: 'NFT Title', imageUrl: 'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda quos molestiae saepe ullam eaque incidunt consectetur laborum enim? Odit.' },
    { id: 2, title: 'NFT Title', imageUrl: 'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda quos molestiae saepe ullam eaque incidunt consectetur laborum enim? Odit.' },
    { id: 3, title: 'NFT Title', imageUrl: 'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda quos molestiae saepe ullam eaque incidunt consectetur laborum enim? Odit.' },
    { id: 4, title: 'NFT Title', imageUrl: 'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda quos molestiae saepe ullam eaque incidunt consectetur laborum enim? Odit.' },
    { id: 5, title: 'NFT Title', imageUrl: 'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda quos molestiae saepe ullam eaque incidunt consectetur laborum enim? Odit.' },
    { id: 6, title: 'NFT Title', imageUrl: 'https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus assumenda quos molestiae saepe ullam eaque incidunt consectetur laborum enim? Odit.' },
  ];

  return (
    <section className="landing-section">
      {/* NAV SECTION */}
      <nav className="navbar" id="navbar">
        <div className="nav-menu">
          <a href="/">Home</a>
          <a href="/duels">Duels</a>
          <a href="/nfts">NFTs</a>
        </div>
      </nav>

      {/* Project SECTION */}
      <div className="project-section">
        {nftData.map(({ id, title, imageUrl, details }) => (
          <div className="project" key={id}>
            <h1>{title}</h1>
            <img src={imageUrl} alt={title} />
            <p>{details}</p>
            <a href="#">Link to NFT</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NftPage;
