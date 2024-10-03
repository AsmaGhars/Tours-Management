import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { ServiceType } from "./ServiceType";
import { Vehicule } from "./Vehicule";
@Table({
  tableName: Private.PRIVATE_TABLE_NAME,
})
export class Private extends ServiceType {
  public static PRIVATE_TABLE_NAME = "private" as string;
  public static PRIVATE_ID_VEHICULE = "id vehicule" as string;
  public static PRIVATE_NAME = "name" as string;
  @ForeignKey(() => Vehicule)
  @Column({
    type: DataType.INTEGER,
    field: Private.PRIVATE_ID_VEHICULE,
  })
  id_vehicule!: number;

  @BelongsTo(() => Vehicule)
  vehicule!: Vehicule;

  @Column({
    type: DataType.STRING(100),
    field: Private.PRIVATE_NAME,
  })
  name!: string;
}
