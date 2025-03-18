interface CellProps {
  row: number;
  col: number;
  isHit: boolean;
  isMiss: boolean;
  onClick: (xPos: number, yPos: number) => void;
}

const Cell = ({ row, col, isHit, isMiss, onClick }: CellProps) => {
  return (
    <div
      className={`w-7 h-7 sm:w-10 sm:h-10 border border-gray-400 flex items-center justify-center transition-all duration-300 cursor-pointer ${
        isHit
          ? 'bg-red-500 transform scale-110'
          : isMiss
          ? 'bg-blue-500 transform scale-110'
          : ''
      }`}
      onClick={() => onClick(row, col)}
    >
      {isHit ? '💥' : isMiss ? '🌊' : ''}
    </div>
  );
};

export default Cell;
