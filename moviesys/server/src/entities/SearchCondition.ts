import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';
import { BaseEntity } from './BaseEntity';

export class SearchCondition extends BaseEntity {
  @IsInt({ message: '页码必须是整数' })
  @Min(1, { message: '页面最小值是1' })
  @Type(() => Number)
  public page: number = 1;

  @IsInt({ message: '页容量必须是整数' })
  @Min(1, { message: '页容量最小是1' })
  @Type(() => Number)
  public limit: number = 10;

  @Type(() => String)
  public key: string = '';

  public static transForm(plainObject: object): SearchCondition {
    return super.baseTransForm(SearchCondition, plainObject);
  }
}
