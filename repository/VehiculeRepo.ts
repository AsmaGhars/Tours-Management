import { Vehicule } from "../model/Vehicule";

interface IVehiculeRepo {
  save(vehicule: Vehicule): Promise<void>;
  update(vehicule: Vehicule): Promise<void>;
  delete(vehiculeId: number): Promise<void>;
  retrieveById(vehiculeId: number): Promise<Vehicule>;
  retrieveAll(): Promise<Vehicule[]>;
}

export class VehiculeRepo implements IVehiculeRepo {
  async save(vehicule: Vehicule): Promise<void> {
    try {
      await Vehicule.create({
        id_driver: vehicule.id_driver,
        matricule: vehicule.matricule,
        type: vehicule.type,
        capacity: vehicule.capacity,
      });
    } catch (error) {
      throw new Error("Failed to create vehicule!");
    }
  }
  async update(vehicule: Vehicule): Promise<void> {
    try {
      const new_vehicule = await Vehicule.findOne({
        where: {
          id: vehicule.id,
        },
      });
      if (!new_vehicule) {
        throw new Error("Vehicule not found!");
      }
      new_vehicule.id_driver = vehicule.id_driver;
      new_vehicule.matricule = vehicule.matricule;
      new_vehicule.type = vehicule.type;
      new_vehicule.capacity = vehicule.capacity;

      await new_vehicule.save();
    } catch (error) {
      throw new Error("Failed to update Vehicule!");
    }
  }
  async delete(vehiculeId: number): Promise<void> {
    try {
      const new_vehicule = await Vehicule.findOne({
        where: {
          id: vehiculeId,
        },
      });
      if (!new_vehicule) {
        throw new Error("Vehicule not found!.");
      }

      await new_vehicule.destroy();
    } catch (error) {
      throw new Error("Failed to delete vehicule!");
    }
  }
  async retrieveById(vehiculeId: number): Promise<Vehicule> {
    try {
      const new_vehicule = await Vehicule.findOne({
        where: {
          id: vehiculeId,
        },
      });
      if (!new_vehicule) {
        throw new Error("Vehicule not found!.");
      }
      return new_vehicule;
    } catch (error) {
      throw new Error("Failed to retrieve proider by id!");
    }
  }
  async retrieveAll(): Promise<Vehicule[]> {
    try {
      return await Vehicule.findAll();
    } catch (error) {
      throw new Error("Failed to find all vehicules!");
    }
  }
}
