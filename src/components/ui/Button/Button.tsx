import { useFormContext } from "react-hook-form";
import styles from "./Button.module.scss";

interface IButtonProps {
  text: string;
  css?: string;
}

const Button = ({ text, css }: IButtonProps) => {
  const { formState } = useFormContext();

  return (
    <button className={`${styles.button} ${css}`} disabled={!formState.isValid}>
      {text}
    </button>
  );
};

export default Button;
