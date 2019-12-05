import express from 'express';
import bodyParser from 'body-parser';
import './server/src/v2/models/database';

import router from './server/src/v1/routes/userRoute';
import incident from './server/src/v1/routes/incident.route';
import admin from './server/src/v1/routes/admin.route';

import router_v2 from './server/src/v2/routes/userRoute';
import incident_v2 from './server/src/v2/routes/incident.route'; 
import admin_v2 from './server/src/v2/routes/admin.route';

const port = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({extended : true }));
app.use(express.json());

app.use('/api/v1/auth', router);
app.use('/api/v1', incident);
app.use('/api/v1/admin',admin);

app.use('/api/v2/auth', router_v2);
app.use('/api/v2', incident_v2);
app.use('/api/v2/admin',admin_v2);

app.listen(port);
console.log('app running on port ', port);

export default app;
