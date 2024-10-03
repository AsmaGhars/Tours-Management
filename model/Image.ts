import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: Image.IMAGE_TABLE_NAME,
})
export class Image extends Model {
  public static IMAGE_TABLE_NAME = "image" as string;
  public static IMAGE_ID = "id" as string;
  public static IMAGE_NAME = "name" as string;
  public static IMAGE_PROFILE = "profile" as string;
  public static IMAGE_SLIDER = "slider" as string;
  public static IMAGE_MAP = "map" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Image.IMAGE_ID,
  })
  id!: number;

  @Column({
    type: DataType.STRING(100),
    field: Image.IMAGE_NAME,
  })
  name!: string;

  @Column({
    type: DataType.BOOLEAN,
    field: Image.IMAGE_SLIDER,
  })
  slider!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: Image.IMAGE_MAP,
  })
  map!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: Image.IMAGE_PROFILE,
  })
  profile!: boolean;
}
