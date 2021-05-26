let color = ["#3c78D8", "#00abf2", "#00d6e7", "#70facb"];

let label = ["1", "2", "3", "4", "5", "6", "7", "8"];
// 1
const data = {
  labels: [...label],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 250, 150, 386, 99, 125, 399, 172],
      backgroundColor: [...color],
      hoverOffset: 4,
    },
  ],
};
const config = {
  type: "pie",
  data: data,
  options: {
    plugins: {
      legend: {
        display: false,
        position: "left",
      },
    },

    responsive: false,
    maintainAspectRatio: false,
  },
};
var myChart = new Chart(document.getElementById("myChart"), config);
// 2
const data2 = {
  labels: [...label],
  datasets: [
    {
      label: "My First Dataset",
      data: [200, 250, 190, 156, 99, 125, 499, 172],
      backgroundColor: [...color],
      hoverOffset: 4,
    },
  ],
};
const config2 = {
  type: "pie",
  data: data2,
  options: {
    plugins: {
      legend: {
        display: false,
        position: "left",
      },
    },
    responsive: false,
    maintainAspectRatio: false,
  },
};
var myChart2 = new Chart(document.getElementById("myChart2"), config2);
// 3
const data1 = {
  labels: [...label],
  datasets: [
    {
      label: "My First Dataset",
      data: [200, 250, 190, 156, 99, 125, 499, 172],
      backgroundColor: [...color],
      hoverOffset: 4,
    },
  ],
};
const config1 = {
  type: "bar",
  data: data1,
  options: {
    
    responsive: true,
    maintainAspectRatio: false,
  },
};
var myChart = new Chart(document.getElementById("myChart1"), config1);
// 3
const data3 = {
  labels: [...label],
  datasets: [
    {
      label: "My First Dataset",
      data: [200, 250, 190, 156, 99, 125, 499, 172],
      backgroundColor: [...color],
      hoverOffset: 4,
    },
  ],
};
const config3 = {
  type: "line",
  data: data3,
  options: {
    responsive: true,
    maintainAspectRatio: false,
  },
};
var myChart3 = new Chart(document.getElementById("myChart3"), config3);

// $(function () {
//   $("div#mutule_fund").hide();
//   $("#customSwitch1").on("click", function () {
//     $("#bond, #mutule_fund").toggle();
//     $("#btn_name").text() === "Bond" ? "Mutule Fund" : "Bond";
//     console.log($("#btn_name").text() === "Bond" ? "Mutule Fund" : "Bond");
//   });
// });
