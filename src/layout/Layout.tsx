import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Account } from "pages/Account/Account";
import { LayoutStyles } from "./LayoutStyle";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";
import { useState } from "react";
import { AccountSetting } from "pages/Account/Setting/AccountSetting";
import { ThankYou } from "pages/ThankYou/ThankYou";
import { ErrorRoute } from "pages/ErrorRoute/ErrorRoute";
import { EmployeeList } from "pages/EmployeeList/EmployeeList";
import { Contact } from "pages/Contact/Contact";
import { Usage } from "pages/Usage/Usage";
import { UsageAdd } from "pages/Usage/UsageAdd/UsageAdd";
import { Login } from "pages/Login/Login";
import { Register } from "pages/Register/Register";

export default function Layout() {
  const classes = LayoutStyles();
  const [status, setStatus] = useState(true);

  return (
    <Router>
      <Sidebar action={() => setStatus(false)} mobileStatus={status} />
      <div className={classes.container}>
        <Header mobileAction={() => setStatus(true)} />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/account' element={<Account />} />
          <Route path='/account/setting' element={<AccountSetting />} />
          <Route path='/list' element={<EmployeeList />} />
          <Route path='/usage' element={<Usage />} />
          <Route path='/usage/add' element={<UsageAdd />} />
          <Route path='/inquiry' element={<Contact />} />
          <Route path='/404' element={<ErrorRoute />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
