import React from 'react';
import {Link} from 'react-router-dom';

export default function MainBody() {
    return(
      <div className="screen-container">
        <div className="about-row">
          <div className="hidden-scroll">
          <p><span className="hey-listen">Hey there!</span> My name is Luke and I'm an aspiring developer, recently graduated from the Full-Stack bootcamp at V School in downtown Salt Lake City, UT.
             My hobbies include watching horror movies, playing video games and listening to music (primarily thrash/death metal & hip hop).
             I'm consistently expanding my skillset via courses on PluralSight and Udemy -- as the development field is constantly evolving. <br/><br/>
             Please see below for links to my social media, portfolio (links to Github repositories on project pages) and contact information.
          </p>
        </div>
        </div>
        <div className="social-row">
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/luke-oliver"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
            <a href="https://twitter.com/lao_design"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
            <a href="https://github.com/Kiefblade"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
        </div>
        </div>
        <div className="portfolio-container">
          <p className="portfolio-header">PORTFOLIO</p>
          <Link to="/rpg-project">
            <div className="rpg-row">
              <p>Full-Stack React-Redux Mini-RPG with User Auth</p>
            </div>
          </Link>
          <Link to="/mtg-project">
            <div className="mtg-row">
              <p>React-Redux Magic: The Gathering Deck Builder</p>
            </div>
          </Link>
          <div className="contact">
            <p className="contact-header">CONTACT</p>
            <p className="contact-info">Luke Oliver</p>
            <p className="contact-info">Phone Number: 801-879-2868</p>
            <a className="contact-info" href="mailto:laodesigns@outlook.com">Send An Email</a>
          </div>
        </div>
      </div>
    )
}
