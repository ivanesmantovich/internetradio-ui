import { FC } from 'react';

interface HeaderProps {
	title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<div className="header">
			<div className="headerIcon"><i className="fas fa-fire"></i></div><div className="headerTitle">{title}</div>
		</div>
	);
};