import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: Provider.PROVIDER_TABLE_NAME,
})
export class Provider extends Model {
  public static PROVIDER_TABLE_NAME = "provider" as string;
  public static PROVIDER_ID = "id" as string;
  public static PROVIDER_NAME = "name" as string;
  public static PROVIDER_PHONE = "phone" as string;
  public static PROVIDER_ADDRESS = "address" as string;
  public static PROVIDER_EMAIL = "email" as string;
  public static PROVIDER_CATEGORY = "category" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Provider.PROVIDER_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Provider.PROVIDER_NAME,
  })
  name!: string;

  @Column({
    type: DataType.INTEGER,
    field: Provider.PROVIDER_PHONE,
  })
  phone!: number;

  @Column({
    type: DataType.STRING(255),
    field: Provider.PROVIDER_ADDRESS,
  })
  address!: string;

  @Column({
    type: DataType.STRING(255),
    field: Provider.PROVIDER_EMAIL,
  })
  email!: string;

  @Column({
    type: DataType.STRING(100),
    field: Provider.PROVIDER_CATEGORY,
  })
  category!: string;
}
