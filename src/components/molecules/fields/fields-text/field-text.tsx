import { InputText } from '@/components';
import { Fieldset } from '@/components';
import { TInput, TInputMolecule } from '@/entities';
import { ReactElement, forwardRef } from 'react';


export const FieldText = forwardRef<HTMLInputElement, TInput & TInputMolecule>(
  (props, ref): ReactElement => {
    return (
      <Fieldset {...props}>
        <InputText {...props} ref={ref} />
      </Fieldset>
    );
  }
);