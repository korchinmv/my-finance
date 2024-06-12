import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Text from "@/components/Text/Text";
import MainForm from "@/components/ui/form/MainForm/MainForm";
import TextField from "@/components/ui/form/TextField/TextField";

export const metadata: Metadata = {
  title: "Мои Финансы | Регистрация",
};

const RegisterPage = () => {
  return (
    <section>
      <Container>
        <div className='flex items-center justify-around'>
          <div className='w-[600px]'>
            <Title
              text='Онлайн-приложение для учета личных финансов'
              css='mb-[30px] text-center'
            />
            <Text
              text=' Максимально наглядно дает представление о том, на что и сколько
          тратится денег!'
              css='text-center'
            />
          </div>

          <MainForm title='Регистрация'>
            <TextField />
            <TextField />
            <TextField />
          </MainForm>
        </div>
      </Container>
    </section>
  );
};

export default RegisterPage;
