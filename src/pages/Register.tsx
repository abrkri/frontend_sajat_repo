import { useRef, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import type { User } from "../types/User";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const passwordAgainRef = useRef<HTMLInputElement>(null);

  const registerUser = () => {
    {
      datas.name == "" ||
      datas.email == "" ||
      datas.password == "" ||
      passwordAgainRef.current?.value == ""
        ? toast.error("Kérlek töltsd ki az összes mezőt!")
        : datas.password == passwordAgainRef.current!.value
          ? apiClient
              .post("/register", datas)
              .then(() => {
                navigate("/reports");
              })
              .catch((error) => {
                console.log(datas);
                console.log(error);
                toast.error(
                  "Hiba történt a regisztráció során: " + error.message,
                );
              })
          : toast.error("A jelszavak nem egyeznek!");
    }
  };
  return (
    <>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Regisztráció</h1>
          <p className="auth-description">
            Hozz létre egy fiókot, hogy segíthess a város tisztaságának
            fenntartásáért!
          </p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <label>Felhasználónév</label>
            <FormControl
              className="auth-input"
              name="username"
              placeholder="tesztelek"
              onChange={(e) => setDatas({ ...datas, name: e.target.value })}
              type="text"
            />
            <label>E-mail cím</label>
            <FormControl
              className="auth-input"
              name="email"
              placeholder="tesztelek@email.com"
              onChange={(e) => setDatas({ ...datas, email: e.target.value })}
              type="text"
            />
            <label>Jelszó</label>
            <FormControl
              className="auth-input"
              name="password"
              placeholder="jelszó"
              onChange={(e) => setDatas({ ...datas, password: e.target.value })}
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
            <Button
              className="auth-button"
              variant="primary"
              onClick={registerUser}
              type="submit"
            >
              Regisztráció
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Register;
