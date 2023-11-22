function Table() {
  let iaqTitles = [
    "Temperature",
    "Humidity",
    "CO2",
    "TVOC",
    "PM2_5",
    "PM10",
    "Pressure",
    "Score",
    "Date",
  ];
  let dummyData1 = [
    "22 C",
    "70 %",
    "760 PPM",
    "20 PPM",
    "12 PPM",
    "12 PPM",
    "1000 Ps",
    "88",
    "10/07/2023",
  ];
  let dummyData2 = [
    "22 C",
    "70 %",
    "760 PPM",
    "20 PPM",
    "12 PPM",
    "12 PPM",
    "1000 Ps",
    "88",
    "10/07/2023",
  ];
  let dummyData3 = [
    "22 C",
    "70 %",
    "760 PPM",
    "20 PPM",
    "12 PPM",
    "12 PPM",
    "1000 Ps",
    "88",
    "10/07/2023",
  ];
  let dummyDataRows = [dummyData1, dummyData2, dummyData3];
  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <tbody>
          <tr>
            {iaqTitles.map((title: string, index: any) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
          {dummyDataRows.map((row: any, index: any) => (
            <tr key={index}>
              {row.map((cell: string, index: any) => (
                <td>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
