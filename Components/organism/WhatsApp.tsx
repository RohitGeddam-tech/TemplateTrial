import React, { useState } from 'react';
const WhatsApp = () => {
    
    const [refreshKey, setRefreshKey] = useState(0); // State to manage the key for refreshing

    const openWhatsApp = () => {
      const phoneNumber = "+917020272195";
      const message = "Hello!";
      const whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
      window.open(whatsappURL);
      setRefreshKey(prevKey => prevKey + 1); // Increment the key to trigger re-render
    }
  return (
    <a href="javascript:void(0)" className="whatsapp-btn" onClick={openWhatsApp}>
      whatsapp
    </a>
  );
}

export default WhatsApp;
