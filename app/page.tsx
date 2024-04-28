"use client";
import { useEffect, useState } from "react";
import DepartureBoard from "./components/departure-board";
import Link from "next/link";
import TermsAndPrivacyButtons from "./components/terms-conditions";
import Footer from "./components/footer";

export default function Home() {
  const [termsAccepted, setTermsAccepted] = useState<null | boolean>(null);
  const [selectedCRS, setSelectedCRS] = useState<string>(
    global?.sessionStorage?.getItem("selected_crs") || ""
  );

  return (
    <main className="flex min-h-screen flex-col p-10">
      {termsAccepted && (
        <>
          <select
            className="custom-select bg-black text-white border-2 border-yellow-500 p-2 rounded-none"
            value={selectedCRS}
            onChange={(e) => {
              window.sessionStorage.setItem("selected_crs", e.target.value);
              setSelectedCRS(e.target.value);
            }}
            aria-label="Please select station"
          >
            <option disabled value={""}>
              Please select station
            </option>
            <optgroup label="London">
              <option value={"LST"}>London Liverpool Street</option>
              <option value={"KGX"}>London Kings Cross</option>
              <option value={"LBG"}>London Bridge</option>
              <option value={"EUS"}>London Euston</option>
              <option value={"PAD"}>London Paddington</option>
              <option value={"WAT"}>London Waterloo</option>
              <option value={"SRA"}>London Stratford</option>
              <option value={"VIC"}>London Victoria</option>
              <option value={"CHX"}>London Charing Cross</option>
              <option value={"FST"}>London Fenchurch Street</option>
              <option value={"CST"}>London Cannon Street</option>
              <option value={"STP"}>London St Pancras International</option>
              <option value={"CLJ"}>London Clapham Junction</option>
            </optgroup>
            <optgroup label="Kent">
              <option value={"SEV"}>Sevenoaks</option>
              <option value={"AFK"}>Ashford International</option>
              <option value={"CBE"}>Canterbury East</option>
              <option value={"CBW"}>Canterbury West</option>
              <option value={"TON"}>Tonbridge</option>
            </optgroup>
            <optgroup label="Glasgow">
              <option value={"GLC"}>Glasgow Central</option>
              <option value={"GLQ"}>Glasgow Queen Street</option>
              <option value={"HAY"}>Haymarket</option>
            </optgroup>
            <optgroup label="Edinburgh">
              <option value={"EDB"}>Edinburgh Waverley</option>
            </optgroup>
            <optgroup label="Suffolk">
              <option value={"IPS"}>Ipswich</option>
            </optgroup>
            <optgroup label="Manchester">
              <option value={"MAN"}>Manchester Piccadilly</option>
              <option value={"MCV"}>Manchester Victoria</option>
            </optgroup>
            <optgroup label="West Midlands">
              <option value={"BHM"}>Birmingham New Street</option>
              <option value={"BMO"}>Birmingham Moor Street</option>
              <option value={"BHI"}>Birmingham International</option>
            </optgroup>
            <optgroup label="Bristol">
              <option value={"BRI"}>Bristol Temple Meads</option>
            </optgroup>
            <optgroup label="South Yorkshire">
              <option value={"SHF"}>Sheffield</option>
            </optgroup>
            <optgroup label="Merseyside">
              <option value={"LIV"}>Liverpool Lime Street</option>
            </optgroup>
            <optgroup label="Nottinghamshire">
              <option value={"NOT"}>Nottingham</option>
            </optgroup>
            <optgroup label="Tyne and Wear">
              <option value={"NCL"}>Newcastle</option>
            </optgroup>
            <optgroup label="Hampshire">
              <option value={"SOU"}>Southampton Central</option>
              <option value={"PMS"}>Portsmouth & Southsea</option>
            </optgroup>
            <optgroup label="Essex">
              <option value={"COL"}>Colchester</option>
              <option value={"CHM"}>Chelmsford</option>
            </optgroup>
            <optgroup label="West Yorkshire">
              <option value={"LDS"}>Leeds</option>
            </optgroup>
            <optgroup label="East Sussex">
              <option value={"BTN"}>Brighton</option>
            </optgroup>
            <optgroup label="Surrey">
              <option value={"GLD"}>Guildford</option>
            </optgroup>
          </select>

          {selectedCRS !== "" && <DepartureBoard crs={selectedCRS} />}
          <p className="mt-2">
            Auto refresh: <span className="text-red-600">Off</span>{" "}
            <span className="text-neutral-700">(Upcoming)</span>
          </p>
        </>
      )}
      <TermsAndPrivacyButtons onDecision={setTermsAccepted} />
      <Footer />
    </main>
  );
}
