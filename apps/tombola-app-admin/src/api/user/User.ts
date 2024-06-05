import { JsonValue } from "type-fest";
import { Verification } from "../verification/Verification";
import { Voucher } from "../voucher/Voucher";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  verifications?: Array<Verification>;
  vouchers?: Array<Voucher>;
};
