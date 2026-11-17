import { useRef } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import "../styles/auth.css";

const Login = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Bejelentkezés</h1>
          <p className="auth-description">
            Jelentkezz be a fiókodba és segíts a város tisztaságának
            fenntartásában!
          </p>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              {
                userNameRef.current?.value == "" ||
                passwordRef.current?.value == ""
                  ? toast.error("Kérlek töltsd ki az összes mezőt!")
                  : toast.success("Sikeres bejelentkezés!");
              }
            }}
          >
            <label>Felhasználónév</label>
            <FormControl
              className="auth-input"
              name="username"
              placeholder="tesztelek"
              ref={userNameRef}
              type="text"
            />
            <label>Jelszó</label>
            <FormControl
              className="auth-input"
              name="password"
              placeholder="Jelszó"
              ref={passwordRef}
              type="password"
            />
            <a href="register" className="auth-link">
              Még nincs fiókod? Regisztrálj!
            </a>
            <Button className="auth-button" variant="primary" type="submit">
              Belépés
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
