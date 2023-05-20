import { useFormik } from "formik";
import React, { useState } from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function SignUpForm() {
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password is required"),
  });
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [valid, setValid] = useState(false);

  const onSubmit = async ({ username, email, password }) => {
    const res = await axios
      .post(`https://bughive-rest-api.onrender.com/api/users`, {
        username,
        email,
        password,
      })
      .catch((err) => {
        console.log(err.message);
      });

    if (res.status === 201) {
      setValid(true);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  if (valid) {
    return <Navigate to={"/login"} />;
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormItem
        name={"username"}
        type={"text"}
        placeholder={"Username"}
        id={"username"}
        onChange={formik.handleChange}
        value={formik.values.username}
        onBlur={formik.handleBlur}
      />
      {formik.touched.username && formik.errors.username && (
        <Error msg={formik.errors.username} />
      )}
      <FormItem
        name={"email"}
        type={"email"}
        placeholder={"Email"}
        id={"email"}
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <Error msg={formik.errors.email} />
      )}
      <FormItem
        name={"password"}
        type={"password"}
        placeholder={"Password"}
        id={"password"}
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <Error msg={formik.errors.password} />
      )}
      <FormItem
        name={"confirmPassword"}
        type={"password"}
        placeholder={"Confirm Password"}
        id={"confirmPassword"}
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
        onBlur={formik.handleBlur}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <Error msg={formik.errors.confirmPassword} />
      )}
      <Button title={"Sign Up"} />
    </form>
  );
}
