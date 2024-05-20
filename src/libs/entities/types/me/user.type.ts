import { TUserSchema } from '@libs/entities/validation-schemas/me/user.schema';
import {z} from 'zod';

export type TUser = z.infer<typeof TUserSchema>;