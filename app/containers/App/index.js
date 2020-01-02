/**
 * App
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from '../../global-styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutPage from '../AboutPage/Loadable';

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
