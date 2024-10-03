import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { ServiceType } from "./ServiceType";
import { Location } from "./Location";
import { Period } from "./Period";
import { Provider } from "./Provider";
import { Image } from "./Image";

@Table({
  tableName: Tour.TOUR_TABLE_NAME,
})
export class Tour extends Model {
  public static TOUR_TABLE_NAME = "tour" as string;
  public static TOUR_ID = "id" as string;
  public static TOUR_OPERATES = "operates" as string;
  public static TOUR_NAME = "name" as string;
  public static TOUR_STARTS = "starts" as string;
  public static TOUR_DURATION = "duration" as string;
  public static TOUR_MEETING_POINT = "meeting point" as string;
  public static TOUR_UNIT = "unit" as string;
  public static TOUR_ACTIVE = "active" as string;
  public static TOUR_BABY = "baby" as string;
  public static TOUR_CHILD = "child" as string;
  public static TOUR_MAX_PAX = "max pax" as string;
  public static TOUR_MIN_ADULT_AGE = "min adult age" as string;
  public static TOUR_MIN_CHILD_AGE = "min child age" as string;
  public static TOUR_MAX_CHILD_AGE = "max child age" as string;
  public static TOUR_DESCRIPTION = "description" as string;
  public static TOUR_HIGHLIGHT = "highlight" as string;
  public static TOUR_WHAT_IS_INCLUDED = "what is included" as string;
  public static TOUR_WHAT_IS_EXCLUDED = "what is excluded" as string;
  public static TOUR_PARAGRAPH_1 = "paragraph 1" as string;
  public static TOUR_PARAGRAPH_2 = "paragraph 2" as string;
  public static TOUR_PARAGRAPH_3 = "paragraph 3" as string;
  public static TOUR_PARAGRAPH_4 = "parapraph 4" as string;
  public static TOUR_PARAGRAPH_5 = "paragraph 5" as string;
  public static TOUR_ID_LOCATION = "id location" as string;
  public static TOUR_ID_SERVICE_TYPE = "id service type" as string;
  public static TOUR_ID_PERIOD = "id period" as string;
  public static TOUR_ID_PROVIDER = "id provider" as string;
  public static TOUR_ID_IMAGE = "id image" as string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: Tour.TOUR_ID,
  })
  id!: number;

  @ForeignKey(() => ServiceType)
  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_ID_SERVICE_TYPE,
  })
  id_service_type!: number;

  @BelongsTo(() => ServiceType)
  service_type!: ServiceType;

  @ForeignKey(() => Location)
  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_ID_LOCATION,
  })
  id_location!: number;

  @BelongsTo(() => Location)
  location!: Location;

  @ForeignKey(() => Period)
  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_ID_PERIOD,
  })
  id_period!: number;

  @BelongsTo(() => Period)
  period!: Period;

  @ForeignKey(() => Provider)
  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_ID_PROVIDER,
  })
  id_provider!: number;

  @BelongsTo(() => Provider)
  provider!: Provider;

  @ForeignKey(() => Image)
  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_ID_IMAGE,
  })
  id_image!: number;

  @BelongsTo(() => Image)
  image!: Image;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_OPERATES,
  })
  operates!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_NAME,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_STARTS,
  })
  starts!: string;

  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_DURATION,
  })
  duration!: number;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_MEETING_POINT,
  })
  meeting_point!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_UNIT,
  })
  unit!: string;

  @Column({
    type: DataType.BOOLEAN,
    field: Tour.TOUR_ACTIVE,
  })
  active!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: Tour.TOUR_BABY,
  })
  baby!: boolean;

  @Column({
    type: DataType.BOOLEAN,
    field: Tour.TOUR_CHILD,
  })
  child!: boolean;

  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_MAX_PAX,
  })
  max_pax!: number;

  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_MIN_ADULT_AGE,
  })
  min_adult_age!: number;

  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_MIN_CHILD_AGE,
  })
  min_child_age!: number;

  @Column({
    type: DataType.INTEGER,
    field: Tour.TOUR_MAX_CHILD_AGE,
  })
  max_child_age!: number;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_DESCRIPTION,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_HIGHLIGHT,
  })
  highlight!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_WHAT_IS_INCLUDED,
  })
  what_is_included!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_WHAT_IS_EXCLUDED,
  })
  what_is_excluded!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_PARAGRAPH_1,
  })
  paragraph_1!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_PARAGRAPH_2,
  })
  paragraph_2!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_PARAGRAPH_3,
  })
  paragraph_3!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_PARAGRAPH_4,
  })
  paragraph_4!: string;

  @Column({
    type: DataType.STRING,
    field: Tour.TOUR_PARAGRAPH_5,
  })
  paragraph_5!: string;
}
