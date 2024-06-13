import type { Metadata } from "next";
import Container from "@/components/Container/Container";
import Title from "@/components/Title/Title";
import Text from "@/components/Text/Text";
import MainForm from "@/components/ui/form/MainForm/MainForm";
import TextField from "@/components/ui/form/TextField/TextField";
import Button from "@/components/ui/Button/Button";

export const metadata: Metadata = {
  title: "Мои Финансы | Регистрация",
};

const RegisterPage = () => {
  return (
    <section className='pt-[15rem]'>
      <Container>
        <div className='flex items-center justify-center'>
          <div className='w-[600px] mr-[60px]'>
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

          <MainForm
            title='Регистрация'
            formTextDescr='Для регистрации укажите своё имя, почту и пароль'
          >
            <TextField css='mb-[25px]' placeholder='Имя' />
            <TextField css='mb-[25px]' placeholder='Почта' />
            <TextField css='mb-[45px]' placeholder='Пароль' />
            <Button
              text='Зарегистрироваться'
              css={"bg-[--white-color] text-[--text-color]"}
            />
          </MainForm>
        </div>
      </Container>
    </section>
  );
};

export default RegisterPage;
