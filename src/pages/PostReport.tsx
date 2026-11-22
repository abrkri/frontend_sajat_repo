import { Button, Form, FormControl } from "react-bootstrap";
import "../styles/postrep.css";
import { toast } from "react-toastify";
import type { UserReport } from "../types/UserReport";
import apiClient from "../api/apiClient";
import { useNavigate } from "react-router-dom";

const PostReport = () => {
  const navigate = useNavigate();
  const submitReport = () => {
    var formData = new FormData(
      document.getElementById("report-form")! as HTMLFormElement,
    );
    const newReport = {
      ...Object.fromEntries(formData.entries()),
      house_number: Number(formData.get("house_number")),
      user_id: 1,
    } as UserReport;

    apiClient
      .post("/reports", newReport)
      .then(() => {
        toast.success("A bejelentésed sikeresen elküldve!");
        navigate("/reports");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Hiba történt a bejelentés elküldése közben!", {
          autoClose: false,
        });
      });
  };
  return (
    <div className="report-page">
      <div className="report-card">
        <h1>Bejelentés beküldése</h1>
        <p className="report-description">
          Kérünk, hogy figyelmesen töltsd ki az összes mezőt, és csatolj egy
          fényképet a problémáról. A bejelentésedet a város illetékes szervei
          fogják feldolgozni.
        </p>

        <Form
          id="report-form"
          onSubmit={(e) => {
            e.preventDefault();
            submitReport();
          }}
        >
          <label>Kép</label>
          <FormControl
            required
            name="img_path"
            type="string"
            accept="image/*"
            className="report-input"
          />

          <label>Cím</label>
          <FormControl name="title" type="text" className="report-input" />

          <label>Kategória</label>
          <FormControl
            required
            name="category"
            type="text"
            className="report-input"
          />

          <label>Leírás</label>
          <FormControl
            required
            name="description"
            as="textarea"
            rows={5}
            className="report-input"
          />

          <label>Utca</label>
          <FormControl name="street" type="text" className="report-input" />

          <label>Házszám</label>
          <FormControl
            required
            name="house_number"
            type="number"
            className="report-input"
          />

          <Button
            variant="primary"
            type="submit"
            className="post-report-submit"
          >
            Beküldés
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostReport;
