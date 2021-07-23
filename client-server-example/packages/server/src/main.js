import { createServer, request } from 'http';
import { parse } from 'querystring';
import  express, { response } from 'express';

const server = express();

server.get('/status', (_, response) => {
    response.send({
        status: 'okay'
    });
});

server.post('/authenticate', express.json(), (request, response) => {
    console.log(request.body.email, request.body.pass);
    response.send()
});

// const server = createServer((request, response) => {
//     switch (request.url) {
//         case '/authenticate': {
//             let data = '';
//             request.on('data',   (chunk) => {
//                 data += chunk
//             });
//             request.on('end', () => {
//                 console.log('=>', parse(data));
//                response.end();
//             });
//             break;
//         }
//         case '/status': {
//             response.writeHead(200, {
//                 'Content-Type': 'application/json',
//             });
//             response.write(
//                 JSON.stringify(
//                     {
//                         status: 'okay',
//                     }
//                 )
//             );
//             response.end();
//             break;
//         }
//         default: {
//             response.writeHead(404, 'Service not found');
//             response.end();
//         }
//     }
// });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME  = process.env.HOSTNAME || '127.0.0.1'
server.listen(PORT, HOSTNAME, () => {
    console.log(`server is listen at http://${HOSTNAME}:${PORT}`)
});
