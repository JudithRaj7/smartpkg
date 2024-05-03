import React from "react";
import { StyleSheet, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//setting up Cognito
// import store from "./redux/store";
// import { Provider } from "react-redux";
// import reportWebVitals from "./reportWebVitals";

//import nav and screens
import HomePage from "./screens/HomePage";
import LoginScreen from './screens/Login'
import CreateAccount from "./screens/CreateAccount";
import ForgotPass from "./screens/ForgotPass";
import PassConfirmation from "./screens/PassConfirmation";
//import screens for settings stack
import Settings from "./screens/Settings";
import SettingsAccount from "./screens/SettingsAccount";
import SettingsCitations from "./screens/SettingsCitations";
import SettingsNotifications from "./screens/SettingsNotifications";
import SettingsReport from "./screens/SettingsReport";
import UpdateCar from "./screens/UpdateCar";
import UpdatePersonal from "./screens/UpdatePersonal";
import UpdatePass from "./screens/UpdatePass";

const Stack = createNativeStackNavigator();

function App () {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="CreateAccount" component={CreateAccount} />
        <Stack.Screen options={{ headerShown: false }} name="ForgotPass" component={ForgotPass} />
        <Stack.Screen options={{ headerShown: false }} name="PassConfirmation" component={PassConfirmation} />
        <Stack.Screen options={{ headerShown: false }} name="HomePage" component={HomePage} />

        <Stack.Screen options={{ headerShown: false }} name="Settings" component={Settings} />
        <Stack.Screen options={{ headerShown: false }} name="SettingsAccount" component={SettingsAccount} />
        <Stack.Screen options={{ headerShown: false }} name="UpdateCar" component={UpdateCar} />
        <Stack.Screen options={{ headerShown: false }} name="UpdatePass" component={UpdatePass} />
        <Stack.Screen options={{ headerShown: false }} name="UpdatePersonal" component={UpdatePersonal} />
        <Stack.Screen options={{ headerShown: false }} name="SettingsCitations" component={SettingsCitations} />
        <Stack.Screen options={{ headerShown: false }} name="SettingsNotifications" component={SettingsNotifications} />
        <Stack.Screen options={{ headerShown: false }} name="SettingsReport" component={SettingsReport} />
      </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
    },
  });

export default App;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   </Provider>
// );

// reportWebVitals();