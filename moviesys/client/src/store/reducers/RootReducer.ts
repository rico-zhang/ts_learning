import { combineReducers } from 'redux';
import movie, { IMovieState } from './MovieReducer';

export interface IRootState {
  movie: IMovieState;
}

export const rootReducer = combineReducers({
  movie,
});
