import React, { forwardRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import Duck from '../Shared/Duck';
import { duckFamily, ducksSunk } from './atoms';

const RecoilDuck = forwardRef(({ id }, ref) => {
  const [duck, setDuckState] = useRecoilState(duckFamily(id));
  const setDucksSummary = useSetRecoilState(ducksSunk);

  return (
    <Duck
      ref={ref}
      onClick={() => {
        setDucksSummary((oldDuckSummary) => {
          return duck.visible ? oldDuckSummary + 1 : oldDuckSummary - 1;
        });
        setDuckState((oldDuck) => {
          return { visible: !oldDuck.visible };
        });
      }}
      visible={duck.visible}
    />
  );
});

export default React.memo(RecoilDuck);
