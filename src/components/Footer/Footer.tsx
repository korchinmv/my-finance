import Container from "../Container/Container";
import Text from "../Text/Text";

interface IFooter {
  footerText: string;
}

const Footer = ({ footerText }: IFooter) => {
  return (
    <footer className='mt-auto'>
      <Container>
        <Text
          text={footerText}
          css='text-center md:text-[22px] py-[10px] md:py-[20px]'
        />
      </Container>
    </footer>
  );
};

export default Footer;
