import { useState } from "react";
import './App.css';

export default function App() {
  const [queues, setQueues] = useState([[], [], []]);
  const [clickedIndices, setClickedIndices] = useState([]);

  const handleClick = (bIndex) => {
    setClickedIndices((prevState) => [bIndex, ...prevState]);
    const newAddedBtnArr = [...queues];
    newAddedBtnArr.forEach((queue, index) => {
      if (index === bIndex) {
        queue.push(1);
      }
    });
    setQueues(newAddedBtnArr);
  };

  const undo = () => {
    let indexOfQueueToRemoveItem = clickedIndices[0];
    const newRemovedBtnArr = [...queues];
    newRemovedBtnArr.forEach((queue, index) => {
      if (index === indexOfQueueToRemoveItem) {
        queue.pop();
      }
    });
    const newClickedIndices = [...clickedIndices];
    newClickedIndices.shift();
    setQueues(newRemovedBtnArr);
    setClickedIndices(newClickedIndices);
  };

  return (
    <div className="App">
      <button style={{ marginBottom: "20px" }} onClick={undo}>
        UNDO
      </button>
      <div>
        <div className="queqes">
          {queues.map((queue, queueIndex) => (
            <div key={queueIndex} className="line">
              <div
                className="queue"
                onClick={() => handleClick(queueIndex)}
              ></div>
              {queue.length === 0 ? (
                <div className="number">0</div>
              ) : (
                queue.map((clickedTimes, ClickedIndex) => (
                  <div key={ClickedIndex} className="number">
                    {ClickedIndex + 1}
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
