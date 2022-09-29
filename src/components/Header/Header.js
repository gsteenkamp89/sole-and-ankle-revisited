import React from "react";
import styled from "styled-components/macro";

import { COLORS, devices, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import { HamburgerButton } from "../Buttons/Hamburger";
import { SearchButton } from "../Buttons/SearchButton";
import { ShoppingButton } from "../Buttons/ShoppingButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MobileDecorativeLine />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <ShoppingButton />
          <SearchButton />
          <HamburgerButton onClick={() => setShowMobileMenu(true)} />
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const MobileNav = styled(Nav)`
  gap: 20px;
  align-items: center;
`;

const MobileDecorativeLine = styled.div`
  height: 4px;
  width: 100%;
  background-color: ${COLORS.gray[900]};
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  ${devices.mobile} {
    padding: 18px 16px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  ${devices.tablet} {
    display: none;
  }
`;

export default Header;
