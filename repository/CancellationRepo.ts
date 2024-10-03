import { Cancellation } from "../model/Cancellation";

interface ICancellationRepo {
  save(cancellation: Cancellation): Promise<void>;
  update(Cancellation: Cancellation): Promise<void>;
  delete(cancellationId: number): Promise<void>;
  retrieveById(cancellationId: number): Promise<Cancellation>;
  retrieveAll(): Promise<Cancellation[]>;
}

export class CancellationRepo implements ICancellationRepo {
  async save(cancellation: Cancellation): Promise<void> {
    try {
      await Cancellation.create({
        userId: cancellation.userId,
        tourId: cancellation.tourId,
        reason: cancellation.reason,
        refundAmount: cancellation.refundAmount,
      });
    } catch (error) {
      throw new Error("Failed to create cancellation!");
    }
  }
  async update(cancellation: Cancellation): Promise<void> {
    try {
      const new_cancellation = await Cancellation.findOne({
        where: {
          id: cancellation.id,
        },
      });
      if (!new_cancellation) {
        throw new Error("Cancellation not found!");
      }

      new_cancellation.userId = cancellation.userId;
      new_cancellation.tourId = cancellation.tourId;
      new_cancellation.reason = cancellation.reason;
      new_cancellation.refundAmount = cancellation.refundAmount;

      await new_cancellation.save();
    } catch (error) {
      throw new Error("Failed to update cancellation!");
    }
  }
  async delete(cancellationId: number): Promise<void> {
    try {
      const new_cancellation = await Cancellation.findOne({
        where: {
          id: cancellationId,
        },
      });
      if (!new_cancellation) {
        throw new Error("Cancellation not found!.");
      }

      await new_cancellation.destroy();
    } catch (error) {
      throw new Error("Failed to delete cancellation!");
    }
  }
  async retrieveById(cancellationId: number): Promise<Cancellation> {
    try {
      const new_cancellation = await Cancellation.findOne({
        where: {
          id: cancellationId,
        },
      });
      if (!new_cancellation) {
        throw new Error("Gooking not found!.");
      }
      return new_cancellation;
    } catch (error) {
      throw new Error("Failed to retrieve Cancellation by id!");
    }
  }
  async retrieveAll(): Promise<Cancellation[]> {
    try {
      return await Cancellation.findAll();
    } catch (error) {
      throw new Error("Failed to find all Cancellations!");
    }
  }
}
