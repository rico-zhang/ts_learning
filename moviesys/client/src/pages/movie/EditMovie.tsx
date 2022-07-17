import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import MovieForm from '../../components/MovieForm';
import { IMovie, MoviceService } from '../../services/MoviceService';

function EditMovie() {
  const [movie, setMovie] = useState<IMovie | undefined>();
  const params = useParams<{ id: string }>();

  async function getMovie(id: string) {
    const resp = await MoviceService.getMovieById(id!);
    if (resp.data) {
      setMovie(resp.data);
    }
  }
  useEffect(() => {
    getMovie(params.id!);
  }, [params.id]);

  return (
    <div>
      <MovieForm
        movie={movie}
        onSubmit={async (movie) => {
          const resp = await MoviceService.edit(params.id!, movie);
          if (resp.data) {
            return '';
          } else {
            return resp.err;
          }
        }}
      ></MovieForm>
    </div>
  );
}

export default EditMovie;
