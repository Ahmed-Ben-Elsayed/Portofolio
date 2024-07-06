import React, { useEffect, useState } from 'react';
import '../contact/contact.css';
import { useFormik } from 'formik';
export const Contact = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '', 
            location: '',
        },
        onSubmit: values => {

        },
        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = 'Your name is Required';
            }
            if (!values.email) {
                errors.email = 'Your email is Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.phone) {
                errors.phone = 'Your phone number is Required';
            }
            if (!values.message) {
                errors.message = 'Your message is Required';
            }
            if (!values.location) {
                errors.location = 'Please enter your location';
            }
            return errors;
        }
    });
    let [spinner , setspinner] = useState(true);
    useEffect(()=>{
      setspinner(true);
      setTimeout(()=>{
        setspinner(false);
      },3000)
    },[])
    return (
        <>
        {spinner ? 
        <div className="spinner">
            <svg className="pl" width="128px" height="128px" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
  <circle className="pl__ring1" cx="64" cy="64" r="60" fill="none" stroke="hsl(3,90%,55%)" stroke-width="8" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="377 377" stroke-dashoffset="-376.4"></circle>
  <circle className="pl__ring2" cx="64" cy="64" r="52.5" fill="none" stroke="hsl(13,90%,55%)" stroke-width="7" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="329.9 329.9" stroke-dashoffset="-329.3"></circle>
  <circle className="pl__ring3" cx="64" cy="64" r="46" fill="none" stroke="hsl(23,90%,55%)" stroke-width="6" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="289 289" stroke-dashoffset="-288.6"></circle>
  <circle className="pl__ring4" cx="64" cy="64" r="40.5" fill="none" stroke="hsl(33,90%,55%)" stroke-width="5" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="254.5 254.5" stroke-dashoffset="-254"></circle>
  <circle className="pl__ring5" cx="64" cy="64" r="36" fill="none" stroke="hsl(43,90%,55%)" stroke-width="4" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="226.2 226.2" stroke-dashoffset="-225.8"></circle>
  <circle className="pl__ring6" cx="64" cy="64" r="32.5" fill="none" stroke="hsl(53,90%,55%)" stroke-width="3" transform="rotate(-90,64,64)" stroke-linecap="round" stroke-dasharray="204.2 204.2" stroke-dashoffset="-203.9"></circle>
</svg>
        </div>
    :
            <form onSubmit={formik.handleSubmit}>
                <h1>Contact Me <span></span></h1>
                <input type="text" placeholder="Your Name" name="name" onChange={formik.handleChange} value={formik.values.name} />
                {formik.errors.name ? <p className='error'>{formik.errors.name}</p> : null}
                <input type="text" placeholder="Email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.errors.email ? <p className='error'>{formik.errors.email}</p> : null}
                <input type="number" placeholder="Phone Number" name="phone" onChange={formik.handleChange} value={formik.values.phone} />
                {formik.errors.phone ? <p className='error'>{formik.errors.phone}</p> : null}
                <input type="text" placeholder="Address" name="location" onChange={formik.handleChange} value={formik.values.location} />
                {formik.errors.location ? <p className='error'>{formik.errors.location}</p> : null}
                <input type="text" placeholder="Your Message" name="message" onChange={formik.handleChange} value={formik.values.message} />
                {formik.errors.message ? <p className='error'>{formik.errors.message}</p> : null}
                <input className='btn-12' type="submit" value="Submit" />
            </form>
    }
        </>
    );
};
