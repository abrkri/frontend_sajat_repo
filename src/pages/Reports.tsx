import { useEffect, useState } from "react";
import type { UserReport } from "../types/Report";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import NotFound from "./NotFound";
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
    <>
      {reports.length > 0 ? (
        <>
          <h1>Reports</h1>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Reports;
