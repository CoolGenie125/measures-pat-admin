import ActionButton from "components/ActionButton/ActionButton";
import ActionTable from "components/Table/ActionTable";
import { clientListArray } from "config/constant";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddEmployeeModal from "./Components/AddServiceModal/AddEmployeeModal";
import TableContent from "./EmployeeListContent/TableContent";
import { useStyles } from "./EmployeeListStyles";

export const tableHeader = [
  "No",
  "名前",
  "会社名",
  "会社のメール",
  "個人的なメール",
  "電話",
  "アクション",
];

export const EmployeeList = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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
  //--------------add item modal function---------------------------
  const [addStatus, setAddStatus] = useState(false);

  const handleAddItem = (e: any) => {
    console.log("input value", e);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.clientListTitle}>従業員リスト</div>
        <div className={classes.clientListSmallTitle}>
          以下は従業員のリストです。
        </div>
        <div className={classes.tableTool}>
          <div className={classes.addBtn} onClick={() => setAddStatus(true)}>
            従業員追加
            <i className='fas fa-plus'></i>
          </div>
        </div>
        <ActionTable
          className={classes.tableRoot}
          handlePgNum={handlePgNum}
          handlePgRows={handlePgRows}
          totalCnt={clientListArray?.length}
          PgNum={currentPage}
          PgRows={perPage}
          tableContent={
            <TableContent
              rows={clientListArray}
              pageNumber={currentPage}
              perPageNumber={perPage}
              columns={tableHeader}
            />
          }
        />
        {/* <ActionButton
          className={classes.backHomeBtn}
          type='dark'
          content='HOME へ戻る'
          action={() => navigate("/")}
        /> */}
      </div>
      <AddEmployeeModal
        show={addStatus}
        onClose={() => setAddStatus(false)}
        action={(e) => handleAddItem(e)}
      />
    </div>
  );
};
