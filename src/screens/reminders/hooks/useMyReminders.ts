import { useEffect, useState } from "react";
import { BASE_URL } from "@src/config";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default (refetch?: boolean) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getMyReminders();
  }, [refetch]);

  const getMyReminders = async () => {
    setIsLoading(true);
    const value = await AsyncStorage.getItem("user_info");
    console.log("user.id");
    if (value !== null) {
      const user = JSON.parse(value);
      await axios
        .get(`${BASE_URL}/reminder/${user.id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        })
        .then(({ data: res }) => {
          setData(res?.patientReminders);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return { data, isLoading };
};
