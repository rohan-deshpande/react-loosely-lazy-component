import { lazyForPaint } from 'react-loosely-lazy';

export const LazyComponent = lazyForPaint(() =>
  import(/* webpackChunkName: "dependency-async" */ './async')
);
