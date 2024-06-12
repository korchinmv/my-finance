import { FC } from "react";
import logoPick from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link className='animation' href='/' aria-label='На главную'>
      <Image src={logoPick} priority alt='Логотип' width={50} height={50} />
    </Link>
  );
};

export default Logo;
