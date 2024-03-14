const getFactorial = (number) => {
  if (number == 1) {
    return number;
  } else if (number == 0) {
    return 1;
  } else {
    return number * getFactorial(number - 1);
  }
};

const findFactorial = () => {
  const input = document.getElementById("input_number").value;

  if (input.length < 1) {
    alert("Please Enter Number to Find its Factorial");
    return;
  }
  let output = getFactorial(input);
  document.getElementById("result").innerText = output;
};
