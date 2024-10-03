import { Location } from "../model/Location";

interface ILocationRepo {
  save(location: Location): Promise<void>;
  update(location: Location): Promise<void>;
  delete(locationId: number): Promise<void>;
  retrieveById(locationId: number): Promise<Location>;
  retrieveAll(): Promise<Location[]>;
}

export class LocationRepo implements ILocationRepo {
  async save(location: Location): Promise<void> {
    try {
      await Location.create({
        country: location.country,
        city: location.city,
        area: location.area,
        type: location.type,
        location: location.location,
        active: location.active,
        address: location.address,
      });
    } catch (error) {
      throw new Error("Failed to create location!");
    }
  }
  async update(location: Location): Promise<void> {
    try {
      const new_location = await Location.findOne({
        where: {
          id: location.id,
        },
      });
      if (!new_location) {
        throw new Error("Location not found!");
      }
      (new_location.country = location.country),
        (new_location.city = location.city),
        (new_location.area = location.area),
        (new_location.type = location.type),
        (new_location.location = location.location),
        (new_location.active = location.active),
        (new_location.address = location.address),
        await new_location.save();
    } catch (error) {
      throw new Error("Failed to update location!");
    }
  }
  async delete(locationId: number): Promise<void> {
    try {
      const new_location = await Location.findOne({
        where: {
          id: locationId,
        },
      });
      if (!new_location) {
        throw new Error("Location not found!.");
      }

      await new_location.destroy();
    } catch (error) {
      throw new Error("Failed to delete location!");
    }
  }
  async retrieveById(locationId: number): Promise<Location> {
    try {
      const new_location = await Location.findOne({
        where: {
          id: locationId,
        },
      });
      if (!new_location) {
        throw new Error("Location not found!.");
      }
      return new_location;
    } catch (error) {
      throw new Error("Failed to retrieve location by id!");
    }
  }
  async retrieveAll(): Promise<Location[]> {
    try {
      return await Location.findAll();
    } catch (error) {
      throw new Error("Failed to find all Locations!");
    }
  }
}
