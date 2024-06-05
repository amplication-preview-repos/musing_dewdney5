import { SortOrder } from "../../util/SortOrder";

export type VoucherOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  tombolaId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
