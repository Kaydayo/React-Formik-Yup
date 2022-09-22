import { Formik, FormikConfig, FormikValues, Form } from 'formik'
import React, { useState } from 'react'


type Props = {
    children?: React.ReactNode
};
const FormikStepper = ({ children, ...props }: FormikConfig<FormikValues> & Props) => {
    const childrenArray = React.Children.toArray(children);
    const [step, setStep] = useState<number>(0);
    const currentChild = childrenArray[step];

    const isLastStep = () => {
        return step === childrenArray.length - 1;
    }
    return <Formik {...props} onSubmit={async (values, helpers) => {
        if (isLastStep()) {
            await props.onSubmit(values, helpers);
        } else {
            setStep(s => s+1)
        }
    }}>
        <Form autoComplete='off'>
            {currentChild}
        </Form>

        {step > 0 ? <button onClick={() => setStep(s => s - 1)}>Back</button> : null}
        <button type='submit'>{isLastStep() ? "Submit":"Next"}</button>
    </Formik>

}

export default FormikStepper