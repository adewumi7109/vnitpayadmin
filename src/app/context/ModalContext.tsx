"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalContent = ReactNode | null;

interface ModalContextProps {
  showModal: (content: ModalContent) => void;
  hideModal: () => void;
  modalContent: ModalContent;
  isVisible: boolean;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ModalContent>(null);
  const [isVisible, setIsVisible] = useState(false);

  const showModal = (content: ModalContent) => {
    setModalContent(content);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal, modalContent, isVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
