/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import {
  MuiThemeProvider,
  StylesProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Form from 'containers/Form';

import GlobalStyle from '../../global-styles';
import User from '../User';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  const defaultTheme = createMuiTheme();
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <ThemeProvider theme={defaultTheme}>
          <AppWrapper>
            <Helmet
              titleTemplate="%s - React.js Boilerplate"
              defaultTitle="React.js Boilerplate"
            >
              <meta
                name="description"
                content="A React.js Boilerplate application"
              />
            </Helmet>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="/form" component={Form} />
              <Route path="/user" component={User} />
              <Route path="" component={NotFoundPage} />
            </Switch>
            <Footer />
            <GlobalStyle />
          </AppWrapper>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}
