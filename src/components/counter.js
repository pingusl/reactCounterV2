import { useState } from "react";
const Counter = () => {
  const [counters, setCounters] = useState([0]);
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <section className="counters">
          {counters.map((item, index) => {
            return (
              <div className="counter" key={index}>
                <button
                  onClick={() => {
                    const newTab = [...counters];
                    newTab[index] = newTab[index] + 1;
                    setCounters(newTab);
                  }}
                >
                  -
                </button>
                <span>{item}</span>
                <button
                  onClick={() => {
                    const newTab = [...counters];
                    newTab[index] = newTab[index] + 1;
                    setCounters(newTab);
                  }}
                >
                  +
                </button>
              </div>
            );
          })}
        </section>
        <section>
          <button
            onClick={() => {
              const newTab = [...counters];
              newTab.push(0);
              setCounters(newTab);
            }}
          >
            Add
          </button>
          <button
            onClick={() => {
              setCounters([0]);
            }}
          >
            Reset
          </button>
        </section>
      </div>
    </div>
  );
};

export default Counter;
