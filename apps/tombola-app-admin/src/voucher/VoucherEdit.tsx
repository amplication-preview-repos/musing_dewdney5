import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TombolaTitle } from "../tombola/TombolaTitle";
import { UserTitle } from "../user/UserTitle";

export const VoucherEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
