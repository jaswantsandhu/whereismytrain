import { CallingPoint } from "@where/app/interfaces/board";
import { useEffect, useState } from "react";

const ROW_PER_PAGE = process.env.NEXT_PUBLIC_ROW_PER_PAGE

const CallingPoints = ({
  callingPoint,
  pageSize = Number(ROW_PER_PAGE),
  swap = false,
}: {
  callingPoint: CallingPoint[];
  pageSize?: number;
  swap?: boolean;
}) => {
  const pages = Math.ceil(callingPoint.length / pageSize);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    setCurrent((current) => {
      if (current + 1 > pages) {
        return 1;
      }
      return current + 1;
    });
  }, [pages, swap]);

  useEffect(() => {
    setCurrent(1);
  }, [callingPoint, pageSize]);

  const start = (current - 1) * pageSize;
  const end = current * pageSize;
  const points = callingPoint.slice(start, end);

  return (
    <>
      <p>Calling at: {pages > 1 ? `${current} of ${pages}` : ``}</p>
      {points?.map((point, index) => {
        return (
          <span className="block truncate" key={point.crs}>
            {pages === current &&
            index + 1 === points.length &&
            points.length > 1
              ? "& "
              : ""}
            {point.locationName}
          </span>
        );
      })}
    </>
  );
};

export default CallingPoints;
