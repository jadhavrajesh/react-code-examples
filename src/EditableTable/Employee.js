import React, { Fragment } from "react";

const Employee = ({
  employee,
  handleChange,
  handleSubmit,
  handleClickField,
  updateList,
  setUpdateList,
}) => {
  const { id, name, salary, position } = employee;
  return (
    <>
      {updateList?.id === id && updateList?.field === "name" ? (
        <td>
          <input
            data-testid="new-employee-name-input"
            placeholder="Enter Name"
            onChange={(e) => handleChange(e, { field: "name", id: id })}
            onBlur={(e) => setUpdateList({ field: null, idx: null })}
          />
        </td>
      ) : (
        <td
          onClick={(e) => {
            handleClickField(e, { field: "name", id: id });
          }}
        >
          {name}
        </td>
      )}
      <td
        onClick={(e) => {
          handleClickField(e, { field: "position", idx: id });
        }}
      >
        {position}
      </td>
      <td>
        <div
          data-testid={"employee-salary-div-" + id}
          onClick={(e) => {
            handleClickField(e, { field: "salary", id: id });
          }}
        >
          {salary}
        </div>
        {/* use this block of code when the salary field becomes editable */}
        {/* <input
          data-testid={ 'employee-salary-input-' + idx }
          type='number'
      /> */}
      </td>
      <td>
        <button
          data-testid={"employee-save-button-" + id}
          onClick={(idx) => handleSubmit(idx)}
        >
          Save
        </button>
      </td>
    </>
  );
};

export default Employee;
