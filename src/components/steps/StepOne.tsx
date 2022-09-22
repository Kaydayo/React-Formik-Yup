import React from 'react'
import { Formik, Form, Field } from 'formik'


const StepOne = () => {
    return (
        <div>
            <p>First Name</p>
            <Field name="firstName" />

            <p>Last Name</p>
            <Field name="lastName" />
         
        </div>



    )
}

export default StepOne