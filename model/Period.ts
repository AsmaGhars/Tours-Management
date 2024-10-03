import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Price } from "./Price";
import { Condition } from "./Condition";

@Table({
  tableName: Period.PERIOD_TABLE_NAME,
})
export class Period extends Model {
  public static PERIOD_TABLE_NAME = "period" as string;
  public static PERIOD_ID = "id" as string;
  public static PERIOD_BASE_PRICE = "base price" as string;
  public static PERIOD_TYPE = "type" as string;
  public static PERIOD_TIMES = "times" as string;
  public static PERIOD_EVERY_DAY = "every day" as string;
  public static PERIOD_OPERATION = "operation" as string;
  public static PERIOD_MARGIN = "margin" as string;
  public static PERIOD_PERCENT = "percent" as string;
  public static PERIOD_FROM = "from" as string;
  public static PERIOD_TO = "to" as string;
  public static PERIOD_ID_CONDITION = "id condition" as string;
  public static PERIOD_ID_PRICE = "id price" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Period.PERIOD_ID,
  })
  id!: number;

  @ForeignKey(() => Price)
  @Column({
    type: DataType.INTEGER,
    field: Period.PERIOD_ID_PRICE,
  })
  id_price!: number;

  @BelongsTo(() => Price)
  price!: Price;

  @ForeignKey(() => Condition)
  @Column({
    type: DataType.INTEGER,
    field: Period.PERIOD_ID_CONDITION,
  })
  id_condition!: number;

  @BelongsTo(() => Condition)
  condition!: Condition;

  @Column({
    type: DataType.DOUBLE,
    field: Period.PERIOD_BASE_PRICE,
  })
  base_price!: number;

  @Column({
    type: DataType.STRING,
    field: Period.PERIOD_TYPE,
  })
  type!: string;

  @Column({
    type: DataType.INTEGER,
    field: Period.PERIOD_TIMES,
  })
  times!: number;

  @Column({
    type: DataType.BOOLEAN,
    field: Period.PERIOD_EVERY_DAY,
  })
  every_day!: boolean;

  @Column({
    type: DataType.STRING,
    field: Period.PERIOD_OPERATION,
  })
  operation!: string;

  @Column({
    type: DataType.DOUBLE,
    field: Period.PERIOD_MARGIN,
  })
  margin!: number;

  @Column({
    type: DataType.STRING,
    field: Period.PERIOD_PERCENT,
  })
  percent!: string;

  @Column({
    type: DataType.STRING,
    field: Period.PERIOD_FROM,
  })
  from!: string;

  @Column({
    type: DataType.STRING,
    field: Period.PERIOD_TO,
  })
  to!: string;
}
