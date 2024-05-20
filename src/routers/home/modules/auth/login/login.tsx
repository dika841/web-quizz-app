import { Button, ControlledFieldText } from "@libs/components";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const LoginModule: FC = (): ReactElement => {
  const { control } = useForm();

  return (
    <section className="flex w-full min-h-svh">
      <div className="bg-grey w-full"></div>
      <div className="flex items-center justify-center bg-white w-full p-4 ">
        <form className="flex flex-col gap-y-2 w-3/4 border border-grey-300 rounded-md p-8">
          <div className="text-center">
            <h1 className="font-bold text-3xl text-grey-500">Login</h1>
          </div>
          <ControlledFieldText
            control={control}
            name="username"
            label="Username"
            size="sm"
            placeholder="Username"
          />
          <ControlledFieldText
            control={control}
            name="password"
            label="Password"
            size="sm"
            placeholder="Password"
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
    </section>
  );
};
