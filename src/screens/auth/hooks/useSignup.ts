import { useState } from "react";
import { BASE_URL } from "@src/config";
import axios from "axios";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/navigators/types";
import { Alert } from "react-native";

export default () => {
  const rootNavigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChangeInput = (input: keyof typeof inputs, value: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleCreateAccount = async () => {
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}/new-patient`, inputs)
      .then(({ data }) => {
        Alert.alert(
          "Account Created!",
          `Hi ${data.data.fullname}, your account creation is successful. Fill in your details to proceed.`
        );
        rootNavigation.navigate("AuthStack", { screen: "Login" });
      })
      .catch((error) => {
        Alert.alert("Error!", JSON.stringify(error?.message));
      })
      .finally(() => setIsLoading(false));
  };

  return { inputs, isLoading, handleCreateAccount, handleChangeInput };
};
