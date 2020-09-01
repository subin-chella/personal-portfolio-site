import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About me</Link></h2>
          <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        view <Link to="/stats">statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>     
        </div>
      </header>
      <h4><Link to="/">About this website</Link></h4>
      <p>A beautiful, responsive, react app written with modern Javascript. Source code can be found <a href="https://github.com/subin-chella/personal-portfolio-site" target="_blank">here</a> </p>
     </article>
  </Main>
);

export default Index;
