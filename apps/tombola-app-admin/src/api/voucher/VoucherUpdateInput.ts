import { TombolaWhereUniqueInput } from "../tombola/TombolaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoucherUpdateInput = {
  code?: string | null;
  isValid?: boolean | null;
  tombola?: TombolaWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
