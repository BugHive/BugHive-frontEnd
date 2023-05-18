import { useFormik } from "formik";
import React from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NewPasswordForm() {
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async ({ password }) => {
    console.log(password);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const StyledLabel = styled.label`
    width: 256px;
    height: 26px;
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme.palette.text.main};
    text-align: center;
    margin: 1rem 0;
  `;

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledLabel>Create New Password</StyledLabel>
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
      <Link to={"/login"}>
        <div style={{ width: "25rem", marginLeft: "5.5rem", padding: "1rem" }}>
          <Button title={"Log In"} />
        </div>
      </Link>
    </form>
  );
}
