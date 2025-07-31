function minTimeToVisitAllPoints(points) {
  let totalTime = 0;

  for (let i = 1; i < points.length; i++) {
    const [x1, y1] = points[i - 1];
    const [x2, y2] = points[i];

    totalTime += Math.max(Math.abs(x2 - x1), Math.abs(y2 - y1));
  }

  return totalTime;
}
const points = [
  [1, 1],
  [3, 4],
  [-1, 0],
];
console.log(minTimeToVisitAllPoints(points));
