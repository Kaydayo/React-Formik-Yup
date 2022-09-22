import { Field } from 'formik'
import React from 'react'

const StepThree = () => {
  return (
      <div>
          <p>Age</p>
          <Field name="age" />

          <p>Occupation</p>
          <Field name="occupation" />

      </div>
  )
}

export default StepThree