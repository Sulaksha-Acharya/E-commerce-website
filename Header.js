import { Badge, Button, ListItem, TextField } from "@mui/material";
import React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import logo from "../asset/logo.png";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaShoppingBag } from "react-icons/fa";
import { setIsCartOpen } from "./store";


const Header = () => {
  return (
    <div>
      <Navbar
        style={{
          fontSize: 18,
          maxWidth: "1170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "left",
          flexDirection: "row",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 40,
        }}
      >
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="img"
            width={70}
            height={70}
            style={{ marginRight: 100 }}
          />
        </Link>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav style={{ display: "flex", float: "left" }}>
            {/* <Link to="/" style={{ color: "#737373" }}> Home </Link>  */}
            <Link to="about" style={{ color: "#737373", marginLeft: 30 }}>
              {" "}
              <FaHeart /> About{" "}
            </Link>
            <Link to="contact" style={{ color: "#737373", marginLeft: 30 }}>
              {" "}
              <FaUser /> ContactUs
            </Link>
            <Link to="cart" style={{ color: "#737373", marginLeft: 30 }}>
             {/* <Badge></Badge> 
             <Button>
                onClick={() => dispatchEvent(setIsCartOpen({}))}
              </Button> */}
              <FaShoppingCart /> Cart
            </Link>

            <div>
              <input
                placeholder="Search for products,brands and more"
                style={{
                  marginLeft: 15,
                  marginRight: 10,
                  height: 30,
                  maxWidth: "2250px",
                }}
              />
            </div>

                <Link to="Wishlist" style={{ color: "#737373", marginLeft: 30 }}>
                  Wishlist
                </Link>
                
                <Link to="Bag" style={{ color: "#737373", marginLeft: 30 }}>
                  <FaShoppingBag />
                  Bag{" "}
                </Link>
              
                <Navbar>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className="justify-content-end"
              >
                <NavDropdown
                  title="Profile"
                  style={{ color: "#737373", marginLeft: 30}}
                >
                  <NavDropdown.Item href="login">Login/Logout</NavDropdown.Item>
                  <NavDropdown.Item href="login"> Orders</NavDropdown.Item>
                  <NavDropdown.Item href="contatcus">Contactus</NavDropdown.Item>
                  <NavDropdown.Item href="login"> Wishlist</NavDropdown.Item>
                </NavDropdown>
              </Navbar.Collapse>
            </Navbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
