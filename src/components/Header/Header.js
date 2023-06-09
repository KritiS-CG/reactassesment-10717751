import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router";
import "./Header.css";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [Loading, setLoading] = useState(false);
  return (
    <>
      <Navbar fixed className="header-nav">
        <Container>
          <Navbar.Brand onClick={() => {
                  navigate("/");
                }}>
            <div className="css-blog-brand">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Navbar.Brand>
          <Nav className="justify-content-end navigation-link">
            <li>
              <span
                onClick={() => {
                  navigate("/Blog");
                }}
              >
                {" "}
                Blog{" "}
              </span>{" "}
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/myBlog");
                }}
              >
                My Blog{" "}
              </span>
            </li>
            <li>
              <span
                onClick={() => {
                  navigate("/createBlog");
                }}
              >
                Create Blog{" "}
              </span>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
