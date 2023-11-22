import React from "react";
import LogoImg from "../assets/logo.jpg";

export default function Header() {
  return (
    <header>
      <img src={LogoImg} alt="A form and a pencil"></img>
      <h1>React Forms</h1>
    </header>
  );
}
