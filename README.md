# React Loosely Lazy Component 

A simple [`react-loosely-lazy`](https://github.com/atlassian-labs/react-loosely-lazy) component that is consumed by [`react-loosely-lazy-app`](https://github.com/rohan-deshpande/react-loosely-lazy-app). This asserts that consuming components that use `react-loosely-lazy` internally is supported at both runtime and build time. 

One caveat here is that, due to https://github.com/webpack/webpack/issues/2933, webpack currently cannot bundle this component in a way that enables runtime support in a consuming app. To achieve this, we are simply transpiling the source code for the component with babel.