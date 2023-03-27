import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        document.title = count2;
    }, [count2]);
  return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increment Count ({count})
        </button>
        <button onClick={
            () => setCount2(count2 => count2 + 1)
        }>
            Increment Count 2 ({count2})
        </button>
    </div>
  )
}

export default UseEffectCounter