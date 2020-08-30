import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me_icon.jpg`} alt="" />
      </Link>
      <header>
        <h2>Subin Chellapandian</h2>
        <p><a href="subin8899@gmail.com">subin8899@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Subin. I'm a tech enthusiastic and love building things.
        I am an <a href="https://www.annauniv.edu/">Engineering</a> graduate, <a href="https://www.ycombinator.com/">YC</a> Alumni.
        Currently works for <a href="https://www.lntinfotech.com/">LTI</a>, Before that worked with <a href="http://www.aonhumancapital.co.in/"> Aon Hewitt</a> ,
        <a href="https://www.ust-global.com/"> UST Global</a>
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} /> 
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Subin Chellapandian <Link to="/">todo.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
