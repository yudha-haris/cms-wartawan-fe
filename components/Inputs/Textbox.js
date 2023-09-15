import React, { useState } from 'react';

export default function Textbox({id, placeholder, onInputChange}) {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onInputChange(newValue); // Pass the new value to the parent component
    };
    
    return (
        <main className="flex flex-col content-start self-stretch place-items-start">
            <textarea 
                id={id}
                className="
                    self-stretch
                    block p-3 w-full text-lg text-gray-900 bg-gray-50 rounded-md border border-gray-300 
                    focus:border-2 focus:border-blue-500"
                    
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}>    

            </textarea>
        </main>
    );
}