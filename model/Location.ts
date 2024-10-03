import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: Location.LOCATION_TABLE_NAME,
})
export class Location extends Model {
  public static LOCATION_TABLE_NAME = "location" as string;
  public static LOCATION_ID = "id" as string;
  public static LOCATION_COUNTRY = "country" as string;
  public static LOCATION_CITY = "city" as string;
  public static LOCATION_AREA = "area" as string;
  public static LOCATION_TYPE = "type" as string;
  public static LOCATION_LOCATION = "location" as string;
  public static LOCATION_ACTIVE = "active" as string;
  public static LOCATION_ADDRESS = "address" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Location.LOCATION_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Location.LOCATION_COUNTRY,
  })
  country!: string;

  @Column({
    type: DataType.STRING(100),
    field: Location.LOCATION_CITY,
  })
  city!: string;

  @Column({
    type: DataType.STRING(100),
    field: Location.LOCATION_AREA,
  })
  area!: string;

  @Column({
    type: DataType.STRING(100),
    field: Location.LOCATION_TYPE,
  })
  type!: string;

  @Column({
    type: DataType.STRING(100),
    field: Location.LOCATION_LOCATION,
  })
  location!: string;

  @Column({
    type: DataType.BOOLEAN,
    field: Location.LOCATION_ACTIVE,
  })
  active!: boolean;

  @Column({
    type: DataType.STRING(100),
    field: Location.LOCATION_ADDRESS,
  })
  address!: string;
}
