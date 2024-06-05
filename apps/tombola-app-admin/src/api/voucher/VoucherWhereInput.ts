import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TombolaWhereUniqueInput } from "../tombola/TombolaWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VoucherWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  tombola?: TombolaWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
