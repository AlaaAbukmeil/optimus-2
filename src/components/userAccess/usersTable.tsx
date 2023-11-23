function Table() {
  let iaqTitles = ["Email Address", "Username", "User Role", "Phone Number"];
  let dummyData1 = [
    "raymond@powerworkplace.com",
    "Raymond",
    "Admin",
    "xxx xxxx xxxx",
  ];
  let dummyData2 = [
    "alan@powerworkplace.com",
    "Alan",
    "Admin",
    "xxx xxxx xxxx",
  ];
  let dummyData3 = [
    "frankie@powerworkplace.com",
    "Frankie",
    "Admin",
    "xxx xxxx xxxx",
  ];
  let dummyDataRows = [dummyData1, dummyData2, dummyData3];
  return (
    <div className="table-responsive user-access-table-container">
      <table className="table table-hover">
        <tbody>
          <tr>
            {iaqTitles.map((title: string, index: any) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
          {dummyDataRows.map((row: any, index: any) => (
            <tr key={index}>
              {row.map((cell: string, index: any) =>
                index == 2 ? (
                  <td>
                    <select title="area" className="search-input" required>
                      <option value="hk">{cell}</option>
                      <option value="sg">{"User"}</option>
                    </select>
                  </td>
                ) : (
                  <td>{cell}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
