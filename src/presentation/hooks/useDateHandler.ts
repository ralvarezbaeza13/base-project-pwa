import { useState } from 'react';
import { addDays, calculateDateDifference } from './dateUtils';

export const useDateHandler = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(addDays(new Date(), 1));

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date || new Date());
    if (endDate && date && endDate <= date) {
      setEndDate(addDays(date, 1));
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && date > startDate) {
      setEndDate(date);
    } else {
      setEndDate(addDays(startDate, 1));
    }
  };

  const handleAddDays = (days: number) => {
    if (endDate) {
      setEndDate(addDays(endDate, days));
    }
  };

  const handleRemoveDays = (days: number) => {
    if (endDate) {
      const newEndDate = addDays(endDate, -days);
      if (newEndDate > startDate) {
        setEndDate(newEndDate);
      }
    }
  };

  const dateDifference = calculateDateDifference(startDate, endDate);

  return {
    startDate,
    endDate,
    handleStartDateChange,
    handleEndDateChange,
    handleAddDays,
    handleRemoveDays,
    dateDifference,
  };
};