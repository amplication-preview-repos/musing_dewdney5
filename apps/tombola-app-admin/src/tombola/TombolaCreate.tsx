import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VoucherTitle } from "../voucher/VoucherTitle";

export const TombolaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="active" source="active" />
        <DateTimeInput label="drawDate" source="drawDate" />
        <TextInput label="prize" source="prize" />
        <ReferenceArrayInput
          source="vouchers"
          reference="Voucher"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VoucherTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
