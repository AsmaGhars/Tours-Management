import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Driver } from "./Driver";

@Table({
  tableName: Vehicule.VEHICULE_TABLE_NAME,
})
export class Vehicule extends Model {
  public static VEHICULE_TABLE_NAME = "vehicule" as string;
  public static VEHICULE_ID = "id" as string;
  public static VEHICULE_MATRICULE = "matricule" as string;
  public static VEHICULE_TYPE = "type" as string;
  public static VEHICULE_CAPACITY = "capacity" as string;
  public static VEHICULE_ID_DRIVER = "id driver" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Vehicule.VEHICULE_ID,
  })
  id!: number;

  @ForeignKey(() => Driver)
  @Column({
    type: DataType.INTEGER,
    field: Vehicule.VEHICULE_ID_DRIVER,
  })
  id_driver!: number;

  @BelongsTo(() => Driver)
  driver!: Driver;

  @Column({
    type: DataType.STRING,
    field: Vehicule.VEHICULE_MATRICULE,
  })
  matricule!: string;

  @Column({
    type: DataType.STRING,
    field: Vehicule.VEHICULE_TYPE,
  })
  type!: string;

  @Column({
    type: DataType.INTEGER,
    field: Vehicule.VEHICULE_CAPACITY,
  })
  capacity!: number;
}
