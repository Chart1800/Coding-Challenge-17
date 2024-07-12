// U94741303

// Fancy Text

import React from 'react';
import 'fancytext.js'; 

const FancyText = ({ title, text }) => {
  return (
    <div className={title? "Fancy Title": 'Fancy Cursive'}>
      {text}
    </div>
  );
};

export default FancyText;



