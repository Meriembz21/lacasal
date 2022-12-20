const Mainapropos = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row description text-center" >
                    <div className="idyllique col-md-4" >
                        <h3>Un Cadre Idyllique</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolores natus. Qui harum aliquid ab ratione quasi numquam esse assumenda obcaecati alias! Soluta quasi, labore ducimus voluptatem deleniti iusto dolorum?</p>
                        <a href="" className="btnapropos">À PROPOS</a>
                    </div>
                    <div className="imgpiscine col-md-12">
                        <img src="assets/img/main1.jpeg" alt="piscine" />
                        <div className="row ">
                            <div className="col-4 w-50" >
                                <img src="assets/img/main4.jpeg" className="col-md-4" alt="jardin" />
                            </div>
                            <div className="col-4 w-50" >
                                <img src="assets/img/new sculture cheval.jpg" className="col-md-4" alt="cheval" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Mainapropos;