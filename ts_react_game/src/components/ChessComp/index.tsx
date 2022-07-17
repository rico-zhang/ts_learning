import React, { PropsWithChildren } from 'react';
import { ChessType } from '../../types/enums';
import './index.css';

interface IProps {
  type: ChessType;
  onClick?: () => void;
}

export default function ChessComp({
  type,
  onClick,
}: PropsWithChildren<IProps>) {
  let chess: React.ReactNode = null;
  if (type === ChessType.red) {
    chess = <div className="red chess-item"></div>;
  } else if (type === ChessType.black) {
    chess = <div className="black chess-item"></div>;
  }
  return (
    <div
      className="chess"
      onClick={() => {
        if (type === ChessType.none && onClick) {
          onClick();
        }
      }}
    >
      {chess}
    </div>
  );
}
