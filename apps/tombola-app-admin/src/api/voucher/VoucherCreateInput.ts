import { TombolaWhereUniqueInput } from "../tombola/TombolaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoucherCreateInput = {
  code?: string | null;
  isValid?: boolean | null;
  tombola?: TombolaWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
