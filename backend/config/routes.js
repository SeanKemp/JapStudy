import userRoutes from '../routes/user.routes.js'
import authRoutes from '../routes/auth.routes.js'
import dataRoutes from '../routes/data.routes.js'
import config from './config.js'

const router = function(app){
  
    // Redirecting path requests to routes and allowing CORS
    app.use('/', authRoutes);
    app.use('/', userRoutes);
    app.use("/api/users", function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:" + config.port); 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });
    app.use('/', dataRoutes);
    app.use("/api/alljpdata", function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "http://localhost:" + config.port); 
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
      next();
    });

    
  }

  export default router; 