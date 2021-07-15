var labels = ['January','February','March','April','MAy','June'];

var data = {
    labels: labels,
    datasets: [{
        label:'初めてのグラフ',
        borderColor: 'rgb(255,100,130',
        data: [0,10,15,3,20,60,10],
    }]
};

var config = {
    type: 'line',
    data,
    options: {},
};

var linechart = new Chart(
    document.getElementById('linechart'),
    config,
);