import { Button } from "@libs/components";
import { FC, ReactElement } from "react";

export const LandingPage: FC = (): ReactElement => {
  return (
    <section className="flex flex-col gap-y-4 items-center justify-center w-full min-h-96">
      <h1 className="font-bold text-7xl text-grey-800">Welcome To FunQuizz</h1>
      <p className="font-bold text-xl text-grey-500">Come and play with us</p>
      <Button size="md" variant="info" variantType="solid" type="button">
        Start
      </Button>
    </section>
  );
};
