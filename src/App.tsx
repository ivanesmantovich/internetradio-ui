import './App.css';
import { Genres } from './components/Genres';
import { Header } from './components/Header';
import { GenreProps } from './interfaces/GenreProps';

const genres: GenreProps[] = [];
genres.push(
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' },
	{ id: 1, genre: 'Pop' },
	{ id: 2, genre: 'Dance' },
	{ id: 3, genre: '80s' },
	{ id: 4, genre: 'Trance' }
);

function App() {
	return (
		<div className="App">
			<Header title={'Popular Genres'} />
			<Genres genres={genres} />
		</div>
	);
}

export default App;
