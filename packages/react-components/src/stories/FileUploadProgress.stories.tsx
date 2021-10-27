import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import {
  FileUploadProgress as FileUploadProgressComponent,
  IProps as IFileUploadProgressProps,
} from '../components/FileUploadProgress';

export default {
  title: 'Components/Progress Bar',
  component: FileUploadProgressComponent,
} as ComponentMeta<typeof FileUploadProgressComponent>;

export const FileUploadProgress = (
  args: IFileUploadProgressProps
): React.ReactElement => {
  return (
    <div>
      <FileUploadProgressComponent {...args} />
    </div>
  );
};

FileUploadProgress.args = {
  percent: 10,
  status: 'normal',
  size: 'medium',
  title: 'file.pdf',
};
