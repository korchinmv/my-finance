import type { Metadata } from "next";
import FormField from "@/components/ui/form/FormField/FormField";
import Container from "@/components/Container/Container";
import MainForm from "@/components/ui/form/MainForm/MainForm";
import Title from "@/components/Title/Title";
import Text from "@/components/Text/Text";

export const metadata: Metadata = {
  title: "Мои Финансы | Главная",
};

const HomePage = () => {
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
            textLink='Я уже зарегистрирован'
            css='mb-[20px]'
            textButton='Зарегистрироваться'
          >
            <FormField
              placeholder='Имя'
              name='name'
              type='text'
              css={"mb-[35px]"}
            />
            <FormField
              placeholder='Почта'
              name='email'
              type='email'
              css={"mb-[35px]"}
            />
            <FormField
              placeholder='Пароль'
              name='password'
              type='password'
              css={"mb-[35px]"}
            />
          </MainForm>
        </div>
      </Container>
    </section>
  );
};

export default HomePage;
