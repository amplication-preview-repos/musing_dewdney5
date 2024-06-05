import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationWhereInput = {
  code?: StringNullableFilter;
  id?: StringFilter;
  isVerified?: BooleanNullableFilter;
  user?: UserWhereUniqueInput;
};
