import React, { useRef, useState } from "react";
import QRCode from "react-qr-code";

const CustomBottomSheet: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [startY, setStartY] = useState(0);
  const bottomSheetRef = useRef<HTMLDivElement>(null);

  const toggleBottomSheet = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchY = e.touches[0].clientY;
    const distance = startY - touchY;
    const sheet = bottomSheetRef.current;

    if (sheet && distance > 0) {
      const newHeight = Math.min(window.innerHeight, 100 + distance);
      sheet.style.height = `${newHeight}px`;
    }
  };

  const handleTouchEnd = () => {
    const sheet = bottomSheetRef.current;
    if (sheet) {
      const height = parseInt(sheet.style.height, 10);
      if (height > window.innerHeight / 2) {
        setIsExpanded(true);
        sheet.style.height = "60%";
      } else {
        setIsExpanded(false);
        sheet.style.height = "80px";
      }
    }
  };

  const defaultUrl = "https://app.mappedin.com/map/6707ebf0cda55a000ba37320";

  return (
    <div className="w-full h-screen flex flex-col bg- relative">
      <nav className="bg-blue-900 p-4 text-white flex justify-between items-center z-10">
        <h1 className="text-xl font-semibold">Explora el Mapa</h1>
        <button
          className="bg-[#43b4b4] hover:bg-[#369e9e] text-white px-4 py-2 rounded-lg shadow-md z-20"
          onClick={toggleBottomSheet}
        >
          {isExpanded ? "CERRAR" : "VER QR"}
        </button>
      </nav>

      <div className="flex-grow relative">
        <iframe
          src={defaultUrl}
          title="Mapa Interactivo"
          className="w-full h-full border-0 bg-slate-500"
        />
      </div>

      <div
        ref={bottomSheetRef}
        className={`fixed inset-x-0 bottom-0 bg-white rounded-t-3xl shadow-lg transition-all duration-300 ease-in-out ${
          isExpanded ? "h-[60%]" : "h-[80px]"
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ zIndex: 20 }}
      >
        <div className="p-4 flex items-center justify-between ">
          <h2 className="text-2xl font-bold text-blue-900 ml-2">
            Lleva el Mapa Contigo 📲
          </h2>
          <button
            className="text-[#43b4b4] text-lg font-bold"
            onClick={toggleBottomSheet}
          >
            {isExpanded ? "↓ CONTRAER" : "↑ EXPANDIR"}
          </button>
        </div>

        {isExpanded && (
          <div className="p-6 flex flex-col items-center space-y-6">
            <p className="text-gray-600 text-center">
              Escanea este código QR para abrir el mapa en tu dispositivo.
            </p>
            <QRCode value={defaultUrl} size={180} className="shadow-lg" />
            <button
              onClick={() => navigator.clipboard.writeText(defaultUrl)}
              className="mt-4 bg-[#43b4b4] hover:bg-[#369e9e] text-white px-8 py-3 rounded-lg shadow-md"
            >
              Copiar URL del QR
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomBottomSheet;
