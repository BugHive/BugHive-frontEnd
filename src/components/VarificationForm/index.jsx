import { useFormik } from "formik";
import React from "react";
import Button from "../Button";
import FormItem from "../FormItem";
import Error from "../Error";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function VerificationForm() {
  const validationSchema = Yup.object({
    securityCode: Yup.string()
      .required("Security code is required")
      .length(6, "Security code must be 6 characters"),
  });

  const initialValues = {
    securityCode: "",
  };

  const onSubmit = async ({ securityCode }) => {
    console.log(securityCode);
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
      <StyledLabel>Enter Security Code</StyledLabel>
      <FormItem
        name={"securityCode"}
        type={"text"}
        placeholder={"Security Code"}
        id={"securityCode"}
        onChange={formik.handleChange}
        value={formik.values.securityCode}
        onBlur={formik.handleBlur}
      />
      {formik.touched.securityCode && formik.errors.securityCode && (
        <Error msg={formik.errors.securityCode} />
      )}
      <Link to={"/new-password"}>
        <div style={{ width: "25rem", marginLeft: "5.5rem", padding: "1rem" }}>
          <Button title={"Continue"} />
        </div>
      </Link>
    </form>
  );
}
