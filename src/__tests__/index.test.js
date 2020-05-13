import React from 'react';
import { LazySuspense } from 'react-loosely-lazy';
import { LazyComponent } from '../';
import { act, render } from '@testing-library/react';

export const nextTick = () => new Promise(r => setTimeout(r, 0));

describe('index', () => {
  it('should mount the component', async () => {
    let result;
    const Loading = () => <div>loading...</div>;
    const App = () => (
      <LazySuspense fallback={<Loading />}>
        <LazyComponent />
      </LazySuspense>
    );

    await act(async () => {
      result = render(<App />);

      await nextTick();
    });

    const { container } = result;

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div>
          I am a lazy component that is from a dependency
        </div>
      </div>
    `);
  });
});
