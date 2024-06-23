"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import Quill from 'quill';
import './Styles/quillStyles.css';
import 'quill/dist/quill.snow.css'; // for snow theme

const TextEditor = () => {
    const editorId = "quill-editor";  // Define a unique ID for the Quill editor container
    const [editorContent, setEditorContent] = useState("");

    useEffect(() => {
        // Retrieve stored content from local storage when the component mounts
        const storedContent = localStorage.getItem('editorContent');
        if (storedContent) setEditorContent(storedContent);

        const editorElement = document.getElementById(editorId);
        if (editorElement) {
            const quill = new Quill(editorElement, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        ['image', 'code-block']
                    ]
                },
                placeholder: 'Compose an epic...',
            });

            // Set the editor's content to the stored content
            if (storedContent) quill.root.innerHTML = storedContent;

            quill.on('text-change', () => {
                const text = quill.getText();  // Get plain text content
                setEditorContent(text);  // Update the state with the text content
            });

        }
    }, []); // The empty dependency array ensures this effect runs only once after the initial render

    useEffect(() => {
        // Store content in local storage whenever it changes
        localStorage.setItem('editorContent', editorContent);
    }, [editorContent]); // This effect runs every time editorContent changes

    return (
        <div id={editorId} style={{ height: '100%', backgroundColor: '#fff' }}  />
    );
};

export default TextEditor;
