"use client";

import { useFormContext } from "react-hook-form";
import styles from "./FormField.module.scss";
import { useEffect } from "react";

interface ITextFieldProps {
  placeholder: string;
  css?: string;
  name: string;
  type: string;
}

const FormField = ({ css, placeholder, name, type }: ITextFieldProps) => {
  const { register, formState, getValues, clearErrors } = useFormContext();
  const error: any = formState.errors[name]?.message;
  const value = getValues(name);

  // useEffect(() => {
  //   if (value === "") {
  //     console.log(value === "", value);

  //     () => clearErrors(name);
  //   }
  //   clearErrors(name);
  // }, [value, clearErrors, name]);

  return (
    <div className={`${styles.wrapper} ${css}`}>
      <input
        className={`${styles.input}`}
        style={formState.errors[name] && { borderColor: "red" }}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: "Поле обязательно к заполнению",
        })}
      />

      {error && <span className={styles.span}>{error}</span>}
    </div>
  );
};

export default FormField;
