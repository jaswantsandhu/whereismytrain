"use client";
import useDepartures from "@where/app/hooks/useDepartures";
import Signage from "../signage";

export interface IDepartureBoardProps {
  crs: string;
}

const DepartureBoard = ({ crs }: IDepartureBoardProps) => {
  const [boards, { error, locationName }] = useDepartures(crs);

  if (boards === null) {
    return (
      <div className="mt-4">
        <h1 className="my-2 ">{crs}</h1>
        <div className="border border-gray-600 p-1 w-full">
          <div className="border border-gray-800 p-4 w-full">
            <p>Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if ((boards && boards.length === 0) || error) {
    return (
      <div className="mt-4">
        <h1 className="my-2 ">{crs}</h1>
        <div className="border border-gray-600 p-1 w-full">
          <div className="border border-gray-800 p-4 w-full">
            <p>Board data not available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h1 className="my-2 font-bold text-xl">{locationName}</h1>
      <div className="flex justify-between gap-2 flex-col lg:flex-row">
        {boards &&
          boards.map((board) => {
            return <Signage board={board} key={board.serviceID} />;
          })}
      </div>
    </div>
  );
};

export default DepartureBoard;
