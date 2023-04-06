import React from "react";
import style from "./style/header.module.css";
import { Nav } from "react-bootstrap";

function Header() {
  return (
    <div>
      <div className={style.head}>
        <Nav
          className="justify-content-end sticky navbar navbar-light"
          activeKey="/"
        >
          <Nav.Item>
            <Nav.Link href="/create-blog" className={style.but}>
              Create Blog
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
}

export default Header;
