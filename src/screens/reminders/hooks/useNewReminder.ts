import { useState } from "react";
import { BASE_URL } from "@src/config";
import axios from "axios";
import { Alert } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@src/navigators/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    drugName: "",
    drugType: "",
    dosage: "",
    frequency: "",
    time: "",
    note: "",
  });

  const handleChangeInput = (input: keyof typeof inputs, value: string) => {
    setInputs((prevState) => ({ ...prevState, [input]: value }));
  };

  const handleSaveReminder = async () => {
    setIsLoading(true);
    const value = await AsyncStorage.getItem("user_info");
    if (value !== null) {
      const user = JSON.parse(value);
      await axios
        .post(`${BASE_URL}/create-reminder`, inputs, {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then(() => {
          Alert.alert("Created!", "You have successfully added a new reminder");
          navigation.navigate("Reminders", {
            screen: "MyReminders",
            params: { refetch: true },
          });
        })
        .catch((error) => {
          Alert.alert("Error!", JSON.stringify(error?.message));
        })
        .finally(() => setIsLoading(false));
    }
  };

  return { inputs, isLoading, handleChangeInput, handleSaveReminder };
};
