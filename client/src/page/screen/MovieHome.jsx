import { Fragment, useEffect, useState } from "react";
import { Typography, Row } from "antd";
import MainImage from "../../components/MovieHome/MainImage";
import MovieGrid from "../../components/common/MovieGrid";
const { Title } = Typography;

const MovieHome = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    const endpoint = "https://api.themoviedb.org/3/movie/popular?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&page=1";
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (path) => {
    fetch(path)
      .then((response) => response.json())
      .then((data) => {
        console.log("new",data.results,"old",movies)
        const arr = movies.concat(data.results);
        console.log(arr,"res")
        setMovies(arr);
        setCurrentPage(data.page);
      });
  };

  const handleClick = () => {
    const endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=3f4ca4f3a9750da53450646ced312397&language=en-US&page=${
      currentPage + 1
    }`;
    fetchMovies(endpoint);
  };

  return (
    <Fragment>
      <div className="w-[100%] m-0">
        {/* Main Movie Image */}
        {movies && movies.length !== 0 && (
          <MainImage
            image={`http://image.tmdb.org/t/p/w1280${movies[5].backdrop_path}`}
            title={movies[5].original_title}
            text={movies[5].overview}
          />
        )}

        {/* body */}
        <div style={{ width: "85%", margin: "1rem auto" }}>
          <Title level={2}> Movies by latest </Title>
          <hr />

          {/* Grid Card */}
          <Row gutter={[20, 20]}>
            {movies &&
              movies.map((movie, index) => (
                // ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                <Fragment key={index}>
                  <MovieGrid
                    image={
                      movie.poster_path
                        ? `http://image.tmdb.org/t/p/w1280${movie.poster_path}`
                        : null
                    }
                    movieId={movie.id}
                    movieName={movie.original_title}
                  />
                </Fragment>
              ))}
          </Row>

          {/* button */}
          <div className="w-full flex justify-center items-center">
             <button
             className="text-white bg-blue-600 text-4xl m-4 p-3" 
             onClick={handleClick}>Load More</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieHome;
