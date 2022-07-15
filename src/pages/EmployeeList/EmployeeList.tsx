/** @format */

import ActionInput from "components/ActionInput/ActionInput";
import ActionTable from "components/Table/ActionTable";
import { employeeListArray } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableContent from "./Components/EmployeeListContent/TableContent";
import { useStyles } from "./EmployeeListStyles";

export const tableHeader = [
  "No",
  "名前",
  "会社のメール",
  "個人的なメール",
  "電話",
  "無効化を/有効化",
];

export const EmployeeList = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  //-----------pagination function------------------------
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(5);

  const handlePgNum = (pgNum: number) => {
    setCurrentPage(pgNum);
  };

  const handlePgRows = (rows: number) => {
    setPerPage(rows);
    setCurrentPage(0);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.clientListTitle}>従業員リスト</div>
        <div className={classes.clientListSmallTitle}>
          以下は従業員のリストです。
        </div>
        <div className={classes.serachContainer}>
          <div className={classes.searchRoot}>
            <span className={classes.searchTitle}>探す:</span>
            <ActionInput
              className={classes.searchInput}
              value={search}
              placeholder='xxx-xxx'
              action={(e) => setSearch(e.target.value)}
            />
            <div className={classes.searchBtn}>
              <i className='fas fa-search'></i>
            </div>
          </div>
        </div>
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={employeeListArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={employeeListArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={tableHeader}
            />
          }
        />
      </div>
    </div>
  );
};
