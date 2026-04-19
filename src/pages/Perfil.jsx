import "../styles/perfil.css";

export default function Perfil() {
  return (
    <main className="container">
        <div className="main-body">

            {/* contenedor  */}
            <div className="row">
                {/* primer subcontenedor*/}
                <section className="col left">
                    <div className="card">
                        <div className="card-body center">
                            <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="avatar"
                            className="avatar"
                            />
                            <h4>John Doe</h4>
                            <p>Full Stack Developer</p>
                            <p className="muted">San Francisco</p>
                            <button className="btn primary">Follow</button>
                            <button className="btn outline">Message</button>
                        </div>
                    </div>
                    {/* segundo subcontenedor*/}
                    <div className="card">
                        <ul className="list">
                            <li><strong>Website:</strong> bootdey.com</li>
                            <li><strong>Github:</strong> bootdey</li>
                            <li><strong>Twitter:</strong> @bootdey</li>
                            <li><strong>Instagram:</strong> bootdey</li>
                        </ul>
                    </div>
                </section>

                {/* Contenedor a la derecha */}
                <section className="col right">
                    <div className="card">
                        <div className="card-body">
                            <div className="info"><strong>Name:</strong> Kenneth</div>
                            <div className="info"><strong>Email:</strong> test@mail.com</div>
                            <div className="info"><strong>Phone:</strong> 999999999</div>
                            <div className="info"><strong>Address:</strong> Perú</div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h4>Skills</h4>

                            <div className="progress">
                            <span>Web Design</span>
                            <div className="bar"><div style={{width: "80%"}} /></div>
                            </div>

                            <div className="progress">
                            <span>React</span>
                            <div className="bar"><div style={{width: "70%"}} /></div>
                            </div>

                            <div className="progress">
                            <span>Backend</span>
                            <div className="bar"><div style={{width: "60%"}} /></div>
                            </div>

                        </div>
                    </div>

                </section>
            </div>

        </div>
    </main>
  );
}