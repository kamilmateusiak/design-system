import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import {
  CheckboxField as CheckboxFieldComponent,
  ICheckboxFieldProps,
} from '../components/CheckboxField';

export default {
  title: 'Components/CheckboxField',
  component: CheckboxFieldComponent,
} as ComponentMeta<typeof CheckboxFieldComponent>;

export const CheckboxField = (
  args: ICheckboxFieldProps
): React.ReactElement => {
  return <CheckboxFieldComponent {...args} />;
};

CheckboxField.args = {
  checked: false,
  disabled: false,
  description: 'Help text',
  children: 'Checkbox label',
} as ICheckboxFieldProps;