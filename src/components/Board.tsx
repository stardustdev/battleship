import { useState } from 'react';

import { shipData } from '../constants/shipdata';

import Cell from './Cell';

const Board = () => {
  const [hits, setHits] = useState<Set<string>>(new Set());
  const [misses, setMisses] = useState<Set<string>>(new Set());
  const [clicks, setClicks] = useState<number>(50);

  const handleCellClick = (x: number, y: number) => {
    const key = `${x}-${y}`;
    if (hits.has(key) || misses.has(key)) return;

    setClicks(clicks - 1);
    const isHit = shipData.layout.some((ship) =>
      ship.positions.some((pos) => pos[0] === x && pos[1] === y)
    );

    if (isHit) {
      setHits(new Set(hits).add(key));
    } else {
      setMisses(new Set(misses).add(key));
    }
  };

  return (
    <>
      <h4 className="text-2xl font-bold">You have {clicks} clicks remained</h4>

      <div className="flex flex-row justify-center">
        <div className="flex flex-col gap-1 mt-6">
          {Array.from({ length: 10 }).map((_, row) => (
            <div className="flex flex-row gap-1">
              {Array.from({ length: 10 }).map((_, col) => {
                const key = `${row}-${col}`;
                return (
                  <Cell
                    key={key}
                    row={row}
                    col={col}
                    isHit={hits.has(key)}
                    isMiss={misses.has(key)}
                    onClick={handleCellClick}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Board;
