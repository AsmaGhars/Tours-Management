import { Private } from "../model/Private";

interface IPrivateRepo {
  save(data: Private): Promise<void>;
  update(data: Private): Promise<void>;
  delete(privateId: number): Promise<void>;
  retrieveById(privateId: number): Promise<Private>;
  retrieveAll(): Promise<Private[]>;
}

export class PrivateRepo implements IPrivateRepo {
  async save(data: Private): Promise<void> {
    try {
      await Private.create({
        id_vehicule: data.id_vehicule,
        name: data.name,
      });
    } catch (error) {
      throw new Error("Failed to create private!");
    }
  }

  async update(data: Private): Promise<void> {
    try {
      const new_private = await Private.findOne({
        where: {
          id: data.id,
        },
      });
      if (!new_private) {
        throw new Error("private not found!");
      }

      new_private.id_vehicule = data.id_vehicule;
      new_private.name = data.name;

      await new_private.save();
    } catch (error) {
      throw new Error("Failed to update private!");
    }
  }

  async delete(privateId: number): Promise<void> {
    try {
      const new_private = await Private.findOne({
        where: {
          id: privateId,
        },
      });
      if (!new_private) {
        throw new Error("private not found!.");
      }

      await new_private.destroy();
    } catch (error) {
      throw new Error("Failed to delete private!");
    }
  }

  async retrieveById(privateId: number): Promise<Private> {
    try {
      const new_private = await Private.findOne({
        where: {
          id: privateId,
        },
      });
      if (!new_private) {
        throw new Error("private not found!.");
      }
      return new_private;
    } catch (error) {
      throw new Error("Failed to retrieve private by id!");
    }
  }

  async retrieveAll(): Promise<Private[]> {
    try {
      return await Private.findAll();
    } catch (error) {
      throw new Error("Failed to find all privates!");
    }
  }
}
