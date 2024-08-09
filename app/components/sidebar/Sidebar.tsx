"use client";

import { Globalcontext } from '@/app/context/GlobalProvider';
import Image from 'next/image';
import React, { useContext } from 'react';
import styled from 'styled-components';

export default function Sidebar() {
  const { theme } = useContext(Globalcontext);

  return (
    <SidebarStyled key={theme.sidebarWidth} theme={theme}>
      <div className="profile">
        <div className="profile-overlay">
          <div className="image">
            <Image width={70} height={70} src={"/avatar1.png"} alt="" />
          </div>
          <h1>
            <span>Jhon</span>
            <span>Rostro</span>
          </h1>
        </div>
      </div>
      <ul className="nav-items">
        
      </ul>
    </SidebarStyled>
  );
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${props => props.theme.sidebarWidth};
  background-color: ${props => props.theme.colorBg2};
  border: 2px solid ${props => props.theme.borderColor};
  border-radius: 4px;
`;
