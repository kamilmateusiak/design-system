import * as React from 'react';
import cx from 'classnames';

import CheckIcon from 'react-material-icon-svg/dist/CheckIcon';

import { ProgressBar } from './ProgressBar';
import { getProgressStatus, getPercentNumber } from './helpers';
import { noop, ProgressSize, ProgressStatus } from './constants';
import { FileUploadProgressActions } from './FileUploadProgressAction';

const baseClass = 'lc-file-upload-progress';

export enum UploadBarMode {
  Single = 'single',
  Multiple = 'multiple',
}

export enum UploadProgressActionState {
  Visible = 'visible',
  Hover = 'hover',
  Hidden = 'hidden',
}

export interface IProps {
  actionsVisibilityState?: UploadProgressActionState;
  className?: string;
  icon?: React.ReactNode;
  onCloseButtonClick?(): void;
  onRetryButtonClick?(): void;
  percent?: number;
  size?: ProgressSize;
  status?: ProgressStatus;
  title?: string;
}

export const FileUploadProgress: React.ExoticComponent<
  IProps & React.RefAttributes<HTMLInputElement>
> = React.forwardRef(
  (
    {
      actionsVisibilityState,
      className = '',
      icon,
      onCloseButtonClick = noop,
      onRetryButtonClick = noop,
      percent = 0,
      size = ProgressSize.Medium,
      status = ProgressStatus.Normal,
      title = '',
      ...restProps
    },
    ref: React.LegacyRef<HTMLInputElement>
  ) => {
    const progressStatus = getProgressStatus(status, percent);
    const percentNumber = getPercentNumber(progressStatus, percent);

    const mergedClassNames = cx(
      baseClass,
      {
        [`${baseClass}--with-icon`]: icon,
        [`${baseClass}--error`]: progressStatus === ProgressStatus.Error,
        [`${baseClass}--success`]: progressStatus === ProgressStatus.Success,
        [`${baseClass}--with-actions-on-hover`]:
          actionsVisibilityState === UploadProgressActionState.Hover,
      },
      className
    );

    return (
      <div {...restProps} className={mergedClassNames} ref={ref}>
        {icon && progressStatus !== ProgressStatus.Success && (
          <div className={`${baseClass}__icon`}>{icon}</div>
        )}
        {progressStatus === ProgressStatus.Success && (
          <div className={`${baseClass}__success-icon`}>
            <CheckIcon />
          </div>
        )}
        <div className={`${baseClass}__wrapper`}>
          <div className={`${baseClass}__header`}>
            {title && <div className={`${baseClass}__title`}>{title}</div>}

            <FileUploadProgressActions
              onRetryButtonClick={onRetryButtonClick}
              onCloseButtonClick={onCloseButtonClick}
              isVisible={actionsVisibilityState !== 'hidden'}
              progressStatus={progressStatus}
            />
          </div>
          {progressStatus !== ProgressStatus.Success && (
            <ProgressBar
              size={size}
              percent={percentNumber}
              status={progressStatus}
            />
          )}
        </div>
      </div>
    );
  }
);
