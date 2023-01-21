import { chakra } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Developed by</h4>
            <chakra.img
          w={"40px"}
          height={"40px"}
          src="https://tse4.mm.bing.net/th?id=OIP.bddTMKCel32ehetFN1OtSAAAAA&pid=Api&P=0"
        ></chakra.img>
            <ul>
              <li>
                <a href="#">
                  <i>Prithiviraj Elumalai (FactWise FrontEnd Developer)</i> 
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
