/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useRef, useState } from 'react';
import circleIcon from '../utils/images/circle.png';
import xIcon from '../utils/images/x.png';

let data = ['', '', '', '', '', '', '', '', ''];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const won = (winner) => {
    setLock(true);
    if (winner === 'x') {
      titleRef.current.innerHTML = `Congrats: ${winner} You Win`;
    } else if (winner === 'o') {
      titleRef.current.innerHTML = `Congrats: ${winner} You Win`;
    }
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
      won(data[8]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
      won(data[6]);
    }
  };

  // eslint-disable-next-line consistent-return
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${xIcon}>`;
      data[num] = 'x';
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src='${circleIcon}>`;
      data[num] = 'o';
      setCount(count + 1);
    }
    checkWin();
  };

  const reset = () => {
    setLock(false);
    data = ['', '', '', '', '', '', '', '', ''];
    titleRef.current.innerHTML = 'Tic Tac Toe Game in React';
  };

  return (
    <div className="container">
      <h1 className="title" ref={titleRef}>Tic Tac Toe Game in React</h1>
      <div className="board">
        <div className="row1">
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 0); }}>{data[0]}</button>
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 1); }}>{data[1]}</button>
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 2); }}>{data[2]}</button>
        </div>
        <div className="row2">
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 3); }}>{data[3]}</button>
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 4); }}>{data[4]}</button>
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 5); }}>{data[5]}</button>
        </div>
        <div className="row3">
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 6); }}>{data[6]}</button>
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 7); }}>{data[7]}</button>
          <button className="boxes" type="button" onClick={(e) => { toggle(e, 8); }}>{data[8]}</button>
        </div>
      </div>
      <button className="reset" type="button" onClick={() => { reset(); }}>Reset</button>
    </div>
  );
};

export default TicTacToe;
