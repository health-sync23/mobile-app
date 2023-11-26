import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types";
import {
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { COLORS, FONT_FAMILY } from "@src/constants";

import Dashboard from "@src/screens/dashboard";
import Professionals from "@src/screens/professionals";
import Settings from "@src/screens/settings";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: ({ children, focused }) => (
          <Text style={styles(focused).tabBarLabel}>{children}</Text>
        ),
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderColor: "white",
          shadowColor: "black",
          shadowOffset: {
            width: 20,
            height: 20,
          },
          shadowOpacity: 0.5,
          shadowRadius: 4.65,
          elevation: 10,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerTitle: () => "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              size={20}
              style={styles(focused).icon}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Professionals"
        component={Professionals}
        options={{
          headerTitle: () => "",
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="user-nurse"
              size={20}
              style={styles(focused).icon}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: () => "",
          tabBarIcon: ({ focused }) => (
            <SimpleLineIcons
              name="settings"
              size={20}
              color="black"
              style={styles(focused).icon}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = (focused?: boolean) =>
  StyleSheet.create({
    icon: {
      color: focused ? COLORS.blue : "#525252",
    },
    tabBarLabel: {
      fontFamily: FONT_FAMILY.medium,
      color: focused ? COLORS.blue : "#525252",
      fontSize: 12,
    },
  });

export default BottomTabNavigator;
