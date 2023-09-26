import React, { useState } from 'react';

export default function Textbox({id, placeholder, onInputChange}) {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        onInputChange(newValue);
    };
    
    return (
        <div className="flex flex-col content-start self-stretch place-items-start">
            <textarea 
                id={id}
                className="
                    self-stretch w-full
                    block p-3 text-lg text-gray-900 bg-gray-50 rounded-md border border-gray-300 
                    focus:border-2 focus:border-blue-500"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}>    
            </textarea>
        </div>
    );
}