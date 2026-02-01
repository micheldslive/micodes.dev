import { type LottieRefCurrentProps } from 'lottie-react';
import { useRef } from 'react';

export const useLottieAnimation = () => {
  const ref = useRef<LottieRefCurrentProps>(null);

  const play = () => ref.current?.play();
  const stop = () => ref.current?.stop();

  return { ref, play, stop };
};
