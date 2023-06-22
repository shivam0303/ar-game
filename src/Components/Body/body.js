import React, { useEffect } from 'react';
import './body.css';
export const Body = () => {

  return (
    <div className='main-body'>
      <div className='main-section-1'>
        <iframe src="/ar-scene.html" title="AR Scene" style={{ width: '100%', height: '100vh', border: 'none' }} />
      </div>
    </div>
  );
};
