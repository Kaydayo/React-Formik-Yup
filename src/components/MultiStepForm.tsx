import { Formik } from 'formik'
import React, { useState } from 'react'
import FormikStepper from './FormikStepper'
import { object, string, number } from 'yup'


const MultiStepForm = () => {



    return (
        <FormikStepper

            validationSchema={object({
                firstName: string().required(),
                lastName: string().required(),
                email: string().email('Invalid email format').required(),
                password: string().required().test('password', 'Password must be greater or equal 5 characters', val => val!.length >= 5),
                age: number().required().test('age', 'Invalid age entered', val => val! > 1),
                occupation: string().required()
            })}

            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                age: 0,
                occupation:''

            }}
            onSubmit={() => { }}
        >

        </FormikStepper>
    )
}



export default MultiStepForm