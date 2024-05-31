import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/index';
import './index.css';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <Switch>
            <Route path={`/admin`} component={Layout} />
            <Redirect from='/' to='/admin' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
);
