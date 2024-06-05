import { Voucher } from "../voucher/Voucher";

export type Tombola = {
  active: boolean | null;
  createdAt: Date;
  drawDate: Date | null;
  id: string;
  prize: string | null;
  updatedAt: Date;
  vouchers?: Array<Voucher>;
};
