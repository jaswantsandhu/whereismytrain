import { Board } from "@where/app/interfaces/board";
const Platform = ({ board, swap = false }: { board: Board; swap: boolean }) => {

  console.log(board);

  return (
    <span>
      {swap
        ? board.etd
        : `${board.platform ? `Platform ${board.platform}` : board.etd}`}
    </span>
  );
};

export default Platform;
