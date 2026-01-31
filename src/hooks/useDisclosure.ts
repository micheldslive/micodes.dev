'use client';

import { HTMLAttributes, useCallback, useId, useState } from 'react';

import { useCallbackRef } from './useCallbackRef';

export interface UseDisclosureParamProps {
  open?: boolean;
  defaultOpen?: boolean;
  onClose?: VoidFunction;
  onOpen?: VoidFunction;
  id?: string;
}

export type UseDisclosureReturnProps = ReturnType<typeof useDisclosure>;

type HTMLProps = HTMLAttributes<HTMLElement>;

export function useDisclosure(props: UseDisclosureParamProps = {}) {
  const { onClose: onCloseProp, onOpen: onOpenProp, open, id: idProp } = props;

  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);

  const [openState, setOpen] = useState(props.defaultOpen || false);

  const isOpen = open !== undefined ? open : openState;

  const isControlled = open !== undefined;

  const uid = useId();
  const id = idProp ?? `disclosure-${uid}`;

  const onClose = useCallback(() => {
    if (!isControlled) {
      setOpen(false);
    }
    handleClose?.();
  }, [isControlled, handleClose]);

  const onOpen = useCallback(() => {
    if (!isControlled) {
      setOpen(true);
    }
    handleOpen?.();
  }, [isControlled, handleOpen]);

  const onToggle = useCallback(() => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  }, [isOpen, onOpen, onClose]);

  const getButtonProps = (props: HTMLProps = {}): HTMLProps => ({
    ...props,
    'aria-expanded': isOpen,
    'aria-controls': id,
    onClick(event) {
      props.onClick?.(event);
      onToggle();
    },
  });

  const getDisclosureProps = (props: HTMLProps = {}): HTMLProps => ({
    ...props,
    hidden: !isOpen,
    id,
  });

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setOpen,
    isControlled,
    getButtonProps,
    getDisclosureProps,
  };
}

export type UseDisclosureReturn = ReturnType<typeof useDisclosure>;
