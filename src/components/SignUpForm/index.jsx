import { useFormik } from "formik";
import React from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";

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

  const onSubmit = async ({ username, email, password }) => {
    console.log(username);
    console.log(email);
    console.log(password);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

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
      <Button title={"Login"} />
    </form>
  );
}
