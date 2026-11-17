import { Card } from "react-bootstrap";
import type { UserReport } from "../types/Report";
import { BACKEND_URL } from "../api/apiClient";

const GenerateReportCard = (report: UserReport) => {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={`${BACKEND_URL}/images/${report.img_path}`}
        />
        <Card.Body>
          <Card.Title>{report.title}</Card.Title>
          <Card.Text>
            <p>{report.description}</p>
            <p>
              {report.street} {report.house_number}
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>{report.created_at.getDate()}</Card.Footer>
      </Card>
    </>
  );
};

export default GenerateReportCard;
