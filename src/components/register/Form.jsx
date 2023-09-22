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

    // Regular expression for phone number
    const phoneRegExp = /^([0]{1})[0-9]{10}$/

    // Create form instance
    const formik = useFormik({
        initialValues: {
            email: '',
            phone_number: '',
            team_name: '',
            group_size: '',
            project_topic: '',
            category: '',
            privacy_poclicy_accepted: false
        },
        onSubmit: function (values, actions) {
            console.log(`You are registered! Name: ${values.team_name}. Group size: ${values.group_size}. Category: ${values.category}.`);
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
            email: Yup.string().email('Invalid email').required('Email address is required'),
            phone_number: Yup.string().matches(phoneRegExp, "Invalid phone number."),
            team_name: Yup.string().required('Team name required'),
            group_size: Yup.number().required('Select team sie'),
            project_topic: Yup.string().required('Project topic required'),
            category: Yup.number().required('Category required'),
            privacy_poclicy_accepted: Yup.boolean().oneOf([true], 'Accept the terms and conditions').required('Accept the terms and conditions'),
          })
      })
      console.log()

    return (
        <div className='relative'>
            <form onSubmit={formik.handleSubmit} className="w-full grid grid-cols-2 gap-6">
                <div className="relative h-[60%]">
                    <label htmlFor="team_name">Team&#39;s name</label>
                    <input
                        type="text"
                        name="team_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.team_name}
                        id='team_name'
                        placeholder='Enter the name of your group'
                        className={`bg-white/[.06] placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.team_name && formik.errors.team_name ? 'border-red-400' : 'border-white'}`}
                    />
                    {formik.touched.team_name && formik.errors.team_name && (
                    <span className='text-red-400 text-xs absolute -bottom-12 left-0'>{formik.errors.team_name}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="phone_number">Phone</label>
                    <input
                        type="text"
                        name="phone_number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone_number}
                        id='phone_number'
                        placeholder='Enter your phone number'
                        className={`bg-white/[.06] placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.phone_number && formik.errors.phone_number ? 'border-red-400' : 'border-white'}`}
                    />
                    {formik.touched.phone_number && formik.errors.phone_number && (
                    <span className='text-red-400 mb-12'>{formik.errors.phone_number}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        id='email'
                        placeholder='Enter your email address'
                        className={`bg-white/[.06] placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-white'}`}
                    />
                    {formik.touched.email && formik.errors.email && (
                    <span className='text-red-400 mb-12'>{formik.errors.email}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="project_topic">Project Topic</label>
                    <input
                        type="text"
                        name="project_topic"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.project_topic}
                        id='project_topic'
                        placeholder='What is your group project topic'
                        className={`bg-white/[.06] placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.project_topic && formik.errors.project_topic ? 'border-red-400' : 'border-white'}`}
                    />
                    {formik.touched.project_topic && formik.errors.project_topic && (
                    <span className='text-red-400 mb-12'>{formik.errors.project_topic}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        id='category'
                        className={`bg-white/[.06] text-gray-400 placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.category && formik.errors.category ? 'border-red-400' : 'border-white'}`}
                    >
                        <option value={null}>Select your category</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                    {formik.touched.category && formik.errors.category && (
                    <span className='text-red-400 mb-12'>{formik.errors.category}</span>
                    )}
                </div>
                <div>
                    <label htmlFor="group_size">Category</label>
                    <select
                        name="group_size"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.group_size}
                        id='group_size'
                        className={`bg-white/[.06] text-gray-400 placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.category && formik.errors.category ? 'border-red-400' : 'border-white'}`}
                    >
                        <option value={null}>Select</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    {formik.touched.group_size && formik.errors.group_size && (
                    <span className='text-red-400 mb-12'>{formik.errors.group_size}</span>
                    )}
                </div>
                {/* <div className="w-fit mx-auto mt-10" onClick={displayFormStatus}>
                    <Button type='submit' disabled={formik.isSubmitting} text={'Submit'} />
                </div> */}
            </form>
            <div className={visible ? 'block py-3 bg-green-600 absolute z-10 -bottom-14 rounded-md text-[14px] w-full mt-4 text-center' : 'hidden'}>{submissionStatus ? 'Message Successfully sent. Thank you!' : ''}</div>
        </div>
    )
}
 export default Form;