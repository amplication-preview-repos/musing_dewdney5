import { VoucherUpdateManyWithoutTombolasInput } from "./VoucherUpdateManyWithoutTombolasInput";

export type TombolaUpdateInput = {
  active?: boolean | null;
  drawDate?: Date | null;
  prize?: string | null;
  vouchers?: VoucherUpdateManyWithoutTombolasInput;
};
