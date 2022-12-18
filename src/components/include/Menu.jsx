import React, { useEffect } from "react";

const Menu = () => {
  // 헤더 메뉴 클릭
  const menu = document.querySelector(".vertex.menu");
  const menuList = document.querySelector(".vertex ul");

  menu.addEventListener("click", () => {
    menuList.classList.toggle("show");
  });

  return (
    <header id="header">
      <a href="#section1">
        <h1 className="vertex">
          portfolio
          <em className="arrow" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </em>
        </h1>
      </a>
      <nav className="vertex menu">
        menu
        <em className="arrow" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </em>
        <ul>
          <li>
            <a href="#section1">Main</a>
          </li>
          <li>
            <a href="#section2">About Me</a>
          </li>
          <li>
            <a href="#section3">Web Site</a>
          </li>
          <li>
            <a href="#section4">Effect</a>
          </li>
          <li>
            <a href="#section5">Study</a>
          </li>
          <li>
            <a href="#section6">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
