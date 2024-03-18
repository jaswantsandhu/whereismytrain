import React, { useState, useEffect } from "react";
import { Board } from "@where/app/interfaces/board";
import Platform from "./platform";
import CallingPoints from "./callingpoints";

const TOTAL_BOARDS = process.env.NEXT_PUBLIC_TOTAL_BOARDS;
const BOARD_SWAP_TIME = process.env.NEXT_PUBLIC_BOARD_SWAP_TIME;

const Signage = ({ board }: { board: Board }) => {
  const [isOdd, setIsOdd] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOdd((prevIsOdd) => !prevIsOdd);
    }, Number(BOARD_SWAP_TIME));
    return () => clearInterval(interval);
  }, [board]);

  const callingPointsList =
    board.subsequentCallingPoints?.callingPointList?.callingPoint || [];

  return (
    <div className={`mt-4 w-full lg:w-1/${TOTAL_BOARDS}`}>
      <div className="border border-gray-600 p-1 w-full">
        <div className="border border-gray-800 p-4 w-full h-96 relative">
          <p className="justify-between flex mb-1 font-bold">
            <span>{board.std}</span>
            <Platform board={board} swap={isOdd} />
          </p>

          <p className="font-bold">{board.destination.location.locationName}</p>
          {callingPointsList.length > 0 && (
            <CallingPoints callingPoint={callingPointsList} swap={isOdd} />
          )}
          <p className="border-t border-amber-400 my-2 -bottom-2 absolute left-0 right-0 p-2">
            {board.operator}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signage;
