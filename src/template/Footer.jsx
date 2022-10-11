import React from 'react';
import "./Footer.scss";



const Footer = (props) => {
  return(
    <footer className="footer">
      <p className="">
      &copy; Copyright 2021 OnBoardXR / The Jigsaw Ensemble, LLC.
      </p>
      <p style={{ marginBottom: '.8rem'}}> </p>
      <div className="footer-social">
        {
          props.footer && props.footer.map(( value, index ) =>
          <a href={ value.url } target="__blank" className="footer-social-link" key={ index }>
            <svg style={{ width: '25px', height: '25px' }} viewBox="0 0 24 24">
              <path fill="currentColor" d={ value.icon }/>
            </svg>
          </a>
          )
        }
      </div>
    </footer>
  )
}

export default Footer;