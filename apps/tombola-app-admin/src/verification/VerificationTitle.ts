import { Verification as TVerification } from "../api/verification/Verification";

export const VERIFICATION_TITLE_FIELD = "code";

export const VerificationTitle = (record: TVerification): string => {
  return record.code?.toString() || String(record.id);
};
