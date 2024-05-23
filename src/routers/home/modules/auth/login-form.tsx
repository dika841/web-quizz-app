import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginRequest, TUserLoginSchema } from "@/entities";
import { ControlledFieldText, Button } from "@/components";
import { useGetLocalStorage} from "@/utilities";

export const LoginModule: FC = (): ReactElement => {
  const [user] = useGetLocalStorage<TLoginRequest[]>('user')
  const [loginData, setloginData] = useGetLocalStorage<TLoginRequest>("session");
  const nav = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginRequest>({
    resolver: zodResolver(TUserLoginSchema),
    mode: "all",
    defaultValues: {
      username: "",
      password: "",
      isAuthenticated:false,
    },
  });

  

const onSubmit = handleSubmit((data) => {
   user?.some((item) => {
   if(item?.username === data.username && item?.password === data.password){
      item.isAuthenticated = true;
      setloginData(user.find((val)=> val.id === item.id) as TLoginRequest)
      nav('')
  } 
  })
})
  return (
    <div className="flex items-center justify-center bg-white w-full p-4 ">
      <form className="flex flex-col gap-y-2 w-3/4 border border-grey-300 rounded-md p-8" onSubmit={onSubmit}>
        <div className="text-center">
          <h1 className="font-bold text-3xl text-grey-500">Login</h1>
        </div>
        <ControlledFieldText
          control={control}
          name="username"
          label="Username"
          size="sm"
          placeholder="Username"
          required
          type="text"
          status={errors.username ? "error" : "default"}
          message={errors.username?.message}
        />
        <ControlledFieldText
          control={control}
          name="password"
          label="Password"
          size="sm"
          placeholder="Password"
          required
          type="password"
          status={errors.password ? "error" : "default"}
          message={errors.password?.message}
        />
        <Button type="submit" variant={"info"} variantType="solid" size="md">
          Login
        </Button>
        <div className="flex gap-x-2">
          <small>Don't have an account?</small>
          <Link
            to={"/auth/register"}
            className="text-info text-sm underline underline-offset-4"
          >
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
};
