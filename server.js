import express from 'express';

import router from './server/src/v1/routes/userRoute';
import incident from './server/src/v1/routes/incident.route';

const port = 3001;
const app = express();
app.use(express.json());

app.use('/api/v1/auth', router);
app.use('/api/v1', incident);

app.listen(port);
console.log('app running on port ', port);

export default app;
