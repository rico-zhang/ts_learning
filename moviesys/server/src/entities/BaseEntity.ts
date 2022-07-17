import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export abstract class BaseEntity {
  /**
   * 验证当前对象
   */
  public async validateThis(skipMissing: boolean = false): Promise<string[]> {
    const errors = await validate(this, {
      skipMissingProperties: skipMissing,
    });
    return errors
      .map((error) => {
        return Object.values(error.constraints || []);
      })
      .flat();
  }

  /**
   * 将平面对象转化为Movie对象
   * @param plainObj 平面对象
   * @returns Movie实例
   */
  protected static baseTransForm<T>(
    cls: ClassConstructor<T>,
    plainObj: object
  ): T {
    if (plainObj instanceof cls) {
      return plainObj;
    }
    return plainToInstance(cls, plainObj);
  }
}
