"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { SelectedPackagePayload } from "@/lib/api";

export interface OpenInquiryOptions {
  selectedPackage?: SelectedPackagePayload;
  sourceComponent?: string;
}

interface InquiryModalContextType {
  isOpen: boolean;
  selectedPackage: SelectedPackagePayload | null;
  sourceComponent: string;
  openInquiryModal: (options?: OpenInquiryOptions) => void;
  closeInquiryModal: () => void;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(
  undefined,
);

export function InquiryModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] =
    useState<SelectedPackagePayload | null>(null);
  const [sourceComponent, setSourceComponent] = useState<string>("general");

  const openInquiryModal = (options?: OpenInquiryOptions) => {
    setSelectedPackage(options?.selectedPackage || null);
    setSourceComponent(options?.sourceComponent || "general");
    setIsOpen(true);
  };

  const closeInquiryModal = () => {
    setIsOpen(false);
  };

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        selectedPackage,
        sourceComponent,
        openInquiryModal,
        closeInquiryModal,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error(
      "useInquiryModal must be used within an InquiryModalProvider",
    );
  }
  return context;
}
