import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './FAQ.css';

const FAQ = () => {
    return (
        <div className="container my-5">
            <h2 className="mb-4">Najczęściej zadawane pytania</h2>
            <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Czy orteza powinna być ciasno dopasowana?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Orteza powinna być dopasowana na tyle, aby zapewnić wsparcie, ale nie na tyle ciasno, aby powodować dyskomfort lub ograniczać krążenie krwi. Użytkownik powinien czuć się komfortowo i nie odczuwać bólu.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Jak długo należy nosić ortezę każdego dnia?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            Czas noszenia ortezy zależy od zaleceń lekarza oraz specyfiki urazu lub schorzenia. Zazwyczaj należy nosić ją przez określony czas każdego dnia, ale dokładne wytyczne powinny być dostosowane indywidualnie.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Czy mogę nosić ortezę podczas snu?
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            W zależności od rodzaju ortezy i zaleceń lekarza, może być konieczne noszenie ortezy także podczas snu. Należy postępować zgodnie z instrukcjami dostarczonymi przez specjalistę.
                        </div>
                    </div>
                </div>
                {/* DODATKOWE PYTANIA */}
            </div>
        </div>
    );
}

export default FAQ;
