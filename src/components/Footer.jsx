import React from "react";

const Footer = () => (
  <footer style={{ textAlign: "center", padding: "1rem", background: "#1f1f1f", color: "white" }}>
    <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
  </footer>
);

export default Footer;
