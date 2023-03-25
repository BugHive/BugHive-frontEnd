import { useFormik } from "formik";
import React from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";
import styled from "styled-components";

export default function ForgotForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const initialValues = {
    email: "",
  };

  const onSubmit = async ({ email }) => {
    console.log(email);
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
      <StyledLabel>Please enter your email</StyledLabel>
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
      <Button title={"Reset Password"} />
    </form>
  );
}
