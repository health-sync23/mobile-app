import { useState } from "react";
import { BASE_URL } from "@src/config";
import axios from "axios";
import { Alert } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/navigators/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (input: keyof typeof inputs, value: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/signin`, inputs)
      .then(async ({ data }) => {
        await AsyncStorage.setItem("user_info", JSON.stringify(data));
        rootNavigation.navigate("BottomTab", { screen: "Dashboard" });
      })
      .catch((error) => {
        Alert.alert("Login Error!", JSON.stringify(error?.message));
      })
      .finally(() => setIsLoading(false));
  };

  return { inputs, isLoading, handleChangeInput, handleLogin };
};
