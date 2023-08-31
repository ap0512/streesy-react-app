import React from 'react';

const Footer2 = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Dickies. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f0f0f0',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
};

export default Footer2;
