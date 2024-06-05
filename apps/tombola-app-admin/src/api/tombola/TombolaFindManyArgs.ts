import { TombolaWhereInput } from "./TombolaWhereInput";
import { TombolaOrderByInput } from "./TombolaOrderByInput";

export type TombolaFindManyArgs = {
  where?: TombolaWhereInput;
  orderBy?: Array<TombolaOrderByInput>;
  skip?: number;
  take?: number;
};
