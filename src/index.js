import { lazyForPaint } from 'react-loosely-lazy';

export const LazyComponent = lazyForPaint(() =>
  /* webpackChunkName: "dependency-async" */ import('./async')
);

export const SOME_VAR = true;
