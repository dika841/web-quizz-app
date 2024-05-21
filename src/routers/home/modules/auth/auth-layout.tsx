import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = (): ReactElement => {
  return (
    <section className="flex w-full min-h-svh">
      <div className="bg-grey w-full"></div>
      <Outlet />
    </section>
  );
};
