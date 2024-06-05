import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TombolaTitle } from "../tombola/TombolaTitle";
import { UserTitle } from "../user/UserTitle";

export const VoucherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <BooleanInput label="isValid" source="isValid" />
        <ReferenceInput source="tombola.id" reference="Tombola" label="Tombola">
          <SelectInput optionText={TombolaTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
