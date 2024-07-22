import React from 'react';
import './PoCoStosujemy.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const PoCoStosujemy = () => {
    return (
            <div className="container px-4 px-lg-4">
                <div className="row gx-4 gx-lg-4 justify-content-left">
                    <div className="col-lg-8">
                        <h2 className="text-dark mb-4">Po co stosujemy ortezy?</h2>
                        <p className="text-black">
                             Kontuzje są powszechne i mogą dotknąć każdego, od sportowców trenujących, po osoby starsze
                            wykonujące codzienne czynności. Czasem urazy te są na tyle poważne, że potrzebne jest
                            tymczasowe usztywnienie, na przykład za pomocą ortez i stabilizatorów. Niezależnie od tego,
                            czy jest to wynik intensywnej aktywności fizycznej, upadku, czy zwykłych czynności domowych,
                            odpowiednie wsparcie medyczne jest kluczowe dla szybkiego powrotu do zdrowia. Ortezy i
                            stabilizatory pomagają nie tylko w stabilizacji uszkodzonego obszaru, ale także w redukcji
                            bólu i zapobieganiu dalszym urazom.
                        </p>
                    </div>
                    <div className="col-lg-4 d-flex align-items-start justify-content-end ">
                        <Link to="/rodzaje-ortez" className="btn btn-outline-primary align-self-start my-lg-5 btn-lg" href="">Wybierz ortezę</Link>
                    </div>
                </div>
            </div>
    );
}

export default PoCoStosujemy;
