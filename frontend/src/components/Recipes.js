import React from 'react';


const Recipes = () => {
    const location = useLocation();
    const search = location.search;
    const query = new URLSearchParams(search);
    return (
    <h2>
        Recipes from category: {query.get('sorting')}
    </h2>
    );
}

export default Recipes;