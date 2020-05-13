import React from "react";
import { lazyForPaint } from "react-loosely-lazy";

export const LazyComponent = lazyForPaint(() =>
  /* webpackChunkName: "dependency-async" */ import("./async")
);
