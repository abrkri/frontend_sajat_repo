import { Card, Col } from "react-bootstrap";
import type { UserReport } from "../types/UserReport";
import { BACKEND_URL } from "../api/apiClient";
import "../styles/rep.css";

const GenerateReportCard = (report: UserReport) => {
  return (
    <Col xs={12} sm={6} lg={4} xl={3} className="report-col">
      <Card className="report-list-card">
        <Card.Img
          variant="top"
          src={`${BACKEND_URL}/images/${report.img_path}`}
          className="report-list-image"
        />

        <Card.Body>
          <Card.Title>{report.title}</Card.Title>

          <div className="card-text">
            <p>{report.description}</p>
            <p className="report-address">
              {report.street} {report.house_number}
            </p>
          </div>
        </Card.Body>

        <Card.Footer className="report-footer">
          <div className="card-text">
            <p style={{ float: "left" }}>{report.created_at?.toString()}</p>
            <p style={{ float: "right" }}>posted by:</p>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default GenerateReportCard;
