import { Button, Form, FormControl } from "react-bootstrap";
import "../styles/postrep.css";
import { toast } from "react-toastify";

const PostReport = () => {
  const submitReport = () => {
    toast.success("A bejelentésed sikeresen elküldve!");
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
          onSubmit={(e) => {
            e.preventDefault();
            submitReport();
          }}
        >
          <label>Kép</label>
          <FormControl
            name="img_path"
            type="file"
            accept="image/*"
            className="report-input"
          />

          <label>Cím</label>
          <FormControl name="title" type="text" className="report-input" />

          <label>Leírás</label>
          <FormControl
            name="description"
            as="textarea"
            rows={5}
            className="report-input"
          />

          <label>Utca</label>
          <FormControl name="street" type="text" className="report-input" />

          <label>Házszám</label>
          <FormControl
            name="house_number"
            type="text"
            className="report-input"
          />

          <Button variant="primary" type="submit" className="report-button">
            Beküldés
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default PostReport;
