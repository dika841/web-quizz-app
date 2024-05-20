import { InputText } from '@libs/components/atoms';
import { Fieldset } from '@libs/components/templates';
import { TInput, TInputMolecule } from '@libs/entities/common';
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