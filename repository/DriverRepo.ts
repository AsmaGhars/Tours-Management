import { Driver } from "../model/Driver";

interface IDriverRepo {
  save(driver: Driver): Promise<void>;
  update(driver: Driver): Promise<void>;
  delete(driverId: number): Promise<void>;
  retrieveById(driverId: number): Promise<Driver>;
  retrieveAll(): Promise<Driver[]>;
}

export class DriverRepo implements IDriverRepo {
  async save(driver: Driver): Promise<void> {
    try {
      await Driver.create({
        name: driver.name,
      });
    } catch (error) {
      throw new Error("Failed to create driver!");
    }
  }
  async update(driver: Driver): Promise<void> {
    try {
      const new_driver = await Driver.findOne({
        where: {
          id: driver.id,
        },
      });
      if (!new_driver) {
        throw new Error("Driver not found!");
      }

      new_driver.name = driver.name;

      await new_driver.save();
    } catch (error) {
      throw new Error("Failed to update driver!");
    }
  }
  async delete(driverId: number): Promise<void> {
    try {
      const new_driver = await Driver.findOne({
        where: {
          id: driverId,
        },
      });
      if (!new_driver) {
        throw new Error("Driver not found!.");
      }

      await new_driver.destroy();
    } catch (error) {
      throw new Error("Failed to delete driver!");
    }
  }
  async retrieveById(driverId: number): Promise<Driver> {
    try {
      const new_driver = await Driver.findOne({
        where: {
          id: driverId,
        },
      });
      if (!new_driver) {
        throw new Error("Driver not found!.");
      }
      return new_driver;
    } catch (error) {
      throw new Error("Failed to retrieve driver by id!");
    }
  }
  async retrieveAll(): Promise<Driver[]> {
    try {
      return await Driver.findAll();
    } catch (error) {
      throw new Error("Failed to find all drivers!");
    }
  }
}
