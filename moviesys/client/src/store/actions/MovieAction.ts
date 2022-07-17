import { ThunkAction } from 'redux-thunk';
import { ISearchCondition, SwitchType } from '../../services/CommonTypes';
import { IMovie, MoviceService } from '../../services/MoviceService';
import { IRootState } from '../reducers/RootReducer';
import { IAction } from './ActionTypes';

export type SaveMovieAction = IAction<
  'movie_save',
  {
    movies: IMovie[];
    total: number;
  }
>;

export function saveMovieAction(
  movies: IMovie[],
  total: number
): SaveMovieAction {
  return {
    type: 'movie_save',
    payload: {
      movies,
      total,
    },
  };
}

export type SetLoadingAction = IAction<'movie_setLoading', boolean>;

export function setLoadingAction(isLoading: boolean): SetLoadingAction {
  return {
    type: 'movie_setLoading',
    payload: isLoading,
  };
}

export type SetConditionAction = IAction<
  'movie_setCondition',
  ISearchCondition
>;
export function setConditionAction(
  condition: ISearchCondition
): SetConditionAction {
  return {
    type: 'movie_setCondition',
    payload: condition,
  };
}

export type DeleteAction = IAction<'movie_delete', string>;

export function deleteAction(id: string): DeleteAction {
  return {
    type: 'movie_delete',
    payload: id,
  };
}

export type MovieChangeSwitchAction = IAction<
  'movie_switch',
  {
    type: SwitchType;
    newVal: boolean;
    id: string;
  }
>;
function changeSwitchAction(
  type: SwitchType,
  newVal: boolean,
  id: string
): MovieChangeSwitchAction {
  return {
    type: 'movie_switch',
    payload: {
      type,
      newVal,
      id,
    },
  };
}

export function fetchMovies(
  condition: ISearchCondition
): ThunkAction<Promise<void>, IRootState, any, MovieActions> {
  return async (dispatch, getState) => {
    dispatch(setLoadingAction(true));
    dispatch(setConditionAction(condition));
    const curCondition = getState().movie.condition;
    const resp = await MoviceService.getMovies(curCondition);
    dispatch(saveMovieAction(resp.data, resp.total));
    dispatch(setLoadingAction(false));
  };
}

export function deleteMovie(
  id: string
): ThunkAction<Promise<void>, IRootState, any, MovieActions> {
  return async (dispatch, getState) => {
    dispatch(setLoadingAction(true));
    await MoviceService.delete(id);
    dispatch(deleteAction(id));
    dispatch(setLoadingAction(false));
  };
}

function changeSwitch(
  type: SwitchType,
  newVal: boolean,
  id: string
): ThunkAction<Promise<void>, IRootState, any, MovieActions> {
  return async (dispatch) => {
    dispatch(changeSwitchAction(type, newVal, id));
    await MoviceService.edit(id, {
      [type]: newVal,
    });
  };
}

export type MovieActions =
  | SaveMovieAction
  | SetConditionAction
  | SetLoadingAction
  | DeleteAction
  | MovieChangeSwitchAction;

const actions = {
  saveMovieAction,
  setLoadingAction,
  setConditionAction,
  deleteAction,
  fetchMovies,
  deleteMovie,
  changeSwitch,
};
export default actions;
