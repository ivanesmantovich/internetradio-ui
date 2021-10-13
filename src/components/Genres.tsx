import { FC } from 'react';
import { GenreProps } from '../interfaces/GenreProps';

interface GenresProps {
	genres: GenreProps[];
}

export const Genres: FC<GenresProps> = ({ genres }) => {
	return (
		<div className="genres">
			{/* {genres.map((genre, id) => {
				let newGenre = document.createElement('a');
				newGenre.href = '/';
				newGenre.className = 'genre btn btn-light';
				newGenre.textContent = genre.genre;
				if (id < 10) newGenre.className += 'btn-lg';
				if (id > 10 && id < 20) newGenre.className += 'btn-md';
				if (id > 20) newGenre.className += 'btn-sm';
				newGenre.id = id.toString(); // Возможно изменить или убрать
				return newGenre;
			})} */}
            {genres.map((genre, id) => {
				let href = '/';
				let className = 'genre btn btn-light';
				let textContent = genre.genre;
				if (id < 10) className += ' btn-lg';
				if (id >= 10 && id < 20) className += ' btn-md';
				if (id >= 20) className += ' btn-sm';
				let key = id.toString(); // Возможно изменить или убрать
				return <a href={href} className={className} key={key}>{textContent}</a>;
			})}
		</div>
	);
};
