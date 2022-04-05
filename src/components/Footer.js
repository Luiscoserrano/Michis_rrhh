import React from 'react'

const Footer = () => {
  return (
    <footer className='container'>
        <p>&copy; {(new Date().getFullYear())} Michi´s. &middot;</p>
    </footer>
  );
}

export default Footer;