const throttle = (callback, delayBetweenFrames = 1000) => {
  let timeoutId, lastCallTime;

  return (...rest) => {
    const elapsedTime = Date.now() - lastCallTime;
    const delay = Math.max(delayBetweenFrames - elapsedTime, 0);

    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...rest);
      lastCallTime = Date.now();
    }, delay);
  };
};

const setButtonDisabled = (button, flag) => {
  button.disabled = flag;
  button.textContent = flag ? 'Отправляем...' : 'Отправить';
};

export { throttle, setButtonDisabled };
