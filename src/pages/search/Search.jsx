import React, { useState } from 'react';
import Navbar from '../../ui/Navbar';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const Search = () => {
	const [query, setQuery] = useState('a'); // If set an empty query, search results will be empty

	// set handler to update query state from SearchBar form data
	const queryHandler = input => {
		setQuery(input.length > 0 ? input : 'a');
	}

	return (
		<>
			<Navbar />
			<SearchBar onQuery={queryHandler} />
			<SearchResults query={query} />
		</>
	);
};

export default Search;
