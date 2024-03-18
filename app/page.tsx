"use client";
import { useState } from "react";
import DepartureBoard from "./components/departure-board";
import Link from "next/link";
import TermsAndPrivacyButtons from "./components/terms-conditions";
import Footer from "./components/footer";

export default function Home() {
  const [termsAccepted, setTermsAccepted] = useState<null | boolean>(null);
  const [selectedCRS, setSelectedCRS] = useState<string>("LST");

  return (
    <main className="flex min-h-screen flex-col p-10">
      {termsAccepted && (
        <>
          <select
            className="custom-select bg-black text-white border-2 border-yellow-500 p-2 rounded-none"
            value={selectedCRS}
            onChange={(e) => setSelectedCRS(e.target.value)}
            aria-label="Select Station"
          >
            <optgroup label="London">
              <option value={"LST"}>London Liverpool Street</option>
              <option value={"KGX"}>London Kings Cross</option>
              <option value={"LBG"}>London Bridge</option>
              <option value={"EUS"}>London Euston</option>
              <option value={"PAD"}>London Paddington</option>
              <option value={"WAT"}>London Waterloo</option>
            </optgroup>
            <optgroup label="Kent">
              <option value={"SEV"}>Sevenoaks</option>
              <option value={"AFK"}>Ashford International</option>
              <option value={"CBE"}>Canterbury East</option>
              <option value={"CBW"}>Canterbury West</option>
            </optgroup>
            <optgroup label="Scotland">
              <option value={"GLC"}>Glasgow Central</option>
              <option value={"GLQ"}>Glasgow Queen Street</option>
            </optgroup>
            <optgroup label="Edinburgh">
              <option value={"EDB"}>Edinburgh Waverley</option>
            </optgroup>
            <optgroup label="Suffolk">
              <option value={"IPS"}>Ipswich</option>
            </optgroup>
          </select>

          <DepartureBoard crs={selectedCRS} />
          <p className="mt-2">Auto refresh: <span className="text-red-600">Off</span> <span className="text-neutral-700">(Upcoming)</span></p>
        </>
      )}
      <TermsAndPrivacyButtons onDecision={setTermsAccepted} />
      <Footer />
    </main>
  );
}
