import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import ProviderRouter from "./router/ProviderRouter";
import ImageRouter from "./router/ImageRouter";
import PriceRouter from "./router/PriceRouter";
import ConditionRouter from "./router/ConditionRouter";
import LocationRouter from "./router/LocationRouter";
import PeriodRouter from "./router/PeriodRouter";
import TourRouter from "./router/TourRouter";
import ServiceTypeRouter from "./router/ServiceTypeRouter";
import PrivateRouter from "./router/PrivateRouter";
import OrdinaryRouter from "./router/OrdinaryRouter";
import VehiculeRouter from "./router/VehiculeRouter";
import DriverRouter from "./router/DriverRouter";
import UserRouter from "./router/UserRouter";
import BookingRouter from "./router/BookingRouter";
import CancellationRouter from "./router/CancellationRouter";

import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.databaseSync();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  protected databaseSync(): void {
    const db = new Database();
    db.sequelize?.sync();
  }

  protected routes(): void {
    this.app.route("/").get((req: Request, res: Response) => {
      res.send("welcome home");
    });
    this.app.use("/api/v1/provider", ProviderRouter);
    this.app.use("/api/v1/image", ImageRouter);
    this.app.use("/api/v1/price", PriceRouter);
    this.app.use("/api/v1/condition", ConditionRouter);
    this.app.use("/api/v1/location", LocationRouter);
    this.app.use("/api/v1/period", PeriodRouter);
    this.app.use("/api/v1/tour", TourRouter);
    this.app.use("/api/v1/service_type", ServiceTypeRouter);
    this.app.use("/api/v1/private", PrivateRouter);
    this.app.use("/api/v1/ordinary", OrdinaryRouter);
    this.app.use("/api/v1/vehicule", VehiculeRouter);
    this.app.use("/api/v1/driver", DriverRouter);
    this.app.use("/api/v1/user", UserRouter);
    this.app.use("/api/v1/booking", BookingRouter);
    this.app.use("/api/v1/cancellation", CancellationRouter);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Your API",
    version: "1.0.0",
    description: "API documentation for your project",
  },
  servers: [
    {
      url: "http://localhost:8000",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/router/**/*.ts"],
};
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
