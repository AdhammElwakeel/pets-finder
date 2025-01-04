/* eslint-disable prettier/prettier */
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SearchParm from './Components/searchParms';
import NotFound from './Components/NotFound';
import PetDetails from './Components/PetDetails';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime:Infinity,
      cacheTime:Infinity,
    }
  }
}); 

function App(props) {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<SearchParm />} />
          <Route path="/details/:id" element={<PetDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;