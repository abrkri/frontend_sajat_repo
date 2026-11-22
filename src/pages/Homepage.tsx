import { Button } from "react-bootstrap";
import "../styles/hpstyle.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">Közösen egy élhetőbb városért</span>

          <h1>
            Szól a <span>Város</span>
          </h1>

          <p className="subtitle">Tegyünk együtt egy élhetőbb városért!</p>

          <p className="description">
            Jelentsd be egyszerűen a környezetedben tapasztalt közterületi
            problémákat! Küldj fényképet, add meg a helyszínt, és kövesd nyomon
            a bejelentésed állapotát.
          </p>

          <div className="hero-actions">
            <Button className="hero-button" href="/reports">
              Bejelentések megtekintése <span>→</span>
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <img src="szav.png" alt="Szól a Város" />
        </div>
      </section>

      <section className="features">
        <div className="section-heading">
          <span className="section-label">FUNKCIÓK</span>
          <h2>Minden egy helyen</h2>
          <p>
            A közterületi problémák bejelentése és nyomon követése egyszerűbb,
            mint valaha.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon location-icon">⌖</div>
            <h3>Pontos helyszín</h3>
            <p>
              Add meg a probléma pontos helyét, hogy az illetékesek könnyedén
              megtalálják.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon photo-icon">▧</div>
            <h3>Fényképes bejelentés</h3>
            <p>
              Csatolj fényképeket és részletes leírást, hogy egyértelműen
              bemutasd a problémát.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon tracking-icon">✓</div>
            <h3>Állapotkövetés</h3>
            <p>
              Kövesd nyomon bejelentéseid állapotát, és nézd meg, hol tart az
              ügyintézés.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="section-heading">
          <span className="section-label">HOGYAN MŰKÖDIK?</span>
          <h2>Három egyszerű lépés</h2>
          <p>
            Te jelzed a problémát, mi segítünk eljuttatni az illetékesekhez.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="step-number">01</div>
            <h3>Jelentsd be</h3>
            <p>
              Írd le a tapasztalt problémát, add meg a helyszínt, és csatolj
              fényképet.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Kövesd nyomon</h3>
            <p>
              Az illetékes munkatársak feldolgozzák és kezelik a bejelentésedet.
            </p>
          </div>

          <div className="step-connector"></div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Kész is</h3>
            <p>
              Kövesd figyelemmel a bejelentés állapotát egészen a probléma
              megoldásáig.
            </p>
          </div>
        </div>
      </section>

      <section className="bottom-cta">
        <div>
          <h2>Te is tehetsz a városodért!</h2>
          <p>
            Egy bejelentés is közelebb vihet egy tisztább, rendezettebb
            környezethez.
          </p>
        </div>

        <Button href="/login" className="cta-button">
          Belépés →
        </Button>
      </section>
    </div>
  );
};

export default Homepage;
