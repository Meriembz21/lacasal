const Mainroom = () => {
    return (
        // J'ai utiliser une div fanôme.
        <>
            <section id="main">
                <div className="roomext ">
                    <img src="assets/img/exterieur chambre.jpeg" alt="photo des chambres de l'exterieur" />
                </div>
                <div className="mainroom ">
                    <h2>Profitez de nos belles chambres d'hôtes <br /> & <br /> La Churrasqueira près de Fátima</h2>
                    <p>Cette villa neuve éco-conçue offres 2 belles suites independantes, <br /> confortables et très lumineuses, à l’écart de toutes agitation,  avec les champs d’oliviers pour seul voisins. <br /> Ouvert toute l’année, la Casal Da Loureira vous accueille en toute saison pour des séjours et vacances en famille, <br /> en couple ou entre amis en proposant la location de 2 belles suites ainsi ue La Churrasqueira.</p>
                </div>

                <div className="container">
                    <div className="item">
                        <div className="pictureone">
                            <img src="assets/img/olivier chambre 2c Petite.jpg" alt="chambre olivier" />
                        </div>
                        <div className="picturetwo">
                            <img src="assets/img/sdd l'olivier.webp" alt="salle de bain olivier" />
                        </div>
                        <div className="picturethree">
                            <img src="assets/img/chambre l'Olivier salle de douche 2 .jpeg" alt="salle de bain olivier" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="roomolivier">
                            <h3>Chambre L'Olivier</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa impedit sint enim quia tenetur vero illum aspernatur obcaecati ab! Vitae nihil quis ad excepturi praesentium dolorum laudantium debitis, dolor voluptas blanditiis placeat, perferendis magnam inventore.</p>
                        <a href="#" className="b1">RESERVATIONS</a>
                    </div>
                </div>
                <div className="container">
                    <div className="item">
                        <div className="pictureone">
                            <img src="assets/img/chambre Chêne.jpeg" alt="chambre le Chêne" />
                        </div>
                        <div className="picturetwo">
                            <img src="assets/img/Chambre 2 salle de douche.webp" alt="photo 2 de la chambre" />
                        </div>
                        <div className="picturethree">
                            <img src="assets/img/Casal sdd chêne.webp" alt="salle de douche le Chêne" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="roomchene">
                            <h3>Chambre Le Chêne</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, totam odit nesciunt optio, esse possimus dolore modi sed laudantium, soluta commodi. Nisi quasi, facilis animi ut repellendus unde voluptate itaque dolores, officia, magni in libero!</p>
                        <a href="#" className="b1">RESERVATIONS</a>
                    </div>
                </div>
            </section>
            <section id="churrasqueira">
                <div className="hause">
                    <h3>La Churrasqueira</h3>
                    <p>Envie de cuisiner ? De partager des moments conviviauxen famille ou entre mie? <br /> Nous mettons a vôtre disposition cette maisonnettepourvue d’une cuisineéquipée et d’une salle d’eau independante donnant vers l’exterieur. <br /> Vous pouvez ainsi laisser libre cours a vos envies de petits plats maiso, ou barbecue, <br /> vous retrouver autour d’une grande tablée ou bien encore prolonger une soirée festive ou douillette au coin du feu.</p>
                </div>
                <div className="container">
                    <div className="item">
                        <div className="pictureseven">
                            <img src="assets/img/Churrasqueira.jpeg" alt="photo churrasqueira" />
                        </div>
                        <div className="pictureeight">
                            <img src="assets/img/carousel5.jpg" alt="photo2 churrasqueira2" />
                        </div>
                    </div>
                    <div className="item">
                        <div className="pictureeleven">
                            <img src="assets/img/Casal Churra.jpeg" alt="interieur Churrasqueira" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Mainroom;