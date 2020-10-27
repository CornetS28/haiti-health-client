import React, { Component } from "react";

// Component
import TableForm from "../components/TableForm";
import patientsDataRows from "../components/patientsDataRows";
import Row from "../components/Row";

class ophtalmologyHome extends Component {
  render() {
    return (
      <TableForm
        departmentName="Ophtalmology"
        fullName="Patient's Name"
        age="Age"
        weight="Weight"
        issue="Issue"
        appointment="Appointment"
        listOfPatients={patientsDataRows.map((row) => (
          <Row key={row.patientName} row={row} />
        ))}
      />
    );
  }
}

export default ophtalmologyHome;

