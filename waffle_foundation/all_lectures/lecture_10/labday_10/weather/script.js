const WEATHER_FORECAST =
  "https://www.jma.go.jp/bosai/forecast/data/forecast/010000.json";

const fetch1 = fetch(
  "https://www.jma.go.jp/bosai/forecast/data/forecast/010000.json"
).then(res => {
  return res.json();
});
// .then((data) => data[1].timeSeries[1].areas[1])

console.log(fetch1);
