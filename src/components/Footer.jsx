import React from "react";
const d = new Date();
const currentYear = d.getFullYear();

export default function Footer() {
  return (
    <div className="footer">
      <p className="main-footer">&copy;{currentYear} By Keval Shah </p>
    </div>
  );
}
