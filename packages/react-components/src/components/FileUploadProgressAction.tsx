import * as React from 'react';
import CloseIcon from 'react-material-icon-svg/dist/CloseIcon';
import RefreshIcon from 'react-material-icon-svg/dist/RefreshIcon';

import { noop, ProgressStatus } from './constants';

const baseClass = 'lc-file-upload-progress';

interface IProps {
  onCloseButtonClick?(): void;
  onRetryButtonClick?(): void;
  progressStatus?: ProgressStatus;
  isVisible?: boolean;
}

export const FileUploadProgressActions: React.FC<IProps> = ({
  onCloseButtonClick = noop,
  onRetryButtonClick = noop,
  progressStatus = ProgressStatus.Normal,
  isVisible = true,
}) => {
  if (
    (onRetryButtonClick === noop && onCloseButtonClick === noop) ||
    !isVisible
  ) {
    return null;
  }

  return (
    <div className={`${baseClass}__actions`}>
      {onRetryButtonClick && progressStatus === 'error' && (
        <button
          type="button"
          className={`${baseClass}__retry`}
          aria-label="Retry"
          onClick={() => onRetryButtonClick}
        >
          <RefreshIcon />
        </button>
      )}
      {onCloseButtonClick && progressStatus !== ProgressStatus.Success && (
        <button
          type="button"
          className={`${baseClass}__close`}
          aria-label="Close"
          onClick={onCloseButtonClick}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
