'use client';

import parse from 'html-react-parser';
import { useKBar } from 'kbar';
import { useTranslation } from 'react-i18next';

import { useMediaQuery } from '@/hooks';
import { CommandButtonProps } from '@/types';
import { getDeviceType } from '@/utils/functions';

import { Button as ButtonUI } from '../Button';

export const Button = ({ type }: CommandButtonProps) => {
  const { query } = useKBar();
  const isMobile = useMediaQuery('(max-width: 62rem)');
  const { t } = useTranslation();
  const translation = {
    mobile: t('common.kbar.start.mobile'),
    mac: parse(
      t('common.kbar.start.desktop', {
        cmd: '⌘',
        key: 'K',
      }),
    ),
    windows: parse(
      t('common.kbar.start.desktop', {
        cmd: 'ctrl',
        key: 'K',
      }),
    ),
  };

  const deviceType = type || (isMobile ? 'mobile' : getDeviceType());

  return (
    <ButtonUI
      variant="transparent"
      onClick={query.toggle}
      aria-label="cmd-button"
      className="flex gap-1"
    >
      {translation[deviceType]}
    </ButtonUI>
  );
};
