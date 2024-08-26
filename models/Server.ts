import express, { Application } from "express";
import cors from "cors";

class Server {
  private app: Application;
  private port: string | number;
  private apiPaths = {
    
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    this.middlewares();
    // this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.static("public"));
  }

  // routes(): void {
  //     this.app.use( this.apiPaths.usuarios, userRoutes )
  // }

  listen(): void {
    try {
      this.app.listen(this.port, () => {
        console.log(`Server running on port ${this.port}`);
      });
    } catch (error) {
      console.error('Error starting the server: ', error);
    }
  }
}

export default Server;
