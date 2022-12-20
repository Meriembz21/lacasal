const Main = () => {
    return (
        <section>
            <div className="container text-center">
                <div className="row titlerooms">
                    <h2>NOS CHAMBRES D'HOTES & LA CHURRASQUEIRA</h2>
                    <p>Découvrez nos chambres vue sur notre jardin arboré <br />La Churrasqueira avec vue sur la piscine et terrain arboré  </p>
                </div>
            </div>
            <div className="container text-center">
                <div className="row rooms">
                    <div className="lolivier col-sm-6">
                        <img src="assets/img/Casal chambre l'olivier.jpeg" alt="L'oliver" />
                        <h4>L'Olivier</h4>
                        <p>Chambre avec deux lits simples et<br />sa salle de douche privative vue sur le jardin</p>
                        <a href="#" className="btn">voir +</a>
                    </div>
                    <div className="lechene col-sm-6">
                        <img src="assets/img/chambre Chêne.jpeg" alt="Le chêne" />
                        <h4>Le Chêne</h4>
                        <p>Chambre double et<br />sa salle de douche privative vue sur le jardin</p>
                        <a href="#" className="btn">voir +</a>
                    </div>
                    <div className="churrasqueira col-sm-12">
                        <img src="assets/img/Churrasqueira.jpeg" alt="LaChurrasqueira" />
                        <h4>La Churrasqueira</h4>
                        <p>Maisonnette équiper d'une cuisine et<br />d'une salle d'eau indépentante vue sur la piscine</p>
                        <a href="#" className="btn">voir +</a>
                    </div>
                </div>
            </div>
            <div className="container information">
                <div className="row">
                    <div className="prestation col-ms-12 text-center">
                        <h2>NOS PRESTATIONS</h2>
                    </div>
                    <div className="row info">
                        <div className=" col-md-3 text-center ">
                            <img src="assets/img/loupe .png" alt="icon loupe" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint accusantium aliquid? Quasi, provident consequatur?</p>
                        </div>

                        <div className="col-md-3 text-center ">
                            <img src="assets/img/piscine.png" alt="icon loupe" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint accusantium aliquid? Quasi, provident consequatur?</p>
                        </div>
                        <div className="col-md-3 text-center ">
                            <img src="assets/img/wifi.png" alt="icon loupe" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint accusantium aliquid? Quasi, provident consequatur?</p>
                        </div>
                        <div className=" col-md-3 text-center ">
                            <img src="assets/img/services.png" alt="icon loupe" />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur sint accusantium aliquid? Quasi, provident consequatur?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid text-center">
                <div className="row reservation ">
                    <h4>RESERVERS MAINTENANT VOTRE SEJOUR </h4>
                    <a href="#" className=" col-md-3 btn">Reservations</a>
                    <img src="assets/img/reservation.jpeg" alt="photo piscine" />
                </div>
            </div>
        </section>
    )
}

export default Main;   