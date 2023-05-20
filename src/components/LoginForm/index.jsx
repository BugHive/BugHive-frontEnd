import { useFormik } from "formik";
import React, { useContext, useEffect } from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const { isLoggedIn, login } = useContext(AuthContext);

  const onSubmit = async ({ email, password }) => {
    const res = await axios
      .post(`https://bughive-rest-api.onrender.com/api/login`, {
        email,
        password,
      })
      .catch((err) => {
        console.log(err.message);
      });

    if (res.status === 200) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      login();
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      login();
    }
  }, [isLoggedIn, login]);

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

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
      <Button title={"Log In"} />
    </form>
  );
}
