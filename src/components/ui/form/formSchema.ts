import { z, ZodType } from "zod";
import { IFormValues } from "./MainForm/MainForm";

export const formSchema: ZodType<IFormValues> = z.object({
  name: z
    .string()
    .trim()
    .min(3, {
      message: "Слишком короткое имя",
    })
    .max(12, {
      message: "Слишком длинное имя",
    })
    .optional(),
  password: z
    .string()
    .trim()
    .min(3, {
      message: "Пароль должен быть длиннее трех символов",
    })
    .max(15, {
      message: "Сделайте пароль покороче, пожалуйста",
    })
    .regex(/.*[0-9].*/, {
      message: "Пароль должен содержать хотя бы одно число",
    }),
  email: z.string().trim().email({
    message: "Почтовый адрес указан не верно, попробуйте еще раз",
  }),
});
