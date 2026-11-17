import { useRef } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";

const Register = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordAgainRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Regisztráció</h1>
          <p className="auth-description">
            Hozz létre egy fiókot, hogy segíthess a város tisztaságának
            fenntartásáért!
          </p>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              {
                userNameRef.current?.value == "" ||
                emailRef.current?.value == "" ||
                passwordRef.current?.value == "" ||
                passwordAgainRef.current?.value == ""
                  ? toast.error("Kérlek töltsd ki az összes mezőt!")
                  : passwordRef.current!.value ==
                      passwordAgainRef.current!.value
                    ? toast.success("Sikeres regisztráció!")
                    : toast.error("A jelszavak nem egyeznek!");
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
            <label>E-mail cím</label>
            <FormControl
              className="auth-input"
              name="email"
              placeholder="tesztelek@email.com"
              ref={emailRef}
              type="text"
            />
            <label>Jelszó</label>
            <FormControl
              className="auth-input"
              name="password"
              placeholder="jelszó"
              ref={passwordRef}
              type="password"
            />
            <label>Jelszó újra</label>
            <FormControl
              className="auth-input"
              name="passwordAgain"
              placeholder="jelszó újra"
              ref={passwordAgainRef}
              type="password"
            />
            <Button className="auth-button" variant="primary" type="submit">
              Regisztráció
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Register;
