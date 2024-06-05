import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VoucherListRelationFilter } from "../voucher/VoucherListRelationFilter";

export type TombolaWhereInput = {
  active?: BooleanNullableFilter;
  drawDate?: DateTimeNullableFilter;
  id?: StringFilter;
  prize?: StringNullableFilter;
  vouchers?: VoucherListRelationFilter;
};
