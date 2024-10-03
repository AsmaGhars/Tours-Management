import { Condition } from "../model/Condition";

interface IConditionRepo {
  save(condition: Condition): Promise<void>;
  update(condition: Condition): Promise<void>;
  delete(conditionId: number): Promise<void>;
  retrieveById(conditionId: number): Promise<Condition>;
  retrieveAll(): Promise<Condition[]>;
}

export class ConditionRepo implements IConditionRepo {
  async save(condition: Condition): Promise<void> {
    try {
      await Condition.create({
        value: condition.value,
        percent: condition.percent,
        before: condition.before,
        all_seasons: condition.all_seasons,
      });
    } catch (error) {
      throw new Error("Failed to create condition!");
    }
  }
  async update(condition: Condition): Promise<void> {
    try {
      const new_condition = await Condition.findOne({
        where: {
          id: condition.id,
        },
      });
      if (!new_condition) {
        throw new Error("Condition not found!");
      }

      new_condition.value = condition.value;
      new_condition.percent = condition.percent;
      new_condition.before = condition.before;
      new_condition.all_seasons = condition.all_seasons;

      await new_condition.save();
    } catch (error) {
      throw new Error("Failed to update condition!");
    }
  }
  async delete(conditionId: number): Promise<void> {
    try {
      const new_condition = await Condition.findOne({
        where: {
          id: conditionId,
        },
      });
      if (!new_condition) {
        throw new Error("Condition not found!.");
      }

      await new_condition.destroy();
    } catch (error) {
      throw new Error("Failed to delete condition!");
    }
  }
  async retrieveById(conditionId: number): Promise<Condition> {
    try {
      const new_condition = await Condition.findOne({
        where: {
          id: conditionId,
        },
      });
      if (!new_condition) {
        throw new Error("Condition not found!.");
      }
      return new_condition;
    } catch (error) {
      throw new Error("Failed to retrieve condition by id!");
    }
  }
  async retrieveAll(): Promise<Condition[]> {
    try {
      return await Condition.findAll();
    } catch (error) {
      throw new Error("Failed to find all conditions!");
    }
  }
}
