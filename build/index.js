"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = require("./server/Server");
Server_1.server.listen(process.env.PORT || 5335, () => console.log(`App Rodando, porta: ${process.env.PORT || 5335}`));
