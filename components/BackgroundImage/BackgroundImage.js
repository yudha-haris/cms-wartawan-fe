import React from 'react';

export default function BackgroundImage(image_url) {
  return (
    <div className="bg-fixed bg-cover bg-center h-screen" 
        style={{ backgroundImage: `url(${image_url})` }}>
    </div>
  );
};