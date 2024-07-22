import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpandableButtonGrid.css';
import ReactMarkdown from 'react-markdown';

const ExpandableButton = ({ text, options, onOptionClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="expandable-button-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="btn btn-primary bg-primary mb-3 w-auto mx-3">
                {text}
            </button>
            {isHovered && (
                <div className="expandable-content">
                    <ul>
                        {options.map((option, index) => (
                            <li key={index}>
                                <a href="#" onClick={(e) => { e.preventDefault(); onOptionClick(option); }}>
                                    {option.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const ExpandableButtonGrid = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [content, setContent] = useState('');

    // Mapowanie plików Markdown do ścieżek w folderze public/docs
    const markdownFilePaths = {
        'Orteza nadgarstka': '/docs/orteza-nadgarstka.md',
        'Orteza łokcia': '/docs/orteza-lokcia.md',
        'Orteza barku': '/docs/orteza-barku.md',
        'Orteza dłoni i palca': '/docs/orteza-dloni-i-palca.md',
        'Orteza kolana': '/docs/orteza-kolana.md',
        'Orteza kostki': '/docs/orteza-kostki.md',
        'Orteza stopy': '/docs/orteza-stopy.md',
        'Orteza biodra': '/docs/orteza-biodra.md',
        'Orteza lędźwiowa': '/docs/orteza-ledzwiowa.md',
        'Orteza piersiowa': '/docs/orteza-piersiowa.md',
        'Orteza szyjna': '/docs/orteza-szyjna.md',
        'Orteza przepuklinowa': '/docs/orteza-przepuklinowa.md',
        'Gorset ortopedyczny': '/docs/gorset-ortopedyczny.md',
        'Orteza klatki piersiowej': '/docs/orteza-klatki-piersiowej.md',
        'Opaska rozgrzewająca': '/docs/opaska-rozgrzewajaca.md',
        'Orteza na zimno': '/docs/orteza-na-zimno.md',
        'Poduszka termiczna': '/docs/poduszka-termiczna.md'
    };

    // Obsługuje kliknięcie opcji
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        fetchMarkdownContent(markdownFilePaths[option.text]);
    };

    // Funkcja do pobierania zawartości pliku Markdown
    const fetchMarkdownContent = async (filePath) => {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error('Network response was not ok.');
            const text = await response.text();
            setContent(text);
        } catch (error) {
            console.error('Error fetching Markdown file:', error);
            setContent('Error loading content.');
        }
    };

    const buttonsData = [
        {
            text: 'Ortezy kończyny górnej',
            options: [
                { text: 'Orteza nadgarstka' },
                { text: 'Orteza łokcia' },
                { text: 'Orteza barku' },
                { text: 'Orteza dłoni i palca' }
            ]
        },
        {
            text: 'Ortezy kończyny dolnej',
            options: [
                { text: 'Orteza kolana' },
                { text: 'Orteza kostki' },
                { text: 'Orteza stopy' },
                { text: 'Orteza biodra' }
            ]
        },
        {
            text: 'Ortezy kręgosłupa',
            options: [
                { text: 'Orteza lędźwiowa' },
                { text: 'Orteza piersiowa' },
                { text: 'Orteza szyjna' }
            ]
        }
    ];

    return (
        <div className="expandable-grid-container">
            <div className="row">
                {buttonsData.map((button, index) => (
                    <div className="col-auto mb-2 mx-auto" key={index}>
                        <ExpandableButton
                            text={button.text}
                            options={button.options}
                            onOptionClick={handleOptionClick}
                        />
                    </div>
                ))}
            </div>
            {selectedOption && (
                <div className="popup-window">
                    <div className="popup-content">
                        <ReactMarkdown>{content}</ReactMarkdown>
                        <button className="btn btn-secondary" onClick={() => setSelectedOption(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpandableButtonGrid;
