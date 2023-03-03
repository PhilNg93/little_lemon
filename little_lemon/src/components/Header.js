import React from "react";
import { useState } from "react";
import logo from "../assets/Logo-name.svg"
import { NavLink } from "react-router-dom";
import { Flex, ListItem, UnorderedList, useBreakpointValue, Menu, MenuButton, MenuItem, MenuList, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function Header(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useBreakpointValue({base: true, md: false});
    return (
            <Flex
            as="header"
            className="header"
            align="center"
            justify="space-evenly"
            p={5}
            height="64px">
                <NavLink to="/">
                    {<img src={logo} alt="Little Lemon Logo" />}
                </NavLink>
                {isMobile ? (
                    <Menu>
                        <MenuButton
                        as={IconButton}
                        aria-label="OpenMenu"
                        icon={<HamburgerIcon />}
                        variant="ghost" />
                    <MenuList>
                        <MenuItem><NavLink to="/">Home</NavLink></MenuItem>
                        <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
                        <MenuItem><NavLink to="/reservations">Reservations</NavLink></MenuItem>
                        <MenuItem><NavLink to="/online-order">Online Orders</NavLink></MenuItem>
                        <MenuItem><NavLink to="/login">Login</NavLink></MenuItem>
                    </MenuList>
                    </Menu> ) : (
                <nav>
                    <UnorderedList
                    className="links"
                    p={2}
                    listStyleType="none"
                    >
                        <ListItem display="inline-block" p={5}><NavLink to="/">Home</NavLink></ListItem>
                        <ListItem display="inline-block" p={5}><NavLink to="/about">About</NavLink></ListItem>
                        <ListItem display="inline-block" p={5}><NavLink to="/menu">Menu</NavLink></ListItem>
                        <ListItem display="inline-block" p={5}><NavLink to="/reservations">Reservations</NavLink></ListItem>
                        <ListItem display="inline-block" p={5}><NavLink to="/online-order">Online Order</NavLink></ListItem>
                        <ListItem display="inline-block" p={5}><NavLink to="/login">Login</NavLink></ListItem>
                    </UnorderedList>
                </nav> )}
            </Flex>
    )
}

export default Header;