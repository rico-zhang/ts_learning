import React, { Component } from 'react';
import { ChessType, GameStatus } from '../../types/enums';
import BoardComp from '../BoardComp';
import GameStatusComp from '../GameStatusComp';

interface IState {
  chesses: ChessType[];
  gameStatus: GameStatus;
  nextChess: ChessType.red | ChessType.black;
}
interface IProps {}

export default class GameComp extends Component<IProps, IState> {
  state: IState = {
    chesses: [],
    gameStatus: GameStatus.gaming,
    nextChess: ChessType.black,
  };

  componentDidMount() {
    this.init();
  }

  //初始化数据
  init() {
    const arr: ChessType[] = new Array(9).fill(ChessType.none);
    this.setState({
      chesses: arr,
      gameStatus: GameStatus.gaming,
      nextChess: ChessType.black,
    });
  }
  handleChessClick = (index: number) => {
    const chesses: ChessType[] = [...this.state.chesses];
    chesses[index] = this.state.nextChess;
    this.setState((prevState) => ({
      chesses,
      nextChess:
        prevState.nextChess === ChessType.red ? ChessType.black : ChessType.red,
      gameStatus: this.getGameStatus(chesses, index),
    }));
  };

  getGameStatus = (chesses: ChessType[], index: number): GameStatus => {
    //1. 判断是否有一方获得胜利
    const horMin = Math.floor(index / 3) * 3;
    const verMin = index % 3;
    if (
      (chesses[horMin] === chesses[horMin + 1] &&
        chesses[horMin] === chesses[horMin + 2] &&
        chesses[horMin] !== ChessType.none) || //横向
      (chesses[verMin] === chesses[verMin + 3] &&
        chesses[verMin] === chesses[verMin + 6] &&
        chesses[verMin] !== ChessType.none) || //纵向
      (chesses[0] === chesses[4] &&
        chesses[0] === chesses[8] &&
        chesses[0] !== ChessType.none) || //斜线
      (chesses[2] === chesses[4] &&
        chesses[2] === chesses[6] &&
        chesses[2] !== ChessType.none) //反斜线
    ) {
      if (chesses[index] === ChessType.red) {
        return GameStatus.redWin;
      } else {
        return GameStatus.blackWin;
      }
    } else if (!chesses.includes(ChessType.none)) {
      return GameStatus.equal;
    } else {
      return GameStatus.gaming;
    }
  };

  render() {
    const { gameStatus, nextChess, chesses } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>三连棋</h1>
        <GameStatusComp status={gameStatus} next={nextChess} />
        <BoardComp
          chesses={chesses}
          isGameOver={gameStatus !== GameStatus.gaming}
          onClick={this.handleChessClick}
        />
        <button
          onClick={() => {
            this.init();
          }}
        >
          重新开始
        </button>
      </div>
    );
  }
}
