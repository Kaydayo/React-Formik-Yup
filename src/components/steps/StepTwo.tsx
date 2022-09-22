import { Field } from 'formik'
import React from 'react'

const StepTwo = () => {
  return (
      <div>
          <p>Email</p>
          <Field name="email" />

          <p>Password</p>
          <Field name="password" />

      </div>


  )
}

export default StepTwo