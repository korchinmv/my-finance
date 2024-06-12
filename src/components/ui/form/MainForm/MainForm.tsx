"use client";

import { useState } from "react";
import { ReactNode } from "react";
import { account, ID } from "@/server/appwrite";

interface IMainForm {
  children: ReactNode;
  title: string;
}

const MainForm = ({ children, title }: IMainForm) => {
  const [loggedInUser, setLoggedInUser] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  return (
    <div className=''>
      <h3 className=''>{title}</h3>
      <form className=''>{children}</form>
    </div>
  );
};

export default MainForm;
