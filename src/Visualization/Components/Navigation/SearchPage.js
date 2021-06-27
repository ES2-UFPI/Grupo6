import React, { useEffect } from 'react';
import ProductPreview from './ProductPreview';
import ProductLogic from '../../../Logic/ProductLogic';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
    const query = new URLSearchParams(useLocation().search);
    const searchTerm = query.get('search_term');
    const page = query.get('page');

    

};

export default SearchPage;