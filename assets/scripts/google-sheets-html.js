google.charts.load('current', {packages: ['table']});
var visualization;

function drawVisualization() {
    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1UA3xl1wWxmIWCUJhgXnI5htThhQZc91VqHwdUbkrfMQ/gviz/tq?output=html&usp=sharing');
    query.setQuery('SELECT A, B, C, D, E');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        sort: "disable",
        allowHtml: true,
    });
}
google.setOnLoadCallback(drawVisualization);
