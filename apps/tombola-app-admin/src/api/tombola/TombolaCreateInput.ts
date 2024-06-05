import { VoucherCreateNestedManyWithoutTombolasInput } from "./VoucherCreateNestedManyWithoutTombolasInput";

export type TombolaCreateInput = {
  active?: boolean | null;
  drawDate?: Date | null;
  prize?: string | null;
  vouchers?: VoucherCreateNestedManyWithoutTombolasInput;
};
