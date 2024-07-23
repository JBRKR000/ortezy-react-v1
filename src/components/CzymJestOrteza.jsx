import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CzymJestOrteza.css';
import { useInView } from 'react-intersection-observer';

const CzymJestOrteza = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    const addNonBreakingSpaces = (text) => {
        const conjunctions = [' i ', ' oraz ', ' lub ', ' lecz ', ' ale ', ' ma '];
        let processedText = text;
        conjunctions.forEach(conjunction => {
            const regex = new RegExp(conjunction, 'g');
            processedText = processedText.replace(regex, conjunction.trim() + '&nbsp;');
        });
        return processedText;
    };

    const text = `Orteza to zaawansowane urządzenie ortopedyczne, zaprojektowane w celu zapewnienia wsparcia, stabilizacji oraz korekcji ruchu określonych części ciała.
                            Jest to niezwykle użyteczne narzędzie terapeutyczne, mające szerokie zastosowanie w profilaktyce oraz rehabilitacji.
                            Ortezy są projektowane z myślą o różnych celach terapeutycznych. Mogą służyć jako środek zapobiegawczy, redukując ryzyko urazów poprzez wspieranie naturalnych funkcji ciała.
                            Jednocześnie są nieocenione w procesie rehabilitacji po urazach, gdzie ich głównym zadaniem jest przywracanie funkcji i stabilizacji dotkniętych obszarów.
                            Te urządzenia ortopedyczne mogą być wykonane z różnorodnych materiałów, takich jak tworzywa sztuczne, metal czy elastyczne tkaniny.
                            Każdy rodzaj ortezy ma specyficzne zastosowanie i jest dostosowany do indywidualnych potrzeb pacjenta oraz rodzaju uszkodzenia, które ma wspierać.`;

    return (
        <section className={`about-section text-left ${isVisible ? 'visible' : ''}`} id="about" ref={ref}>
            <div className="container">
                <div className="row gx-4 gx-lg-4 justify-content-left">
                    <div className="col-lg-7">
                        <h2 className="text-white mb-3">Czym jest orteza?</h2>
                        <p className="text-white text-justify" dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces(text) }}>

                        </p>
                    </div>
                    <div className="col-lg-5">
                        <div className="text-white mt-lg-1 mt-4 text-justify" >
                            <h3 className="mb-3">Ortezy korekcyjne:</h3>
                            <ul>
                                <li>Ortezy korekcyjne są projektowane w celu korekcji wad postawy lub deformacji.
                                    Przykłady obejmują ortezę na haluksy, która koryguje paluch koślawy,
                                    lub ortezę korekcyjną kręgosłupa,
                                    która pomaga w leczeniu skrzywienia kręgosłupa.</li>
                            </ul>
                            <h3 className="mb-3">Ortezy stabilizujące:</h3>
                            <ul>
                                <li>Ortezy stabilizujące zapewniają wsparcie i stabilizację dla uszkodzonego lub osłabionego stawu lub segmentu ciała.
                                    Przykłady to ortezy na stawy kolanowe lub na nadgarstki, które zapobiegają niepożądanym ruchom stawów i redukują ryzyko dalszych urazów.</li>
                            </ul>
                            <h3 className="mb-3">Ortezy kompresyjne:</h3>
                            <ul>
                                <li>
                                    Ortezy kompresyjne są wykonane z elastycznych materiałów, które wywierają ciśnienie
                                    na określoną część ciała. Mają na celu poprawę krążenia krwi, zmniejszenie obrzęków
                                    oraz wspomaganie regeneracji tkanek. Przykłady obejmują kompresyjne ortezy na nogi
                                    stosowane w terapii żylaków.
                                    <br/><br/><br/><br/><br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CzymJestOrteza;
