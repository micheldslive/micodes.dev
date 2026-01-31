'use client';

import parse from 'html-react-parser';
import { useKBar } from 'kbar';
import { useTranslation } from 'react-i18next';

import { CommandPalleteProps } from '@/types';
import { getDeviceType } from '@/utils/functions';

import { Button } from '../Button';

export const CommandPalette = ({ type }: CommandPalleteProps) => {
  const { query } = useKBar();
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

  const deviceType = type || getDeviceType();

  return (
    <Button variant="transparent" onClick={query.toggle} aria-label="cmd-palette">
      {translation[deviceType]}
    </Button>
  );
};
