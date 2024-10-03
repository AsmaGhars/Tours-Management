import { Sequelize } from "sequelize-typescript";
import * as dotenv from "dotenv";
import { Provider } from "../model/Provider";
import { Image } from "../model/Image";
import { Price } from "../model/Price";
import { Condition } from "../model/Condition";
import { Period } from "../model/Period";
import { Driver } from "../model/Driver";
import { Location } from "../model/Location";
import { Vehicule } from "../model/Vehicule";
import { Tour } from "../model/Tour";
import { ServiceType } from "../model/ServiceType";
import { Private } from "../model/Private";
import { Ordinary } from "../model/Ordinary";
import { Booking } from "../model/Booking";
import { Cancellation } from "../model/Cancellation";
import { User } from "../model/User";
dotenv.config();

class Database {
  public sequelize: Sequelize | undefined;

  private POSTGRES_DB = process.env.POSTGRES_DB as string;
  private POSTGRES_HOST = process.env.POSTGRES_HOST as string;
  private POSTGRES_PORT = process.env.POSTGRES_PORT as unknown as number;
  private POSTGRES_USER = process.env.POSTGRES_USER as string;
  private POSTGRES_PASSWORD = process.env
    .POSTGRES_PASSWORD as unknown as string;

  constructor() {
    this.connectToPostgreSQL();
  }

  private async connectToPostgreSQL() {
    this.sequelize = new Sequelize({
      database: this.POSTGRES_DB,
      username: this.POSTGRES_USER,
      password: this.POSTGRES_PASSWORD,
      host: this.POSTGRES_HOST,
      port: this.POSTGRES_PORT,
      dialect: "postgres",
      models: [
        Provider,
        Image,
        Price,
        Condition,
        Period,
        Driver,
        Location,
        Booking,
        Cancellation,
        User,
        Vehicule,
        Tour,
        ServiceType,
        Private,
        Ordinary,
      ],
    });
    this.sequelize
      .authenticate()
      .then(() => {
        console.log("PostgreSQL connection established successfully.");
      })
      .catch((err) => {
        console.log("Unable to connect to the PostgreSQL database", err);
      });
  }
}

export default Database;
