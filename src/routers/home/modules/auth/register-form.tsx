import { Button, ControlledFieldText } from "@/components";
import { TRegisterRequest, TUserRegisterSchema } from "@/entities";
import { useLocalStorage } from "@/utilities";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const RegisterModule: FC = (): ReactElement => {
  const [registeData, setregisteData] = useLocalStorage<TRegisterRequest[]>(
    "user",
    []
  );
  const nav = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TRegisterRequest>({
    resolver: zodResolver(TUserRegisterSchema),
    mode: "all",
    defaultValues: {
      id: "",
      username: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    const newData = [
      {
        id: String(Math.floor(Math.random() * 1000000)),
        username: data.username,
        email: data.email,
        password: data.password,
      },
      ...registeData,
    ];
    setregisteData([...newData]);
    console.log(registeData);

    if (isValid) {
      nav("/auth/login");
    }
    return newData;
  });
  return (
    <div className="flex items-center justify-center bg-white w-full p-4 ">
      <form
        className="flex flex-col gap-y-2 w-3/4 border border-grey-300 rounded-md p-8"
        onSubmit={onSubmit}
      >
        <div className="text-center">
          <h1 className="font-bold text-3xl text-grey-500">Register</h1>
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
          name="email"
          label="Email"
          size="sm"
          placeholder="Email"
          required
          type="email"
          status={errors.email ? "error" : "default"}
          message={errors.email?.message}
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

        <Button
          disabled={!isValid}
          type="submit"
          variant={"info"}
          variantType="solid"
          size="md"
        >
          Register
        </Button>
        <div className="flex gap-x-2">
          <small>Already have an account?</small>
          <Link
            to={"/auth/login"}
            className="text-info text-sm underline underline-offset-4"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
