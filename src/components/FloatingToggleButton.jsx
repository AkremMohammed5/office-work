import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FloatingToggleButton() {
  const pages = ["/", "/dashboard", "/admin"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % pages.length;
    setCurrentIndex(nextIndex);
    navigate(pages[nextIndex]);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#ff0000",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        cursor: "pointer",
        zIndex: 9999,
      }}
    >
      Go
    </button>
  );
}
