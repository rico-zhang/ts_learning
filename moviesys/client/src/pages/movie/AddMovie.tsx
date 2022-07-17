import React from 'react';
import MovieForm from '../../components/MovieForm';
import { MoviceService } from '../../services/MoviceService';

function AddMovie() {
  return (
    <MovieForm
      onSubmit={async (movie) => {
        const resp = await MoviceService.add(movie);
        if (resp.data) {
          return '';
        }
        return resp.err;
      }}
    ></MovieForm>
  );
}

export default AddMovie;
