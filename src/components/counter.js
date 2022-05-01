import { useState } from "react";
const Counter = () => {
  const [counters, setCounters] = useState([0]);

  return (
    <div key={"div"}>
      <section key={"section"}>
        <button
          className="add-bt"
          onClick={() => {
            const newTab = [...counters];
            newTab.push(0);
            setCounters(newTab);
          }}
          key={"add"}
        >
          Add
        </button>
      </section>
      <section className="counters" key={"counters"}>
        {counters.map((item, index) => {
          return (
            <>
              {index >= 3 && <h1>test</h1>}
              <div key={index + "div"}>
                <div className="counter" key={index + "counter"}>
                  <button
                    className="sign-minus"
                    onClick={() => {
                      const newTab = [...counters];
                      newTab[index] = newTab[index] - 1;
                      setCounters(newTab);
                    }}
                    key={index + "minus"}
                  >
                    -
                  </button>
                  <span className="result " key={index + "result"}>
                    {item}
                  </span>
                  <button
                    className="sign-plus"
                    onClick={() => {
                      const newTab = [...counters];
                      newTab[index] = newTab[index] + 1;
                      setCounters(newTab);
                    }}
                    key={index + "plus"}
                  >
                    +
                  </button>
                </div>
                <div className="reset" key={index + "reset"}>
                  <button
                    className="reset-bt"
                    onClick={() => {
                      const newTab = [...counters];
                      newTab[index] = 0;
                      setCounters(newTab);
                    }}
                    key={index + "reset-bt"}
                  >
                    Reset
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default Counter;
