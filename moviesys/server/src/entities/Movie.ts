import { Type, plainToInstance } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  Max,
  Min,
  validate,
} from 'class-validator';
import 'reflect-metadata';
import { BaseEntity } from './BaseEntity';

export class Movie extends BaseEntity {
  @Type(() => String)
  @IsNotEmpty({ message: '电影名称不允许为空' })
  public name: string;

  @Type(() => String)
  @IsArray({ message: '电影类型必须为数组' })
  @IsNotEmpty({ message: '电影类型不允许为空' })
  @ArrayMinSize(1, { message: '电影类型至少有一个' })
  public types: string[];

  @Type(() => String)
  @IsArray({ message: '上映地区必须为数组' })
  @IsNotEmpty({ message: '上映地区不允许为空' })
  @ArrayMinSize(1, { message: '上映地区至少有一个' })
  public areas: string[];

  @Type(() => Number)
  @IsNotEmpty({ message: '时长不可以为空' })
  @IsInt({ message: '时长必须是整数' })
  @Min(1, { message: '时长最少一分钟' })
  @Max(9999, { message: '时长最长9999分钟' })
  public timeLong: number;

  @Type(() => Boolean)
  @IsNotEmpty({ message: '是否热映不允许为空' })
  public isHot: boolean = false;

  @Type(() => Boolean)
  @IsNotEmpty({ message: '是否即将上映不允许为空' })
  public isComing: boolean = false;

  @Type(() => Boolean)
  @IsNotEmpty({ message: '是否经典影片不允许为空' })
  public isClassic: boolean = false;

  @Type(() => String)
  public description?: string;

  @Type(() => String)
  public poster?: string;

  /**
   * 将平面对象转化为Movie对象
   * @param plainObj 平面对象
   * @returns Movie实例
   */
  public static transForm(plainObj: object): Movie {
    return super.baseTransForm(Movie, plainObj);
  }
}
