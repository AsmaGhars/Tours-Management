import { Model, Table, Column, DataType } from "sequelize-typescript";
@Table({
  tableName: Condition.CONDITION_TABLE_NAME,
})
export class Condition extends Model {
  public static CONDITION_TABLE_NAME = "condition" as string;
  public static CONDITION_ID = "id" as string;
  public static CONDITION_VALUE = "value" as string;
  public static CONDITION_PERCENT = "percent" as string;
  public static CONDITION_BEFORE = "before" as string;
  public static CONDITION_ALL_SEASONS = "all seasons" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Condition.CONDITION_ID,
  })
  id!: number;

  @Column({
    type: DataType.DOUBLE,
    field: Condition.CONDITION_VALUE,
  })
  value!: number;

  @Column({
    type: DataType.STRING,
    field: Condition.CONDITION_PERCENT,
  })
  percent!: string;

  @Column({
    type: DataType.INTEGER,
    field: Condition.CONDITION_BEFORE,
  })
  before!: number;

  @Column({
    type: DataType.BOOLEAN,
    field: Condition.CONDITION_ALL_SEASONS,
  })
  all_seasons!: boolean;
}
