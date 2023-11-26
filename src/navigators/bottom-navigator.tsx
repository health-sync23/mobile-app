import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList, RootNavigationProps } from "./types";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

import Dashboard from "@src/screens/dashboard";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="line-scan" size={24} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
