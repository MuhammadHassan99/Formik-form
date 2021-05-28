import React from "react";
import { Formik, Form } from "formik";
import Textfeild from "./Textfeild";
import * as Yup from "yup";

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 character or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 character or less")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "password must be 6 characters long")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
          <h1 className='my-4 font-weight-bold-display-4'>Sign up</h1>
          <Form>
            <Textfeild label='First name' name='firstName' type='text' />
            <Textfeild label='Last name' name='lastName' type='text' />
            <Textfeild label='Email name' name='email' type='email' />
            <Textfeild label='Password' name='password' type='password' />
            <Textfeild
              label='Confirm Password'
              name='confirmPassword'
              type='password'
            />
            <button className='btn btn-dark mt-3' type='submit'>
              Register
            </button>
            <button className='btn btn-danger mt-3 ml-3' type='reset'>
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Signup;
