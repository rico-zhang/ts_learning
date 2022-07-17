import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import MovieTable, { IMovieTableEvents } from '../../components/MovieTable';
import MovieAction from '../../store/actions/MovieAction';
import { IMovieState } from '../../store/reducers/MovieReducer';
import { IRootState } from '../../store/reducers/RootReducer';

function mapStateToProps(state: IRootState): IMovieState {
  return state.movie;
}

function mapDispatchToProps(dispatch: any): IMovieTableEvents {
  return {
    onLoad() {
      dispatch(
        MovieAction.fetchMovies({
          page: 1,
          limit: 10,
          key: '',
        })
      );
    },
    onSwitchChange(type, newState, id) {
      dispatch(MovieAction.changeSwitch(type, newState, id));
    },
    async onDelete(id) {
      await dispatch(MovieAction.deleteMovie(id));
    },
    onChange(newPage) {
      dispatch(
        MovieAction.fetchMovies({
          page: newPage,
        })
      );
    },
    onKeyChange(key) {
      dispatch(
        MovieAction.setConditionAction({
          key,
        })
      );
    },
    onSearch() {
      dispatch(
        MovieAction.fetchMovies({
          page: 1,
        })
      );
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
