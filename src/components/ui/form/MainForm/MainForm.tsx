"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ReactNode, useEffect } from "react";
import { account, ID } from "@/server/appwrite";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../formSchema";
import Text from "@/components/Text/Text";
import Link from "next/link";
import Button from "../../Button/Button";

interface IMainFormProps {
  children: ReactNode;
  title: string;
  formTextDescr: string;
  textLink: string;
  css?: string;
  textButton: string;
}

export interface IFormValues {
  name?: string;
  email: string;
  password: string;
}

const MainForm = ({
  children,
  title,
  formTextDescr,
  textLink,
  css,
  textButton,
}: IMainFormProps) => {
  const methods = useForm<IFormValues>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
  });

  console.log(methods);

  const onSubmit: SubmitHandler<IFormValues> = (data) => console.log(data);

  return (
    <div className='bg-[--accent-color] rounded-xl py-8 px-[30px] text-center text-[--white-color]'>
      <h3 className='text-[38px] mb-[10px]'>{title}</h3>
      <Text text={formTextDescr} css={"mb-[20px]"} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={css}>
          {children}

          <Button
            text={textButton}
            css={"bg-[--white-color] text-[--text-color]"}
          />
        </form>
      </FormProvider>
      <Link
        className='underline transition-colors hover:text-[--aqua-color]'
        href='/login'
      >
        {textLink}
      </Link>
    </div>
  );
};

export default MainForm;
