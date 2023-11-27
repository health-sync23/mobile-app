import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RemindersParamList } from "@src/navigators/types";

import MyReminders from ".";
import NewReminders from "./new-reminders";

const Stack = createNativeStackNavigator<RemindersParamList>();

const RemindersNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyReminders" component={MyReminders} />
      <Stack.Screen name="NewReminders" component={NewReminders} />
    </Stack.Navigator>
  );
};

export default RemindersNavigator;
