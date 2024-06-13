"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { account, ID } from "@/server/appwrite";
import Text from "@/components/Text/Text";

interface IMainFormProps {
  children: ReactNode;
  title: string;
  formTextDescr: string;
}

const MainForm = ({ children, title, formTextDescr }: IMainFormProps) => {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <div className='bg-[--accent-color] rounded-xl py-8 px-[30px] text-center text-[--white-color]'>
      <h3 className='text-[38px] mb-[10px]'>{title}</h3>
      <Text text={formTextDescr} css={"mb-[20px]"} />
      <form className=''>{children}</form>
    </div>
  );
};

export default MainForm;
