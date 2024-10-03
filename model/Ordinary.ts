import { Model, Table, Column, DataType } from "sequelize-typescript";
import { ServiceType } from "./ServiceType";

@Table({
  tableName: Ordinary.ORDINARY_TABLE_NAME,
})
export class Ordinary extends ServiceType {
  public static ORDINARY_TABLE_NAME = "ordinary" as string;
  public static ORDIANRY_CAPACITY = "capacity" as string;
  public static ORDIANRY_NAME = "name" as string;

  @Column({
    type: DataType.NUMBER,
    field: Ordinary.ORDIANRY_CAPACITY,
  })
  capacity!: number;

  @Column({
    type: DataType.STRING(100),
    field: Ordinary.ORDIANRY_NAME,
  })
  name!: string;
}
