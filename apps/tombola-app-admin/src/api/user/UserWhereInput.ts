import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VerificationListRelationFilter } from "../verification/VerificationListRelationFilter";
import { VoucherListRelationFilter } from "../voucher/VoucherListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  verifications?: VerificationListRelationFilter;
  vouchers?: VoucherListRelationFilter;
};
