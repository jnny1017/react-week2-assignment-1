import { useState } from 'react';

import Buttons from './Buttons';
import Counter from './Counter';

export default function Page() {
  const [count, setCount] = useState(0);

  function handleClickCounter() {
    setCount(count + 1);
  }

  function handleClickButton(i) {
    setCount(count + i);
  }

  return (
    <>
      <Counter
        count={count}
        onClick={handleClickCounter}
      />
      <Buttons onClick={handleClickButton} />
    </>
  );
}
