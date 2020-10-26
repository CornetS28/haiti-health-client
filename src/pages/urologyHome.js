import React, { Component } from 'react';
import TableForm from '../components/TableForm';
import patientsDataRows from "../components/patientsDataRows";
import Row from "../components/Row";

export class UrologyHome extends Component {

  render() {
    return (
      <TableForm
        departmentName="Urology"
        fullName="Patient's Name"
        age="Age"
        weight="Weight"
        issue="Issue"
        appointment="Appoitment"
        listOfPatients={patientsDataRows.map((row) => (
          <Row key={row.patientName} row={row} />
        ))}
      />
    );
  }
}

export default UrologyHome;
