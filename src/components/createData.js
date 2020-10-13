
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
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3,
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1,
      },
    ],
  };
};
export default createData;
