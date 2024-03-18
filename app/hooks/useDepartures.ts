import { useState, useEffect, useCallback } from "react";
import { Board } from "../interfaces/board";
import { IDepartureBoardResponse } from "../models/getDepartureBoard";

const TOTAL_BOARDS = process.env.NEXT_PUBLIC_TOTAL_BOARDS;

export type IUseDepartures = [
  Board[] | null,
  { refresh: () => Promise<void>; error: string | null; locationName: string }
];

const useDepartures = (crs: string): IUseDepartures => {
  const [boards, setBoards] = useState<Board[] | null>(null);
  const [locationName, setlocationName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const getBoards = useCallback(async () => {
    try {
      const response = await fetch(`/api/departures/${crs}`);
      if (!response.ok) throw new Error("Failed to fetch board data");
      const { boards, locationName } =
        (await response.json()) as unknown as IDepartureBoardResponse;
      setBoards(boards.slice(0, Number(TOTAL_BOARDS)));
      setlocationName(locationName);
    } catch (err) {
      console.error(err);
      setError("Failed to load data");
      setBoards([]);
    }
  }, [crs]);

  useEffect(() => {
    getBoards();
  }, [getBoards]);

  const refresh = useCallback(async () => {
    await getBoards();
  }, [getBoards]);

  return [boards, { refresh, error, locationName }];
};

export default useDepartures;
