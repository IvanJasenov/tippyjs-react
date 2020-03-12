import * as React from 'react';
import {
  default as tippyCore,
  Instance,
  Props,
  Plugin,
  Placement,
} from 'tippy.js';

type Content = React.ReactChild | React.ReactChild[];

export interface TippyProps extends Omit<Partial<Props>, 'content' | 'render'> {
  children?: React.ReactElement<any>;
  content?: Content;
  visible?: boolean;
  disabled?: boolean;
  className?: string;
  singleton?: SingletonObject;
  render?: (
    attrs: {
      'data-placement': Placement;
      'data-reference-hidden'?: string;
      'data-escaped'?: string;
    },
    content?: Content,
  ) => React.ReactNode;
}

declare const Tippy: React.ForwardRefExoticComponent<TippyProps>;
export default Tippy;

export const tippy: typeof tippyCore;

type SingletonHookArgs = {
  instance: Instance;
  content: Content;
  props: Props;
};

type SingletonObject = {
  data?: any;
  hook(args: SingletonHookArgs): void;
};

export interface UseSingletonProps {
  disabled?: boolean;
}

export const useSingleton: (
  props?: UseSingletonProps,
) => [SingletonObject, SingletonObject];
