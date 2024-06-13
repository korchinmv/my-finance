import styles from "./TextField.module.scss";

interface ITextFieldProps {
  placeholder: string;
  css?: string;
}

const TextField = ({ css, placeholder }: ITextFieldProps) => {
  return (
    <input
      className={`${styles.input} ${css}`}
      type='text'
      placeholder={placeholder}
    />
  );
};

export default TextField;
