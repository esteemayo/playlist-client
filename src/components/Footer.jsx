import React from 'react';

const Footer = () => {
    const year = new Date();

    return (
        <footer>
            <p>&copy; {year.getFullYear()}. All Rights Reserved. Design by Emmanuel Adebayo&trade;</p>
        </footer>
    );
}
 
export default Footer;