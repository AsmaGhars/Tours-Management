import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: Price.PRICE_TABLE_NAME,
})
export class Price extends Model {
  public static PRICE_TABLE_NAME = "price" as string;
  public static PRICE_ID = "id" as string;
  public static PRICE_PRICE = "price" as string;
  public static PRICE_PRICE_TO_SHOW = "price to show" as string;
  public static PRICE_CHILD_PRICE = "child price" as string;
  public static PRICE_CHILD_PRICE_TO_SHOW = "child price to show" as string;
  public static PRICE_TIMES = "times" as string;
  public static PRICE_OPERATION = "operation" as string;
  public static PRICE_MARGIN = "margin" as string;
  public static PRICE_PERCENT = "percent" as string;
  public static PRICE_OPERATION_B2C = "operation B2C" as string;
  public static PRICE_MARGIN_B2C = "margin b2c" as string;
  public static PRICE_PERCENT_B2C = "percent b2c" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Price.PRICE_ID,
  })
  id!: number;

  @Column({
    type: DataType.DOUBLE,
    field: Price.PRICE_PRICE,
  })
  price!: number;

  @Column({
    type: DataType.DOUBLE,
    field: Price.PRICE_PRICE_TO_SHOW,
  })
  price_to_show!: number;

  @Column({
    type: DataType.DOUBLE,
    field: Price.PRICE_CHILD_PRICE,
  })
  child_price!: number;

  @Column({
    type: DataType.DOUBLE,
    field: Price.PRICE_CHILD_PRICE_TO_SHOW,
  })
  child_price_to_show!: number;

  @Column({
    type: DataType.INTEGER,
    field: Price.PRICE_TIMES,
  })
  times!: number;

  @Column({
    type: DataType.STRING,
    field: Price.PRICE_OPERATION,
  })
  operation!: string;

  @Column({
    type: DataType.DOUBLE,
    field: Price.PRICE_MARGIN,
  })
  margin!: number;

  @Column({
    type: DataType.STRING,
    field: Price.PRICE_PERCENT,
  })
  percent!: string;

  @Column({
    type: DataType.STRING,
    field: Price.PRICE_OPERATION_B2C,
  })
  operation_b2c!: string;

  @Column({
    type: DataType.DOUBLE,
    field: Price.PRICE_MARGIN_B2C,
  })
  margin_b2c!: number;

  @Column({
    type: DataType.STRING,
    field: Price.PRICE_PERCENT_B2C,
  })
  percent_b2c!: string;
}
