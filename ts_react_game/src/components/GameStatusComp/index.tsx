import React, { PropsWithChildren } from 'react';
import { GameStatus, ChessType } from '../../types/enums';
import './index.css';

interface IProps {
  status: GameStatus;
  next: ChessType.red | ChessType.black;
}

export default function GameStatusComp(props: PropsWithChildren<IProps>) {
  let content: JSX.Element;
  switch (props.status) {
    case GameStatus.gaming:
      if (props.next === ChessType.red) {
        content = <div className="red">红方落子</div>;
      } else {
        content = <div className="black">黑方落子</div>;
      }
      break;
    case GameStatus.redWin:
      content = <div className="finish red">红方胜利</div>;
      break;
    case GameStatus.blackWin:
      content = <div className="finish black">黑方胜利</div>;
      break;
    case GameStatus.equal:
      content = <div className="finish equal">平局</div>;
      break;
  }

  return <div className="status">{content}</div>;
}
