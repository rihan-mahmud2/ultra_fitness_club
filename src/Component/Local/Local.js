const addTo = (time) => {
  localStorage.setItem("Amount", time);
};
const addToBreak = (time) => {
  localStorage.setItem("Break", time);
};

export { addTo, addToBreak };
