import { Tombola as TTombola } from "../api/tombola/Tombola";

export const TOMBOLA_TITLE_FIELD = "prize";

export const TombolaTitle = (record: TTombola): string => {
  return record.prize?.toString() || String(record.id);
};
