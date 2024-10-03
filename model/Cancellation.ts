import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "../model/User";
import { Tour } from "./Tour";
import { Booking } from "./Booking";
@Table({
  tableName: Cancellation.CANCELLATION_TABLE_NAME,
})
export class Cancellation extends Model {
  public static CANCELLATION_TABLE_NAME = "cancellation" as string;
  public static CANCELLATION_ID = "id" as string;
  public static CANCELLATION_USER_ID = "user_id" as string;
  public static CANCELLATION_TOUR_ID = "tour_id" as string;
  public static CANCELLATION_REASON = "reason" as string;
  public static CANCELLATION_REFUND_AMOUNT = "refundAmount" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Cancellation.CANCELLATION_ID,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: Cancellation.CANCELLATION_USER_ID,
  })
  userId!: number;
  @BelongsTo(() => User)
  User!: User;

  @ForeignKey(() => Tour)
  @Column({
    type: DataType.INTEGER,
    field: Cancellation.CANCELLATION_TOUR_ID,
  })
  tourId!: number;
  @BelongsTo(() => Tour)
  Tour!: Tour;

  @Column({
    type: DataType.STRING,
    field: Cancellation.CANCELLATION_REASON,
  })
  reason!: string;

  @Column({
    type: DataType.STRING,
    field: Cancellation.CANCELLATION_REFUND_AMOUNT,
  })
  refundAmount!: string;
}
