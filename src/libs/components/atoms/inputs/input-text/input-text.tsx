import { className, TInput } from '@libs/entities/common';
import { useId, forwardRef } from 'react';

export const InputText = forwardRef<HTMLInputElement, TInput>(
    ({ size = 'sm', status = 'default', placeholder, ...props }, ref) => {
      const id = useId();
      return (
        <input
          {...props}
          ref={ref}
          id={id}
          className={className({ size, status })}
          placeholder={placeholder}
        />
      );
    }
  );