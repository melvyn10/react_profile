import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

function Footer() {

  const location = useLocation();

  return (
    <footer className="footer">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <div className="row_social">
            <div className="col-lg-12">
              <div className="socialIconList">
                <li><a href="mailto:mten1@yahoo.com" target="_blank"><i className="fa fa-envelope fa-fw fa-2x" /></a></li>
                <li><a href="http://www.linkedin.com/in/melvyn-ten-pmp-5166a93" target="_blank"><i className="fa fa-linkedin fa-fw fa-2x" /></a></li>
                <li><a href="https://github.com/melvyn10" target="_blank"><i className="fa fa-github fa-fw fa-2x" /></a></li>
                <li><a href="https://twitter.com/ten_mel" target="_blank"><i className="fa fa-twitter fa-fw fa-2x" /></a></li>
              </div>
              <br />
            </div>
          </div>
          <div className="row" id="copyright" style={{ margin: -30 }}>
            <div className="col-lg-12">
              <p className="small">© 2021 melvyn 10</p>
            </div>
          </div>
    </footer>
    );
}

export default Footer;