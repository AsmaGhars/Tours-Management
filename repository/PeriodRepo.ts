import { Period } from "../model/Period";

interface IPeriodRepo {
  save(period: Period): Promise<void>;
  update(period: Period): Promise<void>;
  delete(periodeId: number): Promise<void>;
  retrieveById(periodId: number): Promise<Period>;
  retrieveAll(): Promise<Period[]>;
}

export class PeriodRepo implements IPeriodRepo {
  async save(period: Period): Promise<void> {
    try {
      await Period.create({
        base_price: period.base_price,
        type: period.type,
        times: period.times,
        every_day: period.every_day,
        operation: period.operation,
        margin: period.margin,
        percent: period.percent,
        from: period.from,
        to: period.to,
        id_condition: period.id_condition,
        id_price: period.id_price,
      });
    } catch (error) {
      throw new Error("Failed to create period!");
    }
  }

  async update(period: Period): Promise<void> {
    try {
      const new_period = await Period.findOne({
        where: {
          id: period.id,
        },
      });
      if (!new_period) {
        throw new Error("period not found!");
      }

      new_period.base_price = period.base_price;
      new_period.type = period.type;
      new_period.times = period.times;
      new_period.every_day = period.every_day;
      new_period.operation = period.operation;
      new_period.margin = period.margin;
      new_period.percent = period.percent;
      new_period.from = period.from;
      new_period.to = period.to;
      new_period.id_condition = period.id_condition;
      new_period.id_price = period.id_price;

      await new_period.save();
    } catch (error) {
      throw new Error("Failed to update period!");
    }
  }

  async delete(periodId: number): Promise<void> {
    try {
      const new_period = await Period.findOne({
        where: {
          id: periodId,
        },
      });
      if (!new_period) {
        throw new Error("period not found!.");
      }

      await new_period.destroy();
    } catch (error) {
      throw new Error("Failed to delete period!");
    }
  }

  async retrieveById(periodId: number): Promise<Period> {
    try {
      const new_period = await Period.findOne({
        where: {
          id: periodId,
        },
      });
      if (!new_period) {
        throw new Error("period not found!.");
      }
      return new_period;
    } catch (error) {
      throw new Error("Failed to retrieve period by id!");
    }
  }

  async retrieveAll(): Promise<Period[]> {
    try {
      return await Period.findAll();
    } catch (error) {
      throw new Error("Failed to find all Periods!");
    }
  }
}
