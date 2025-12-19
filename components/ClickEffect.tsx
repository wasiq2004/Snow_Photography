import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const ClickEffect: React.FC = () => {
  const whatsappNumber = "9025658029"; // 🔁 Replace with your WhatsApp number
  const message = "Hello"; // optional message

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div
      className="fixed bottom-5 right-5 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center cursor-pointer shadow-lg hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      <FaWhatsapp size={35}  />
    </div>
  );
};

export default ClickEffect;
