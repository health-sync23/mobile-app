import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";

import Login from "@src/screens/auth/login";
import SignUp from "@src/screens/auth/sign-up";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
