import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../Styles/PageNavigation.css';

const PageNavigation = (props) => {
	return (
		<div className="page-navigation">
			<Link
				to={props.newPageLink + (props.currentPage - 1)}
				className={
					props.currentPage === 1
						? 'page-navigation-link disabled'
						: 'page-navigation-link'
				}
			>
				«
			</Link>
			{Array(props.numberOfPages)
				.fill(0)
				.map((_v, index) => {
					return (
						<Link
							to={props.newPageLink + (index + 1)}
							className={
								props.currentPage === index + 1
									? 'page-navigation-link disabled current-page'
									: 'page-navigation-link'
							}
							key={index}
						>
							{index + 1}
						</Link>
					);
				})}
			<Link
				to={props.newPageLink + (props.currentPage + 1)}
				className={
					props.currentPage === props.numberOfPages
						? 'page-navigation-link disabled'
						: 'page-navigation-link'
				}
			>
				»
			</Link>
		</div>
	);
};

PageNavigation.propTypes = {
	currentPage: PropTypes.number,
	numberOfPages: PropTypes.number,
	newPageLink: PropTypes.string,
};

export default PageNavigation;
