import { useFormik } from "formik";
import * as Yup from 'yup';
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types"
import { SuccessC } from './../../context/SuccessContext';

const Form = () => {

    // Use success context
    const { setIsSuccessful } = useContext(SuccessC)

    // State to hold data from list of categories
    const [ categories, setCategories ] = useState([]);

    // Function to fetch data from api
    const fetchCategories = () => {

        fetch(`${import.meta.env.VITE_BASE_URL}/hackathon/categories-list`)
          .then(response => response.json())
          .then(result => {
            setCategories(result)
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }

    // Fetching data from api using useEffect
    useEffect(() => {
        fetchCategories();
    }, [])

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
            privacy_policy_accepted: false
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
            
            fetch(`${import.meta.env.VITE_BASE_URL}/hackathon/registration`, requestOptions)
            .then(response => {
                response.json()
                if(response) {
                    setIsSuccessful(true);
                    actions.setSubmitting(false)
                    document.body.classList.add('scroll-lock');
                    actions.resetForm({
                        values: {
                            email: '',
                            phone_number: '',
                            team_name: '',
                            group_size: '',
                            project_topic: '',
                            category: '',
                            privacy_policy_accepted: false
                        }
                    })
                }
            })
            .then(result =>  {
                console.log(result)
            })
            .catch(error => console.log('error', error));
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Email address is required'),
            phone_number: Yup.string().matches(phoneRegExp, "Invalid phone number.").required('Phone number required'),
            team_name: Yup.string().required('Team name required'),
            group_size: Yup.number().required('Select team size'),
            project_topic: Yup.string().required('Project topic required'),
            category: Yup.string().required('Category required'),
            privacy_policy_accepted: Yup.boolean().oneOf([true], 'Accept the terms and conditions'),
          })
      })

    return (
        <>
        <div className='relative'>
            <form onSubmit={formik.handleSubmit} className="w-full">
                <div className="w-full lg:grid lg:grid-cols-2 mb-6 gap-6">
                <div className="relative mb-4 lg:mb-0 h-[60%]">
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
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.team_name}</span>
                    )}
                </div>
                <div className="relative h-[60%] mb-4 lg:mb-0">
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
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.phone_number}</span>
                    )}
                </div>
                <div className="relative h-[60%] mb-4 lg:mb-0">
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
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.email}</span>
                    )}
                </div>
                <div className="relative h-[60%] mb-4 lg:mb-0">
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
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.project_topic}</span>
                    )}
                </div>
                <div className="lg:hidden flex justify-between">
                <div className="relative h-[60%] w-[60%] mb-2 lg:mb-0">
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        id='category'
                        className={`bg-white/[.06] text-gray-400 placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.category && formik.errors.category ? 'border-red-400' : 'border-white'}`}
                    >
                        <option value='' selected disabled hidden>Select your category</option>
                        {categories.length === 0 && <option value=''>Loading...</option>  }
                        { categories.map((cat, index) => (
                            <option key={index} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {formik.touched.category && formik.errors.category && (
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.category}</span>
                    )}
                </div>
                <div className="relative h-[60%] w-[35%] block mb-4 lg:mb-0">
                    <label htmlFor="group_size">Group Size</label>
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
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.group_size}</span>
                    )}
                </div>
                </div>
                <div className="relative h-[60%] hidden lg:block mb-4 lg:mb-0">
                    <label htmlFor="category">Category</label>
                    <select
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                        id='category'
                        className={`bg-white/[.06] text-gray-400 placeholder:text-white/[.5] placeholder:text-[14px] shadow-xl w-full py-2 pl-3 focus:outline-none rounded-md mb-1 border ${formik.touched.category && formik.errors.category ? 'border-red-400' : 'border-white'}`}
                    >
                        <option value='' selected disabled hidden>Select your category</option>
                        {categories.length === 0 && <option value=''>Loading...</option>  }
                        { categories.map((cat, index) => (
                            <option key={index} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                    {formik.touched.category && formik.errors.category && (
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.category}</span>
                    )}
                </div>
                <div className="relative h-[60%] hidden lg:block mb-4 lg:mb-0">
                    <label htmlFor="group_size">Group Size</label>
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
                    <span className='text-red-400 text-xs absolute -bottom-4 lg:-bottom-12 left-0'>{formik.errors.group_size}</span>
                    )}
                </div>
                </div>
                <p className="text-purp -mt-7 lg:-mt-0 text-[10px] mb-2 lg:mb-0 font-normal">Please review your registration details before submitting</p>
                <label className="flex space-x-2 items-center">
                    <input
                        type="checkbox"
                        name="privacy_policy_accepted"
                        checked={formik.values.privacy_policy_accepted}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.privacy_policy_accepted}
                        id='privacy_policy_accepted'
                        />
                        <span className="text-[12px] font-normal">I agreed with the event terms and conditions and privacy policy</span>
                        {formik.touched.privacy_policy_accepted && formik.errors.privacy_policy_accepted && (
                    <span className='text-red-400 text-xs absolute bottom-20 lg:bottom-20 left-0'>{formik.errors.privacy_policy_accepted}</span>
                    )}
                </label>

                <button type="submit" className="w-full mx-auto mt-10 bg-button disabled:bg-black py-4 hover:opacity-70 active:opacity-40 transition-opacity duration-300 rounded-md text-center font-normal text-white">{formik.isSubmitting ? 'Submitting...' : 'Register now'}</button>
            </form>
        </div>
        </>
    )
}
Form.propTypes = {
    categories: PropTypes.array.isRequired,
  }
  

 export default Form;