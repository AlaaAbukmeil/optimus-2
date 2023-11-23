import NavBar from "../../common/navbar";
import Table from "./usersTable";

import { useState } from "react";

function UsersAccess() {
  let [data, setData] = useState("");

  return (
    <div>
      <NavBar pageName="Users Access" />
      <Table />
    </div>
  );
}

export default UsersAccess;
