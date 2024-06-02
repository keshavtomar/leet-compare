import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import "../../app/globals.css";

export default function Footer() {


  return (
    <div className="border-t mx-4 pb-2 pt-2 flex justify-between mt-11">
      <div className="left-content">Made by Keshav Tomar</div>
      <div className="right-content flex flex-row">
        <div className="github px-1">
          <a href="https://github.com/keshavtomar">
            <FaGithub color="#211F1F"/>
          </a>
        </div>
        <div className="linkedin px-1">
          <a href="https://www.linkedin.com/in/keshav-tomar-a4756b223/">
                <FaLinkedin color="#0A66C2"/>
          </a>
        </div>
        <div className="insta px-1">
          <a href="https://www.instagram.com/keshav_tomar_/">
            <FaInstagram color="#DE15B8"/>
          </a>
        </div>
      </div>
    </div>
  );
}
