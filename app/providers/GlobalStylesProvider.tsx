"use client";

import React from 'react';
import styled from 'styled-components';
import { GlobalProvider } from '../context/GlobalProvider';

interface Props {
  children: React.ReactNode;
}

export default function GlobalStylesProvider({ children }: Props) {
  return (
    <GlobalProvider>
      <GlobalStyles>
        {children}
      </GlobalStyles>
    </GlobalProvider>
  );
}

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
`;
