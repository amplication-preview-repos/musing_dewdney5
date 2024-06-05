import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { TOMBOLA_TITLE_FIELD } from "./TombolaTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const TombolaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="active" source="active" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="drawDate" source="drawDate" />
        <TextField label="ID" source="id" />
        <TextField label="prize" source="prize" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Voucher"
          target="tombolaId"
          label="Vouchers"
        >
          <Datagrid rowClick="show">
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isValid" source="isValid" />
            <ReferenceField
              label="Tombola"
              source="tombola.id"
              reference="Tombola"
            >
              <TextField source={TOMBOLA_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
