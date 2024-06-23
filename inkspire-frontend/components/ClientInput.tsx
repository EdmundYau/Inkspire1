"use client";

import React, { useState, ChangeEvent } from 'react';

export default function ClientInput() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);  // Correctly set the state using the value from the event target

        console.log(inputValue);
    };
  
  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Type some text"
    />
  );
};

