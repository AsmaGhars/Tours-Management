import { Ordinary } from "../model/Ordinary";

interface IOrdinaryRepo {
  save(ordinary: Ordinary): Promise<void>;
  update(ordinary: Ordinary): Promise<void>;
  delete(ordinaryeId: number): Promise<void>;
  retrieveById(ordinaryId: number): Promise<Ordinary>;
  retrieveAll(): Promise<Ordinary[]>;
}

export class OrdinaryRepo implements IOrdinaryRepo {
  async save(ordinary: Ordinary): Promise<void> {
    try {
      await Ordinary.create({
        capacity: ordinary.capacity,
        name: ordinary.name,
      });
    } catch (error) {
      throw new Error("Failed to create ordinary!");
    }
  }

  async update(ordinary: Ordinary): Promise<void> {
    try {
      const new_ordinary = await Ordinary.findOne({
        where: {
          id: ordinary.id,
        },
      });
      if (!new_ordinary) {
        throw new Error("ordinary not found!");
      }

      new_ordinary.capacity = ordinary.capacity;
      new_ordinary.name = ordinary.name;

      await new_ordinary.save();
    } catch (error) {
      throw new Error("Failed to update ordinary!");
    }
  }

  async delete(ordinaryId: number): Promise<void> {
    try {
      const new_ordinary = await Ordinary.findOne({
        where: {
          id: ordinaryId,
        },
      });
      if (!new_ordinary) {
        throw new Error("ordinary not found!.");
      }

      await new_ordinary.destroy();
    } catch (error) {
      throw new Error("Failed to delete ordinary!");
    }
  }

  async retrieveById(ordinaryId: number): Promise<Ordinary> {
    try {
      const new_ordinary = await Ordinary.findOne({
        where: {
          id: ordinaryId,
        },
      });
      if (!new_ordinary) {
        throw new Error("ordinary not found!.");
      }
      return new_ordinary;
    } catch (error) {
      throw new Error("Failed to retrieve ordinary by id!");
    }
  }

  async retrieveAll(): Promise<Ordinary[]> {
    try {
      return await Ordinary.findAll();
    } catch (error) {
      throw new Error("Failed to find all ordinarys!");
    }
  }
}
