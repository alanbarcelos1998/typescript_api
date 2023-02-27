import { server } from './server/Server';

server.listen(process.env.PORT || 5335, () => console.log(`App Rodando, porta: ${process.env.PORT || 5335}`));

