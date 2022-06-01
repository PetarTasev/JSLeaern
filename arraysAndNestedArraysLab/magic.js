function maigic(array) {
  let magical = true;
  for (let i = 0; i < array.length - 1; i++) {
    const firstRow = array[i].reduce((a, b) => a + b, 0);
    const secondRoe = array[i + 1].reduce((a, b) => a + b, 0);

    let firstCow = 0;
    let secondCow = 0;
    for (let n = 0; n < array.length; n++) {
      firstCow += array[i][n];
      secondCow += array[i + 1][n];
    }

    if (firstCow != secondCow || firstRow != secondRoe) {
      magical = false;
    }
  }
  return magical;
}
