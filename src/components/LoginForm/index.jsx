import { useFormik } from "formik";
import React from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async ({ email, password }) => {
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
      <Link to={"/"}>
        <div
          style={{
            width: "25rem",
            marginLeft: "5.5rem",
            padding: "1rem",
          }}>
          <Button title={"Log In"} />
        </div>
      </Link>
    </form>
  );
}
