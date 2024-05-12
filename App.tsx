import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Routes from './src/routes';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  );
};

export default App;
