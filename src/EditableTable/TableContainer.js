import React, { Fragment, useState } from "react";
import AddEmployee from "./AddEmployee";
import Employee from "./Employee";

const title = "Editable Table";

const employeesList = [
  {
    id: 0,
    name: "Chris Hatch",
    position: "Software Developer",
    salary: 130000,
  },
  {
    id: 1,
    name: "Elizabeth Montgomery",
    position: "Lead Research Engineer",
    salary: 70000,
  },
  {
    id: 2,
    name: "Aiden Shaw",
    position: "Machine Learning Engineer",
    salary: 80000,
  },
];

const TableContainer = () => {
  const [employeesListState, setEmployeesListState] = useState(employeesList);
  const [updateList, setUpdateList] = useState({});

  const handleChange = (e, obj) => {
    // console.log('handle change called', e.target.value, obj)
    const getUpdateList = employeesListState.filter(
      (item) => item.id === obj.id
    );
    // console.log('getUpdateList:', getUpdateList);
    const getNotUpdateList = employeesListState.filter(
      (item) => item.id !== obj.id
    );
    // console.log('getNotUpdateList:', getNotUpdateList);
    const newState = {
      id: obj.id,
      [obj.field]: e.target.value,
    };
    const newUpdatedState = { ...getUpdateList[0], ...newState };
    // console.log("newUpdatedState", newUpdatedState);
    setEmployeesListState([...getNotUpdateList, ...[newUpdatedState]]);
  };

  const handleSubmit = (e) => {
    console.log("handle submit called", e);
    const newState = [];
    // setEmployeesList()
  };

  const handleClickField = (e, obj) => {
    // console.log("handleClickField called", e, obj);
    setUpdateList(obj);
  };
  
  return (
    <Fragment>
      <div>{title}</div>
      <div>
        <table data-testid="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employeesListState.map((employee, idx) => (
              <tr key={employee.id} data-testid={`row-${idx}`}>
                <Employee
                  employee={employee}                  
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  handleClickField={handleClickField}
                  updateList={updateList}
                  setUpdateList={setUpdateList}
                />
              </tr>
            ))}
            {/* <tr>
              <AddEmployee
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </tr> */}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default TableContainer;
