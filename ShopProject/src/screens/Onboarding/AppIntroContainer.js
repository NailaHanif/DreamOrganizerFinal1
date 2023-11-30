import React, { useState } from 'react';
import { Modal } from 'react-native';
import AppIntroScreen from './AppIntroScreen'; // Adjust the path to your actual AppIntroScreen

const AppIntroContainer = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroClose = () => {
    setShowIntro(false);
  };

  return (
    <Modal visible={showIntro} animationType="slide" onRequestClose={handleIntroClose}>
      <AppIntroScreen onClose={handleIntroClose} />
    </Modal>
  );
};

export default AppIntroContainer;
