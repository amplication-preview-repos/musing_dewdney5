import { Tombola } from "../tombola/Tombola";
import { User } from "../user/User";

export type Voucher = {
  code: string | null;
  createdAt: Date;
  id: string;
  isValid: boolean | null;
  tombola?: Tombola | null;
  updatedAt: Date;
  user?: User | null;
};
