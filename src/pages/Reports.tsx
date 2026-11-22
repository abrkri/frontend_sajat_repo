import { useEffect, useState } from "react";
import type { UserReport } from "../types/UserReport";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import NotFound from "./NotFound";
import { Button, Row } from "react-bootstrap";
import GenerateReportCard from "../helper/GenerateReportCard";
import "../styles/rep.css";
const Reports = () => {
  const [reports, setReports] = useState<Array<UserReport>>([]);
  useEffect(() => {
    apiClient
      .get("/reports")
      .then((resp) => {
        setReports(resp.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Hiba történt a jelentések lekérése közben!", {
          autoClose: false,
        });
      });
  }, []);
  return (
    <div className="reports-page">
      {reports.length > 0 ? (
        <>
          <div className="reports-header">
            <h1>Bejelentések</h1>
            <Button className="report-button" href="/post-report">
              Bejelentés beküldése
            </Button>
          </div>

          <Row className="reports-row">
            {reports.map((report) => GenerateReportCard(report))}
          </Row>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Reports;
