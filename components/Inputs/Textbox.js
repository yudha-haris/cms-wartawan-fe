import React, { useState } from 'react';

export default function Textbox({ id, placeholder, onInputChange }) {

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
                    self-stretch w-full font-body
                    block p-3 text-lg text-gray-900 bg-gray-50 rounded-md border-2 border-gray-400 
                    focus:border-2 focus:border-blue-600"
                placeholder={placeholder}
                rows={4}
                value={inputValue}
                onChange={handleInputChange}>
            </textarea>
        </div>
    );
}