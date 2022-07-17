import { Reducer } from 'react';
import { ISearchCondition } from '../../services/CommonTypes';
import { IMovie } from '../../services/MoviceService';
import {
  DeleteAction,
  MovieActions,
  MovieChangeSwitchAction,
  SaveMovieAction,
  SetConditionAction,
  SetLoadingAction,
} from '../actions/MovieAction';

export interface IMovieState {
  data: IMovie[];
  condition: Required<ISearchCondition>;
  total: number;
  isLoading: boolean;
  totalPage: number;
}

const defaultState: IMovieState = {
  data: [],
  condition: {
    page: 1,
    limit: 10,
    key: '',
  },
  total: 0,
  isLoading: false,
  totalPage: 0,
};

type MovieReducer<A> = Reducer<IMovieState, A>;

const saveMovie: MovieReducer<SaveMovieAction> = (state, action) => {
  return {
    ...state,
    data: action.payload.movies,
    total: action.payload.total,
    totalPage: Math.ceil(action.payload.total / state.condition.limit),
  };
};

const setCondition: MovieReducer<SetConditionAction> = (state, action) => {
  const newState = {
    ...state,
    condition: {
      ...state.condition,
      ...action.payload,
    },
  };
  newState.totalPage = Math.ceil(newState.total / newState.condition.limit);
  return newState;
};

const setLoading: MovieReducer<SetLoadingAction> = (state, action) => {
  return {
    ...state,
    isLoading: action.payload,
  };
};

const deleteMovie: MovieReducer<DeleteAction> = (state, action) => {
  return {
    ...state,
    data: state.data.filter((it) => it._id !== action.payload),
    total: state.total - 1,
    totalPage: Math.ceil((state.total - 1) / state.condition.limit),
  };
};

const changeSwitch: MovieReducer<MovieChangeSwitchAction> = function (
  state,
  action
) {
  // action.payload.
  //1. 根据id找到对象
  const movie = state.data.find((d) => d._id === action.payload.id);
  if (!movie) {
    return state;
  }
  //2. 对象克隆
  const newMoive = { ...movie };
  newMoive[action.payload.type] = action.payload.newVal;

  //3. 将对象重新放入到数组
  const newData = state.data.map((d) => {
    if (d._id === action.payload.id) {
      return newMoive;
    }
    return d;
  });

  return {
    ...state,
    data: newData,
  };
};

export default function reducer(
  state: IMovieState = defaultState,
  action: MovieActions
) {
  switch (action.type) {
    case 'movie_delete':
      return deleteMovie(state, action);
    case 'movie_save':
      return saveMovie(state, action);
    case 'movie_setCondition':
      return setCondition(state, action);
    case 'movie_setLoading':
      return setLoading(state, action);
    case 'movie_switch':
      return changeSwitch(state, action);
    default:
      return state;
  }
}
