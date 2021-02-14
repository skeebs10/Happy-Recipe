import React from 'react';
import Button from '../Components/Buttons';
import '../scss/Components/Form.scss';

///Top Of Home Page Form to Search Recipes

const Form = ({ getRecipe }) => (
    // using getRecipe prop from Home index.js file
    <form onSubmit={getRecipe} style={{ marginBottom: '2rem' }}>
        <input className="Form__input" type="text" name="recipeName" />
        {/* Passed from Button Component    */}
        <Button title="Search" type="submit" />

    </form>
);

export default Form;
