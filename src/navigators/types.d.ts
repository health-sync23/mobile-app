import { NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AuthStackParamList = {};

export type RootStackParamList = {
  Onboarding: undefined;

  // Nested Stacks
  // AuthStack: NavigatorScreenParams<AuthStackParamList>;
};

export type RootNavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
