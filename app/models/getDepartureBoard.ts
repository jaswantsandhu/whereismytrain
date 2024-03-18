import { Board, Location } from "../interfaces/board";

const openLDBWS = require("ldbws-json");
const operation = require("ldbws-json/LDBWSOperation");
const requestData = require("ldbws-json/LDBWSRequestData");
const operationInfo = require("ldbws-json/LDBWSOperationInfo");

const apiKey = process.env.NATIONAL_RAIL_API;
const method = operation.GET_DEPARTURE_BOARD_WITH_DETAILS;

const key = operationInfo[method].key;

const options = { ...requestData.Board };

export interface IDepartureBoardResponse {
  boards: Board[];
  locationName: string;
}

const getDepartureBoard = async (
  crs = "LST"
): Promise<IDepartureBoardResponse> => {
  const api = new openLDBWS(apiKey);
  options.crs = crs;

  try {
    const board: {
      [key: string]: {
        locationName: string;
        trainServices: { service: Board };
      };
    } = await api.call(operation.GET_DEPARTURE_BOARD_WITH_DETAILS, options);

    const services = (Array.isArray(board[key].trainServices?.service)
      ? board[key].trainServices?.service
      : [board[key].trainServices?.service]) as unknown as Board[];

    services.forEach((service) => {
      const callpoints =
        service.subsequentCallingPoints?.callingPointList?.callingPoint;
      if (callpoints) {
        service.subsequentCallingPoints.callingPointList.callingPoint =
          Array.isArray(callpoints) ? callpoints : [callpoints];
      }
    });

    return { boards: services, locationName: board[key].locationName };
  } catch (error) {
    return { boards: [], locationName: "" };
  }
};

export default getDepartureBoard;
