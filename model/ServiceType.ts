import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: ServiceType.SERVICE_TYPE_TABLE_NAME,
})
export class ServiceType extends Model {
  public static SERVICE_TYPE_TABLE_NAME = "service type" as string;
  public static SERVICE_TYPE_ID = "id" as string;
  public static SERVICE_TYPE_NAME = "name" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: ServiceType.SERVICE_TYPE_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    field: ServiceType.SERVICE_TYPE_NAME,
  })
  name!: string;
}
