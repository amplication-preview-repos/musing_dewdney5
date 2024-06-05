import { VerificationWhereInput } from "./VerificationWhereInput";
import { VerificationOrderByInput } from "./VerificationOrderByInput";

export type VerificationFindManyArgs = {
  where?: VerificationWhereInput;
  orderBy?: Array<VerificationOrderByInput>;
  skip?: number;
  take?: number;
};
