import React, { useState } from "react";
import { useFetchPokemon } from "../hooks/useFetchPokemon";
import { useFetchActs } from "../hooks/ruleEngine/useRuleEngine";
import { useDateHandler } from "../hooks/useDateHandler";
import { useTranslationContext } from "../../context/TranslationProvider";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación
import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PokemonPage: React.FC = () => {
  const { t, changeLanguage } = useTranslationContext();
  const { data, loading, error } = useFetchPokemon(); // Hook para obtener y suscribirse a los Pokémon en tiempo real
  const {} = useFetchActs();

  const {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleAddDays,
    handleRemoveDays,
    dateDifference,
  } = useDateHandler();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook para navegar entre rutas

  const handlePokemonClick = (name: string) => {
    setSelectedPokemon(name);
    setIsModalOpen(true);
  };

  return (
    <div className="p-4 bg-red-50">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{t("pokemonList")}</h1>
        <div className="flex space-x-2">
          <button
            onClick={() => changeLanguage("en")}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded shadow-sm hover:bg-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200"
            aria-label="Change language to English"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("es")}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded shadow-sm hover:bg-gray-300 focus:border-gray-400 focus:ring focus:ring-gray-200"
            aria-label="Cambiar idioma a Español"
          >
            ES
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4 sm:flex-row sm:flex-wrap sm:space-y-0 sm:space-x-4 lg:space-x-6 mb-4">
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText={t("startDate")}
          className="p-2 border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 mb-4 sm:mb-0"
          minDate={new Date()}
          aria-label="Select start date"
        />
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText={t("endDate")}
          className="p-2 border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 mb-4 sm:mb-0"
          minDate={new Date(startDate.getTime() + 24 * 60 * 60 * 1000)}
          aria-label="Select end date"
        />
        <input
          type="text"
          value={`${t("dateDifference")} ${dateDifference}`}
          readOnly
          className="p-2 border border-gray-300 rounded shadow-sm bg-gray-100 mb-4 sm:mb-0"
          aria-label="Difference in days"
        />
        <button
          onClick={() => handleAddDays(1)}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow-sm hover:bg-blue-600 focus:border-blue-500 focus:ring focus:ring-blue-200 mb-4 sm:mb-0"
          aria-label="Add a day"
        >
          {t("addDay")}
        </button>
        <button
          onClick={() => handleRemoveDays(1)}
          className="px-4 py-2 bg-red-500 text-white rounded shadow-sm hover:bg-red-600 focus:border-red-500 focus:ring focus:ring-red-200 mb-4 sm:mb-0"
          aria-label="Remove a day"
        >
          {t("removeDay")}
        </button>

        <button
          onClick={() => {}}
          className="px-4 py-2 bg-green-500 text-white rounded shadow-sm hover:bg-green-600 focus:border-green-500 focus:ring focus:ring-green-200 mb-4 sm:mb-0"
          aria-label="Cotizar"
        >
          {t("calculate")}
        </button>
      </div>

      {/* Botón para navegar a la página del mapa */}
      <div className="text-center my-4">
        <button
          onClick={() => navigate("/map")} // Navega a la página del mapa
          className="px-4 py-2 bg-green-500 text-white rounded shadow-sm hover:bg-green-600 focus:border-green-500 focus:ring focus:ring-green-200 mb-4"
          aria-label="Go to Map Page"
        >
          {t("viewMap")}
        </button>
      </div>

      <Loading isOpen={loading} />
      {error && (
        <p className="text-center text-red-500">
          {t("error")}: {error || t("errorMessage")}
        </p>
      )}
      {data && (
        <PokemonList pokemon={data} onPokemonClick={handlePokemonClick} />
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t("pokemonDetails")}
      >
        <p>{selectedPokemon}</p>
      </Modal>
    </div>
  );
};

export default PokemonPage;
