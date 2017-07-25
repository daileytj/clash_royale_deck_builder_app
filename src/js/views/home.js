import React from 'react';
import {Link} from 'react-router-dom';
import blueKnight from '../../images/blue-knight.png';
import bluePrince from '../../images/blue-prince.png';

const Home = () => (
      <div className="home-page">
        <div className="home-page-hero-img-parallax">
          <div className="hero-text-wrapper">
            <h1 className="hero-header">Build The Ultimate Clash Royale Deck</h1>
              <Link to='/build'>
                <button className="hero-button">
                  <p>Build Now</p>
                  <i className="fa fa-cog fa-spin fa-1x fa-fw"></i>
                  <span className="sr-only">Build Now</span>
                </button>
              </Link>
          </div>
        </div>
        <div className="home-page-content-wrapper">
          <img className="blue-prince clearfix" src={bluePrince} alt="Blue Prince"/>
          <h2>What Is Clash Royale You Ask...</h2>
          <p>Well, Clash Royale is a fast paced, card based player vs player brawler. Collect Clash troops, and use them to wreak havoc on your opponent’s towers! Whoever has the most opponent towers eliminated at the end of the time wins! Or take out the opponent completely by knocking out all 3 towers to claim instant victory! </p>
          <h2>Yeah, So... What Am I Doing Here?</h2>
          <p>You are here to create the Ultimate Clash Royale deck.</p>
          <h2>Out With It Then... How Do I Use This Thing?!</h2>
          <p>Easy now... it's quite simple.</p>
          <p>Simply click on any of the build buttons/links floating around the page...</p>
          <Link to="/build">
            <button className="hero-button home-page-content-button combo-button">
              <p>Build Now</p>
              <i className="fa fa-cog fa-spin fa-1x fa-fw"></i>
              <span className="sr-only">Build Now</span>
            </button>
          </Link>
          <h2>How Do I Build My Deck?</h2>
          <p>Click on any available card in the card list and it will be added to your deck.</p>
          <p>If you make a mistake click on any card in your custom deck to remove it.</p>
          <img className="blue-knight clearfix" src={blueKnight} alt="Blue Prince"/>
          <p>Once your deck is built, fill out the form and save it to our database so that everyone can access 'Your' Ultimate Clash Royale Deck</p>
          <h2>...And, Then?</h2>
          <p>Check out yours and other players decks to compare and contrast techniques and strategies.</p>
          <p>Take your Ultimate Deck, or a deck inspired by another player, into the game and dominate the competition.</p>
        </div>
      </div>
)

export default Home;
