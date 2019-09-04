var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
var url = require('url');
var qs = require('querystring');

app.listen(3002);

var routes = {
    get: function (route, fn) {
        this['GET:' + route] = fn;
    },
    post: function (route, fn) {
        this['POST:' + route] = fn;
    }
};

routes.post('/hosts', function (req, res) {
    var body = '';

    req.on('data', function (data) {
        body += data;

        // Too much POST data, kill the connection!
        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6)
            req.connection.destroy();
    });

    req.on('end', function () {
        var post = qs.parse(body);
        var host = post.host;
        // Function to find JSON data
        var jsonContent = getDataJson();
        var filteredHost = jsonContent.data.filter(function(hostData){
            return hostData.name == host;
        });

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.writeHeader(200, {"Content-Type": "application/json"});
        var json = JSON.stringify(filteredHost);
        res.end(json);
    });
});

function handler (req, res) {
    var purl = url.parse(req.url);
    var pathname = purl.pathname;

    var key = req.method + ':' + pathname;

    if (typeof routes[key] === 'function')
        routes[key](req, res);
    else {
        res.writeHeader(404);
        res.end();
    }
}

function getDataJson() {
    // Get content from file
    var contents = fs.readFileSync("data.json");
    // Define to JSON type
    return jsonContent = JSON.parse(contents);
}

function allHostsDataToEmit(socket) {
    console.log("\n *STARTING* \n");
    // Function to find JSON data
    var jsonContent = getDataJson();
    var hostData = jsonContent.data.reduce(function(res, obj) {
        if (!(obj.name in res))
            res.__array.push(res[obj.name] = obj);
        else {
            if(!res[obj.name].counts) {
                res[obj.name].counts = 1;
            }
            var count = obj.counts||1;
            res[obj.name].counts += count;
        }
        return res;
    }, {__array:[]}).__array
    .sort(function(a,b) { return b.counts - a.counts; });

    socket.emit('hosts', hostData);
}

io.on('connection', function (socket) {
    var fs = require("fs");
    allHostsDataToEmit(socket)
    setInterval(function() {
        allHostsDataToEmit(socket)
    }, 1000*50); // Interval in miliseconds (1000*60) 1 min interval for now
});
