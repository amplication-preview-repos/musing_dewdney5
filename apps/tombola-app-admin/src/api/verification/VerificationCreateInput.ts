import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationCreateInput = {
  code?: string | null;
  isVerified?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
