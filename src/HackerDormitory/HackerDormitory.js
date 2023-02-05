import React, { useState } from "react";

// `joiningDate` && `validityDate` format "yyyy-mm-dd"

export const checkValidity = (joiningDate, validityDate) => {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split("-");
  const [yyyy, mm, dd] = validityDate.split("-");
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
  const result = maxValid >= selected && maxValid >= today;
  console.log("result", result);
  return result;
  /*
  let validObj = {isValid: false, msg: null};
  if((maxValid >= selected) && (maxValid >= today)){
    validObj.isValid = true;
    validObj.isDiffMsg = false;    
  } 
  if((maxValid >= selected) && (maxValid >= today) && (today >= selected)){
    validObj.isValid = false;
    validObj.isDiffMsg = true;    
  }  
  return validObj ;
  */
};

function Search({
  handleChangeInput,
  crInputVal,
  handleChangeDate,
  dateVal,
  handleSubmit,
}) {
  return (
    <div>
      <label htmlFor="studentName">
        Student Name:
        <div>
          <input
            id="studentName"
            onChange={(e) => {
              handleChangeInput(e);
            }}
            value={crInputVal}
            data-testid="studentName"
            type="text"
          />
        </div>
      </label>
      <label htmlFor="joiningDate">
        Joining Date:
        <div>
          <input
            id="joiningDate"
            onChange={(e) => {
              handleChangeDate(e);
            }}
            value={dateVal}
            data-testid="joiningDate"
            type="date"
          />
        </div>
      </label>
      <button type="button" onClick={handleSubmit} data-testid="addBtn">
        Add
      </button>
    </div>
  );
}

const ResidentsList = () => {
  return (
    <div>
      <h3>Residents List</h3>
    </div>
  );
};

const Wrapper = () => {
  const [crInputVal, setCrInputVal] = useState("");
  const [dateVal, setDateVal] = useState("");
  // const residentsList = [];
  const handleChangeInput = (e) => {
    console.log("handleChangeInput called", e.target.value);
    setCrInputVal(e.target.value);
  };
  const handleChangeDate = (e) => {
    console.log("handleChangeDate called", e.target.value);
    setDateVal(e.target.value);
  };
  const handleSubmit = () => {
    console.log("handleSubmit called");
  };

  return (
    <>
      <Search
        crInputVal={crInputVal}
        dateVal={dateVal}
        handleChangeDate={handleChangeDate}
        handleChangeInput={handleChangeInput}
        handleSubmit={handleSubmit}
      />
      <ResidentsList />
    </>
  );
};

export default Wrapper;
