// TranslationProvider.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface TranslationContextProps {
  t: (key: string) => string;
  language: string;
  changeLanguage: (lng: string) => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(
  undefined
);

export const useTranslationContext = (): TranslationContextProps => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error(
      "useTranslationContext debe ser usado dentro de un TranslationProvider"
    );
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
}) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  return (
    <TranslationContext.Provider value={{ t, language, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
