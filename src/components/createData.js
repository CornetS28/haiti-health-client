
const createData = (patientName, age, weight, issue, appointment, price) => {
  return {
    patientName,
    age,
    weight,
    issue,
    appointment,
    price,
    history: [
      {
        appointmentDate: "Feb. 12th, 2011",
        treamtmentStatus: "Completed",
        lastDoctorName: "Pauline Hill",
        paymentStatus: '1334.45',
      },
      {
        appointmentDate: "Jan. 10th, 2011",
        treamtmentStatus: "Incompleted",
        lastDoctorName: "Carolina Brooks",
        paymentStatus: '122.23',
      },
      {
        appointmentDate: "Dec. 10th, 2010",
        treamtmentStatus: "Incompleted",
        lastDoctorName: "Carolina Brooks",
        paymentStatus: '0.00',
      },
    ],
  };
};
export default createData;
