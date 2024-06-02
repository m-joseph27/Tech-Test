import React, {useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Layout from './components/layout/index';
import './index.css';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';

const container = document.getElementById('root');
const root = createRoot(container);

const ScrollToTop = () => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    return () => {
      unlisten();
    };
  }, [history]);

  return null;
};

root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <HashRouter>
          <ScrollToTop />
          <Switch>
            <Route path={`/admin`} component={Layout} />
            <Redirect from='/' to='/admin/dashboard' />
          </Switch>
        </HashRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
);
