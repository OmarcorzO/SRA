import React from 'react'
import FullLayout from "../../Layouts/FullLayout";

function Dashboard() {

  const sendMessage = () => {
    const phoneNumber = "3147356655";
    const message = encodeURIComponent("Hola, esto es un mensaje automático., tu perdonda los inconvenientes");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, "_blank");
    
  }

  return (
    <FullLayout>
      <button onClick={sendMessage}>
        Send Whatsapp
      </button>
    </FullLayout>
  );
}

export default Dashboard;
