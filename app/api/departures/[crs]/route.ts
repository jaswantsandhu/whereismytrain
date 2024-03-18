import getDepartureBoard from "@where/app/models/getDepartureBoard";
import { NextRequest } from "next/server";

const supportCRS = process.env.SUPPORTED_CRS?.split(",");

export async function GET(
  request: NextRequest,
  { params: { crs } }: { params: { crs: string } }
) {
  if (!supportCRS?.includes(crs)) {
    return Response.json({ status: `Invalid CRS - ${crs}` }, { status: 404 });
  }
  const boards = await getDepartureBoard(crs.toUpperCase());
  
  return Response.json(boards);
}
