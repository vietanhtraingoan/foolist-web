import Image from "next/image";
import React from "react";
import foolistLogo from "../../../public/images/foolistLogo.png";

const classNamePrefix = "footer";

const info = [
  {
    id: 1,
    text: "(+84) 913 999 345",
  },
  {
    id: 2,
    text: "info@foolist.vn",
  },
  {
    id: 3,
    text: "Floor 3, Vietphone Building, ",
  },
  {
    id: 4,
    text: "64 Vo Thi Sau, Tan Dinh Ward, District 1,",
  },
  {
    id: 5,
    text: "Ho Chi Minh City, Viet Nam",
  },
];

export default function Footer() {
  const link = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "Power",
    },
    {
      id: 3,
      title: "Customer",
    },
    {
      id: 4,
      title: "Home",
    },
    {
      id: 5,
      title: "Words",
    },
    {
      id: 6,
      title: "Blogs",
    },
    {
      id: 7,
      title: "Contact us",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-second">
        <div className="footer-first animate__animated animate__fadeInUp">
          <div className="footer-first-item">
            <div className="info-group-title">Foolist Creative</div>

            <span className="info-group-text">Foolist.vn</span>

            <div className="info-group">
              {info.map((i) => (
                <span key={i.id}>{i.text}</span>
              ))}
            </div>
          </div>

          <div className="footer-first-item">
            <div className="link-group-title">Services</div>

            <div className="link-group">
              {link.map((l) => (
                <div className="link-group-item" key={l.id}>
                  {l.title}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-patent footer-second-item">
          <span>Copyright © 2023</span>
          <a href="https://foolist.vn/" target="_blank">
            Foolist Creative
          </a>
        </div>

        <div className="footer-second-item">
          <div className="social-group">
            <div className="social-item">
              <a
                href="https://www.linkedin.com/company/foolist-creative"
                target="_blank"
              >
                LI
              </a>
            </div>

            <div className="social-item">
              <a
                href="https://www.facebook.com/foolistcreative"
                target="_blank"
              >
                FA
              </a>
            </div>

            <div className="social-item">
              <a href="https://www.instagram.com/foolist.vn" target="_blank">
                IS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
