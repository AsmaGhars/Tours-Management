import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: Driver.DRIVER_TABLE_NAME,
})
export class Driver extends Model {
  public static DRIVER_TABLE_NAME = "driver" as string;
  public static DRIVER_ID = "id" as string;
  public static DRIVER_NAME = "name" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Driver.DRIVER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Driver.DRIVER_NAME,
  })
  name!: string;
}
