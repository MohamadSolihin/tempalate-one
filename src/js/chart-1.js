const ctx = document.getElementById("barchart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "des",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [250, 200, 320, 250, 150, 190, 320, 230, 260, 180, 200, 300, 200],
        backgroundColor: "rgba(255, 206, 86, 0.6)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        max: 400,
      },
      y: {
        max: 400,
      },
    },
  },
});
