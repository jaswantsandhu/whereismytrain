import Link from "next/link";
import React, { useState, useEffect } from "react";

interface TermsAndPrivacyButtonsProps {
  onDecision: (accepted: boolean) => void;
}

const TermsAndPrivacyButtons: React.FC<TermsAndPrivacyButtonsProps> = ({
  onDecision,
}) => {
  const [showButtons, setShowButtons] = useState<boolean>(false);

  useEffect(() => {
    const accepted = sessionStorage.getItem("termsAccepted") === "true";
    setShowButtons(!accepted);
    onDecision(accepted);
  }, [onDecision]);

  const handleAccept = () => {
    sessionStorage.setItem("termsAccepted", "true");
    setShowButtons(false);
    onDecision(true);
  };

  const handleReject = () => {
    onDecision(false);
  };

  if (!showButtons) return null;

  return (
    <div>
      <h1 className="text-xl">
        To use the application, you must accept the{" "}
        <Link
          target="_blank"
          href="/terms-and-conditions"
          className="text-white"
        >
          Terms and Conditions
        </Link>
        .
      </h1>
      <button
        className="border border-amber-400 p-1 m-1"
        onClick={handleAccept}
      >
        Accept
      </button>
      <button
        className="border border-amber-400 p-1 m-1"
        onClick={handleReject}
      >
        Reject
      </button>
    </div>
  );
};

export default TermsAndPrivacyButtons;
