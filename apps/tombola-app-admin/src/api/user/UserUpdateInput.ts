import { InputJsonValue } from "../../types";
import { VerificationUpdateManyWithoutUsersInput } from "./VerificationUpdateManyWithoutUsersInput";
import { VoucherUpdateManyWithoutUsersInput } from "./VoucherUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  verifications?: VerificationUpdateManyWithoutUsersInput;
  vouchers?: VoucherUpdateManyWithoutUsersInput;
};
