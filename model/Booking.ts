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
@Table({
  tableName: Booking.BOOKING_TABLE_NAME,
})
export class Booking extends Model {
  public static BOOKING_TABLE_NAME = "booking" as string;
  public static BOOKING_ID = "id" as string;
  public static BOOKING_USER_ID = "user_id" as string;
  public static BOOKING_TOUR_ID = "tour_id" as string;
  public static BOOKING_START_DATE = "start date" as string;
  public static BOOKING_END_DATE = "end date" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Booking.BOOKING_ID,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: Booking.BOOKING_USER_ID,
  })
  userId!: number;
  @BelongsTo(() => User)
  User!: User;
  @ForeignKey(() => Tour)
  @Column({
    type: DataType.INTEGER,
    field: Booking.BOOKING_TOUR_ID,
  })
  tourId!: number;
  @BelongsTo(() => Tour)
  tour!: Tour;

  @Column({
    type: DataType.STRING,
    field: Booking.BOOKING_START_DATE,
  })
  startDate!: string;

  @Column({
    type: DataType.STRING,
    field: Booking.BOOKING_END_DATE,
  })
  endDate!: string;
}
