import { NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type BottomTabParamList = {
  Dashboard: undefined;
  Professionals: undefined;
  Settings: undefined;
};

export type RemindersParamList = {
  MyReminders: { refetch?: boolean };
  NewReminders: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;

  // Nested Stacks
  Reminders: NavigatorScreenParams<RemindersParamList>;
  AuthStack: NavigatorScreenParams<AuthStackParamList>;
  BottomTab: NavigatorScreenParams<BottomTabParamList>;
};

export type RootNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type AuthNavigationProps<T extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, T>;

export type BottomTabNavigationProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;

export type RemindersNavigationProps<T extends keyof RemindersParamList> =
  NativeStackScreenProps<RemindersParamList, T>;
