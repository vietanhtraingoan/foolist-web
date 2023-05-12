import Image from "next/image";
import React from "react";
import foolistLogo from "../../../public/images/foolistLogo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div className="left-group">
          <div className="logo-group">
            <Image
              src={foolistLogo}
              className="logo"
              alt="logo"
              width={40}
              height={40}
            />

            <div>Foolist Creative</div>
          </div>
        </div>
        <div className="right-group">
          <div>Services</div>
        </div>
      </div>
    </div>
  );
}
