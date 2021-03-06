import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [input, setInput] = useState('');

    const handleSubmit=(e)=>{
e.preventDefault();
if (input.trim().length>0) {
    
    setCategories(cats=>[input,...cats]);
    setInput('');
}
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Escribe cualquier cosa'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
           
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired
}