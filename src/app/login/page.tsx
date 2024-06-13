import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Мои Финансы | Логин",
};

const LoginPage = () => {
  // const login = async (email: string, password: string) => {
  //   const session = await account.createEmailPasswordSession(email, password);
  //   setLoggedInUser(await account.get());
  //   const token = await account.createJWT();
  //   localStorage.setItem("jwt", token.jwt);
  //   console.log(token);
  // };

  // const register = async () => {
  //   await account.create(ID.unique(), email, password, name);
  //   login(email, password);
  // };

  // const logout = async () => {
  //   await account.deleteSession("current");
  //   setLoggedInUser(false);
  // };

  // if (loggedInUser) {
  //   return (
  //     <div>
  //       <p>Logged in as {loggedInUser.name}</p>
  //       <button type='button' onClick={logout}>
  //         Logout
  //       </button>
  //     </div>
  //   );
  // }

  return (
    <section>
      {/* <Container>
        <h1 className=''>Онлайн-приложение для учета личных финансов</h1>
        <p className=''>
          Максимально наглядно дает представление о том, на что и сколько
          тратится денег
        </p>
      </Container> */}
    </section>
  );
};

export default LoginPage;
