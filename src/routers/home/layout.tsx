import { Icon } from '@iconify/react';
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

export const HomeLayout: FC = (): ReactElement => {
  return (
    <main className="max-w-auto min-h-svh relative p-8 bg-[url('/background.jpg')] object-cover bg-cover object-center bg-no-repeat">
      <div className="w-full">
        <figure className='flex items-center gap-x-2'>
            <Icon icon="icon-park-outline:game-ps" width={50}  className='text-grey-500'/>
            <figcaption className='text-grey-500 text-xl font-bold'>FunQuizz</figcaption>
        </figure>
      </div>
      <Outlet />
    </main>
  );
};
