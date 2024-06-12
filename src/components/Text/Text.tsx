import styles from "./Text.module.scss";

interface ITextProps {
  text: string;
  css?: string;
}

const Text = ({ text, css }: ITextProps) => {
  return <p className={`${styles.text} ${css}`}>{text}</p>;
};

export default Text;
