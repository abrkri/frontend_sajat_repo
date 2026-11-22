import { useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import { toast } from "react-toastify";
import "../styles/auth.css";
import type { UserLogin } from "../types/UserLogin";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<UserLogin>({
    name: "",
    password: "",
  });

  const loginUser = (datas: UserLogin) => {
    if (datas.name == "" || datas.password == "") {
      toast.error("Kérlek töltsd ki az összes mezőt!");
      return;
    }

    apiClient
      .get("/login", { params: datas })
      .then((response) => {
        const user = response.data;

        if (user.error) {
          toast.error("Hibás felhasználónév vagy jelszó!");
        } else {
          navigate("/reports");
        }
      })
      .catch((error) => {
        toast.error("Hiba történt a bejelentkezés során: " + error.message);
      });
  };

  return (
    <>
      <div className="auth-page">
        <div className="auth-card">
          <h1>Bejelentkezés</h1>
          <p className="auth-description">
            Jelentkezz be a fiókodba és segíts a város tisztaságának
            fenntartásában!
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
            <label>Jelszó</label>
            <FormControl
              className="auth-input"
              name="password"
              placeholder="Jelszó"
              onChange={(e) => setDatas({ ...datas, password: e.target.value })}
              type="password"
            />
            <a href="register" className="auth-link">
              Még nincs fiókod? Regisztrálj!
            </a>
            <Button
              className="auth-button"
              variant="primary"
              type="submit"
              onClick={() => loginUser(datas)}
            >
              Belépés
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
export default Login;
