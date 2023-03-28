import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect(() => {
        document.title = count;
    }, [count]);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        document.title = count2;
    }, [count2]);
    useEffect(() => {
        console.log('creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('Cleaning up!');
            clearInterval(interval);
        }
    }, []);
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
        <h2>Time is {time}</h2>
    </div>
  )
}

export default UseEffectCounter