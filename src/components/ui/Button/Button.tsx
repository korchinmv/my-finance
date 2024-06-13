import styles from "./Button.module.scss";

interface IButtonProps {
  text: string;
  css?: string;
}

const Button = ({ text, css }: IButtonProps) => {
  return <button className={`${styles.button} ${css}`}>{text}</button>;
};

export default Button;
