import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationUpdateInput = {
  code?: string | null;
  isVerified?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
