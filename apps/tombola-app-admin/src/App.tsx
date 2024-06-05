import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VoucherList } from "./voucher/VoucherList";
import { VoucherCreate } from "./voucher/VoucherCreate";
import { VoucherEdit } from "./voucher/VoucherEdit";
import { VoucherShow } from "./voucher/VoucherShow";
import { VerificationList } from "./verification/VerificationList";
import { VerificationCreate } from "./verification/VerificationCreate";
import { VerificationEdit } from "./verification/VerificationEdit";
import { VerificationShow } from "./verification/VerificationShow";
import { TombolaList } from "./tombola/TombolaList";
import { TombolaCreate } from "./tombola/TombolaCreate";
import { TombolaEdit } from "./tombola/TombolaEdit";
import { TombolaShow } from "./tombola/TombolaShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TombolaApp"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Voucher"
          list={VoucherList}
          edit={VoucherEdit}
          create={VoucherCreate}
          show={VoucherShow}
        />
        <Resource
          name="Verification"
          list={VerificationList}
          edit={VerificationEdit}
          create={VerificationCreate}
          show={VerificationShow}
        />
        <Resource
          name="Tombola"
          list={TombolaList}
          edit={TombolaEdit}
          create={TombolaCreate}
          show={TombolaShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
