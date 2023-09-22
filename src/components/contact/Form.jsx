import { useFormik } from "formik";
import Button from "../common/Button";
import * as Yup from 'yup';
import { useState } from "react";

const Form = () => {

    // state to hold error or success after form posting
    const [ submissionStatus, setSubmissionStatus ] = useState();

    // State to manage visibilty of message
    const [ visible, setVisible ] = useState(false);

    // Function to conditionally display success message
    const displayFormStatus = () => {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 4000)
    }

    console.log(submissionStatus)

    // Create form instance
    const formik = useFormik({
        initialValues: {
          first_name: '',
          phone_number: '',
          email: '',
          message: '',
        },
        onSubmit: function (values, actions) {
            console.log(`You are registered! Name: ${values.first_name}. Email: ${values.email}. Message: ${values.message}.`);
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(values);
            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            }
            fetch(`${import.meta.env.VITE_BASE_URL}/hackathon/contact-form`, requestOptions)
            .then(response => response.json())
            .then(result =>  setSubmissionStatus(result.date_created))
            .catch(error => console.log('error', error));
            actions.setSubmitting(false);
        },
        validationSchema: Yup.object().shape({
            first_name: Yup.string()
                    .required('Name required'),
            email: Yup.string()
                    .email('Invalid email')
                    .required('Email address is required'),
            message: Yup.string()
                        .required('Message required')
          })
      })
      console.log()

    return (
        <div className='relative'>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <input
                    type="text"
                    name="first_name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.first_name}
                    id='first_name'
                    placeholder='First Name'
                    className={`bg-inherit placeholder:text-white shadow-xl w-full py-2 pl-6 focus:outline-none rounded-md mb-1 border ${formik.touched.first_name && formik.errors.first_name ? 'border-red-400' : 'border-white'}`}
                />
                {formik.touched.first_name && formik.errors.first_name && (
                    <span className='text-red-400 mb-12'>{formik.errors.first_name}</span>
                )}
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    id='firstName'
                    placeholder='Email'
                    className={`bg-inherit placeholder:text-white shadow-xl w-full py-2 pl-6 focus:outline-none rounded-md mb-1 mt-6 border ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-white'}`}
                />
                {formik.touched.email && formik.errors.email && (
                    <span className='text-red-400 mb-12'>{formik.errors.email}</span>
                )}
                <textarea
                    name="message"
                    rows='4'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    id='message'
                    placeholder='Message'
                    className={`bg-inherit placeholder:text-white shadow-xl w-full py-2 pl-6 focus:outline-none rounded-md mb-1 mt-6 border ${formik.touched.message && formik.errors.message ? 'border-red-400' : 'border-white'}`}
                />
                {formik.touched.message && formik.errors.message && (
                    <span className='text-red-400 mb-12'>{formik.errors.message}</span>
                )}
                <div className="w-fit mx-auto mt-10" onClick={displayFormStatus}>
                    <Button type='submit' disabled={formik.isSubmitting} text={'Submit'} />
                </div>
            </form>
            <div className={visible ? 'block py-3 bg-green-600 absolute z-10 -bottom-14 rounded-md text-[14px] w-full mt-4 text-center' : 'hidden'}>{submissionStatus ? 'Message Successfully sent. Thank you!' : ''}</div>
        </div>
    )
}
 export default Form;