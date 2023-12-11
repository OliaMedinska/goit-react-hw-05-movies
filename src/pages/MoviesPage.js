// import {searchMovies} from 'api';
// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

export default function MoviesPage () {
//     const [movieItems, setMovieItems] = useState([]);
//     const [movieName, setMovieName] = useState('');
//     const [page, setPage] = useState(1);
//     const [isLoading, setIsLoading] = useState(false);

// useEffect(() => {
//     async function getMovies() {
//         if (movieName === '') {
//         return;
//         }

//         try {
//         const searchedMovies = await searchMovies(movieName, page);
//         console.log(searchMovies);
//         setIsLoading(true);
//         setMovieItems(prevItems => [...prevItems, ...searchedMovies]);
//         } catch (error) {
//         console.log('Something wrong...');
//         } finally {
//         setIsLoading(false);
//         }
//     }

//     getMovies();
//     }, [movieName, page]);


// const onSubmitItems = e => {
//     e.preventDefault();

//     setMovieItems([]);
//     setMovieName(e.target.search.value.trim());
//     setPage(1);
// };

    return (
        <div>movies</div>
//         <>
//         <form onSubmit={onSubmitItems}>
//             <input
//              type="text"
//              autoComplete="off"
//              autoFocus
//              placeholder="Search movies"
//              name="search"
//             />
            

//             <button type="submit">
//                 search
//             </button>
//         </form>

//         <ul>
//         {movieItems.map(({title,name,id}) => (
//           <li key={id}>
//             <Link to={`/movies/${id}`}>{title || name}</Link>
//           </li>
//         ))}
//       </ul>
//         </>
    )
};

