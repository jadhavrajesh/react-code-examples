import React from "react";

const EmptyTable = () => {
  const tableData = [...Array(10)];

  return (
    <>
      <table>
        <tbody>
          <tr>
            {tableData.map((_) => (
              <th>+</th>
            ))}
          </tr>
          {tableData.map((_) => (
            <tr>
              {tableData.map((_) => (
                <td>-</td>
              ))}{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmptyTable;
