import prompt from "prompt";

prompt.start();

prompt.get(["number1", "number2"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }

  const number1 = parseFloat(result?.number1 as string);
  const number2 = parseFloat(result?.number2 as string);

  // Calculate the geometric mean
  const geoAverage = Math.pow(number1 * number2, 1 / 2);

  console.log(`Geometric mean of ${number1} and ${number2} is ${geoAverage}`);
});
