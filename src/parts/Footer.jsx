import React from "react";

function Footer(){
    const currentyer = new Date().getFullYear();
    return(
        <footer>
        <p>Copywrite ⓒ  {currentyer}</p>
        </footer>
    );
}

export default Footer;