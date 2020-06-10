import { Server } from './server.ts';


const serverConfigs = {
    defaultPort: 3000,
    boardRows: 16,
    boardColumns: 16
}
let server = new Server(serverConfigs);

server.init();