import React, { Fragment } from 'react'

const AddEmployee = ({ handleChange, handleSubmit }) => {

  return (
    <Fragment>
      <td className='pl-30'>
        <input
          data-testid='new-employee-name-input'
          placeholder='Enter Name'
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-position-input'
          placeholder='Enter Position'
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td className='pl-20'>
        <input
          data-testid='new-employee-salary-input'
          type='number'
          placeholder='Enter Salary'
          onChange={(e) => handleChange(e)}
        />
      </td>
      <td className='pl-20'>
        <button
          data-testid='add-new-employee-button'
          className='x-small w-75 ma-0 px-25'
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </td>
    </Fragment>
  )
}

export default AddEmployee
