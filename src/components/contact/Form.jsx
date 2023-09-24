import { useFormik } from "formik";
import Button from "../common/Button";
import * as Yup from 'yup';
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Form = () => {

    // Regular expression for phone number
    const phoneRegExp = /^([0]{1})[0-9]{10}$/

    // Create form instance
    const formik = useFormik({
        initialValues: {
          first_name: '',
          phone_number: '',
          email: '',
          message: '',
        },
        onSubmit: function (values, actions) {
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
            .then(response => {
                response.json()
            })
            .then(result =>  {
                console.log(result)
                actions.setSubmitting(false)
                actions.resetForm({
                    values: {
                        first_name: '',
                        phone_number: '',
                        email: '',
                        message: '',
                    }
                })
            })
            .catch(error => console.log('error', error));
        },
        validationSchema: Yup.object().shape({
            first_name: Yup.string()
                    .required('Name required'),
            email: Yup.string()
                    .email('Invalid email')
                    .required('Email address is required'),
            message: Yup.string()
                        .required('Message required'),
            phone_number: Yup.string().matches(phoneRegExp, "Invalid phone number.").required('Phone number required'),
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
                    className={`bg-white/[.05] placeholder:text-white shadow-xl w-full py-2 pl-6 focus:outline-none rounded-md mb-1 border ${formik.touched.first_name && formik.errors.first_name ? 'border-red-400' : 'border-white'}`}
                />
                {formik.touched.first_name && formik.errors.first_name && (
                    <span className='text-red-400 mb-12'>{formik.errors.first_name}</span>
                )}
                <input
                    type="text"
                    name="phone_number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone_number}
                    id='phone_number'
                    placeholder='Phone Number'
                    className={`bg-white/[.05] placeholder:text-white shadow-xl w-full py-2 pl-6 mt-6 focus:outline-none rounded-md mb-1 border ${formik.touched.phone_number && formik.errors.phone_number ? 'border-red-400' : 'border-white'}`}
                />
                {formik.touched.phone_number && formik.errors.phone_number && (
                    <span className='text-red-400 mb-12'>{formik.errors.phone_number}</span>
                )}
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    id='firstName'
                    placeholder='Email'
                    className={`bg-white/[.05] placeholder:text-white shadow-xl w-full py-2 pl-6 focus:outline-none rounded-md mb-1 mt-6 border ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-white'}`}
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
                    className={`bg-white/[.05] placeholder:text-white shadow-xl w-full py-2 pl-6 focus:outline-none rounded-md mb-1 mt-6 border ${formik.touched.message && formik.errors.message ? 'border-red-400' : 'border-white'}`}
                />
                {formik.touched.message && formik.errors.message && (
                    <span className='text-red-400 mb-12'>{formik.errors.message}</span>
                )}
                <div className="w-fit mx-auto mt-10" >
                    <button disabled={formik.isSubmitting} className="bg-button disabled:bg-black py-4 hover:opacity-70 transition-opacity duration-300 rounded-md text-base text-center px-4 w-44 font-normal text-white">
                    {formik.isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
            <div className="w-fit lg:hidden my-6 mx-auto">
                    <p className="text-purp font-semibold text-center mb-2 text-[12px]">Share On</p>
                        <div className='flex space-x-3 text-white items-center'>
                            <div className='cursor-pointer'>
                                <BsInstagram size={10} />
                            </div>
                            <div className='cursor-pointer'>
                                <RiTwitterXLine size={10} />
                            </div>
                            <div className='cursor-pointer'>
                                <FaFacebookF size={10} />
                            </div>
                            <div className='cursor-pointer'>
                                <FaLinkedinIn size={10} />
                            </div>
                        </div>
                    </div>
        </div>
    )
}
 export default Form;