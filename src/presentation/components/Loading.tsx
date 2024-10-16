import React from "react";
import { useTranslationContext } from "../../context/TranslationProvider";

interface LoadingProps {
  isOpen: boolean;
}

const Loading: React.FC<LoadingProps> = ({ isOpen }) => {
  const { t } = useTranslationContext();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col items-center">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-500 h-16 w-16 mb-4 animate-spin"></div>
        <p className="text-white text-lg">{t("loading")}</p>
      </div>
    </div>
  );
};

export default Loading;
