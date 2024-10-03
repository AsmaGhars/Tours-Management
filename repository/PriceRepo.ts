import { Price } from "../model/Price";

interface IPriceRepo {
  save(price: Price): Promise<void>;
  update(price: Price): Promise<void>;
  delete(priceId: number): Promise<void>;
  retrieveById(priceId: number): Promise<Price>;
  retrieveAll(): Promise<Price[]>;
}

export class PriceRepo implements IPriceRepo {
  async save(price: Price): Promise<void> {
    try {
      await Price.create({
        price: price.price,
        price_to_show: price.price_to_show,
        child_price: price.child_price,
        child_price_to_show: price.child_price_to_show,
        times: price.times,
        operation: price.operation,
        margin: price.margin,
        percent: price.percent,
        operation_b2c: price.operation_b2c,
        margin_b2c: price.margin_b2c,
        percent_b2c: price.percent_b2c,
      });
    } catch (error) {
      throw new Error("Failed to create price!");
    }
  }
  async update(price: Price): Promise<void> {
    try {
      const new_price = await Price.findOne({
        where: {
          id: price.id,
        },
      });
      if (!new_price) {
        throw new Error("Price not found!");
      }
      new_price.price = price.price;
      new_price.price_to_show = price.price_to_show;
      new_price.child_price = price.child_price;
      new_price.child_price_to_show = price.child_price_to_show;
      new_price.times = price.times;
      new_price.operation = price.operation;
      new_price.margin = price.margin;
      new_price.percent = price.percent;
      new_price.operation_b2c = price.operation_b2c;
      new_price.margin_b2c = price.margin_b2c;
      new_price.percent_b2c = price.percent_b2c;

      await new_price.save();
    } catch (error) {
      throw new Error("Failed to update price!");
    }
  }
  async delete(priceId: number): Promise<void> {
    try {
      const new_price = await Price.findOne({
        where: {
          id: priceId,
        },
      });
      if (!new_price) {
        throw new Error("Price not found!.");
      }

      await new_price.destroy();
    } catch (error) {
      throw new Error("Failed to delete price!");
    }
  }
  async retrieveById(priceId: number): Promise<Price> {
    try {
      const new_price = await Price.findOne({
        where: {
          id: priceId,
        },
      });
      if (!new_price) {
        throw new Error("Price not found!.");
      }
      return new_price;
    } catch (error) {
      throw new Error("Failed to retrieve price by id!");
    }
  }
  async retrieveAll(): Promise<Price[]> {
    try {
      return await Price.findAll();
    } catch (error) {
      throw new Error("Failed to find all prices!");
    }
  }
}
