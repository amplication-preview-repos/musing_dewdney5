import { SortOrder } from "../../util/SortOrder";

export type VerificationOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isVerified?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
