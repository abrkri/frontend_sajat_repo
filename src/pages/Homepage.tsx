import { Button } from "react-bootstrap";
import "../styles/hpstyle.css";
const Homepage = () => {
  return (
    <>
      <div className="homepage">
        <div className="hero">
          <h1>Szól a Város</h1>
          <p className="subtitle">Tegyünk együtt egy élhetőbb városért!</p>
          <p className="description">
            Jelentsd be egyszerűen a környezetedben tapasztalt közterületi
            problémákat! Küldj fényképet, add meg a helyszínt, és kövesd nyomon
            a bejelentésed állapotát.
          </p>
          <Button className="hero-button" href="/login">
            Segíts a városnak
          </Button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
