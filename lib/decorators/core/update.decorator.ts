import { SetMetadata } from '@nestjs/common';
import { TELEGRAF_UPDATE_METADATA } from '../../telegraf.constants';

/**
 * `@Update` decorator, it's like NestJS `@Controller` decorator,
 * but for Telegram Bot API updates.
 */
export const Update = (): ClassDecorator =>
  SetMetadata(TELEGRAF_UPDATE_METADATA, true);
