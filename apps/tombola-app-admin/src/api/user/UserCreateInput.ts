import { InputJsonValue } from "../../types";
import { VerificationCreateNestedManyWithoutUsersInput } from "./VerificationCreateNestedManyWithoutUsersInput";
import { VoucherCreateNestedManyWithoutUsersInput } from "./VoucherCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  verifications?: VerificationCreateNestedManyWithoutUsersInput;
  vouchers?: VoucherCreateNestedManyWithoutUsersInput;
};
