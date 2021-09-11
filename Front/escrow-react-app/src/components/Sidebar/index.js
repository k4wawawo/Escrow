import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} >
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
                    <SidebarLink to='about' onClick={toggle}>
                      About
                      </SidebarLink>

                    <SidebarLink to='createanoffer' onClick={toggle}>
                      Create an Offer
                      </SidebarLink>

                    <SidebarLink to='wallet' onClick={toggle}>
                      Wallet
                      </SidebarLink>

                    <SidebarLink to='signup' onClick={toggle}>
                      Sing Up
                      </SidebarLink>
                    </SidebarMenu>
              <SideBtnWrap>
            <SidebarRoute to='/signin'>Sign In</SidebarRoute>
          </SideBtnWrap> 
        </SidebarWrapper>
    </SidebarContainer>
    </>
  );
};

export default Sidebar;