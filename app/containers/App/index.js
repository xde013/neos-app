/**
 * App
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import GlobalStyle from '../../global-styles';

const HomePage = () => <span> Home page </span>
const AboutPage = () => <span> About page </span>
const NotFoundPage = () => <span> Not found page</span>
const Header = () => <span> Header </span>
const Footer = () => <span> Footer </span>

export default function App() {
  return (
    <Container>
      <Helmet
        titleTemplate="%s - NEOs Nasa"
        defaultTitle="Near Earth Object by Ryan Bourhil"
      >
        <meta 
          name="description"
          content="A React.js project showcasing Near Earth Objects"
        />
      </Helmet>
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>

      <Footer />
      <GlobalStyle />
    </Container>
  );
}
