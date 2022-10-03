// https://stackoverflow.com/questions/35728117/difference-between-import-http-requirehttp-and-import-as-http-from-htt
import * as http from 'http';                   
import {StatusCodes} from 'http-status-codes';
const port = process.env.PORT || 3000;

const app = http.createServer((request, response) => {                  
    console.log("Received an incoming request!");
    response.writeHead(StatusCodes.OK, {
      "Content-Type": "text/html"
    });                                                             

    let responseMessage = "<h1>Hello, World</h1>";
    response.write(responseMessage);
    response.end();
    console.log(`Sent a response : ${responseMessage}`);
});

app.listen(port, () => {                                                 
    console.log(`The server has started and is listening on port number:${port}`)
});