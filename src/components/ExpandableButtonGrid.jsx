import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExpandableButtonGrid.css';

const ExpandableButton = ({ text, options, onOptionClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="expandable-button-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <button className="btn btn-primary bg-primary mb-3 w-100">
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

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const buttonsData = [
        { text: 'Ortezy kończyny górnej', options: [{ text: 'Orteza nadgarstka' }, { text: 'Orteza łokcia' }, { text: 'Orteza barku' }] },
        { text: 'Ortezy kończyny dolnej', options: [{ text: 'Orteza kolana' }, { text: 'Orteza kostki' }, { text: 'Orteza stopy' }] },
        { text: 'Ortezy kręgosłupa', options: [{ text: 'Orteza lędźwiowa' }, { text: 'Orteza piersiowa' }, { text: 'Orteza szyjna' }] },
        { text: 'Ortezy tułowia i przepuklinowe', options: [{ text: 'Orteza przepuklinowa' }, { text: 'Gorset ortopedyczny' }, { text: 'Orteza klatki piersiowej' }] },
        { text: 'Ortezy termiczne', options: [{ text: 'Opaska rozgrzewająca' }, { text: 'Orteza na zimno' }, { text: 'Poduszka termiczna' }] },
    ];

    return (
        <div className="expandable-grid-container">
            <div className="row">
                {buttonsData.map((button, index) => (
                    <div className="col-4 mb-3" key={index}>
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
                        <h4>{selectedOption.text}</h4>
                        <p>This is dynamic content for {selectedOption.text}.</p>
                        <button className="btn btn-secondary" onClick={() => setSelectedOption(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExpandableButtonGrid;
