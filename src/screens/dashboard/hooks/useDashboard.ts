import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "@src/config";

import "core-js/stable/atob";

export default () => {
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem("user_info");
      if (value !== null) {
        const user = JSON.parse(value);
        await axios
          .get(`${BASE_URL}/patient/${user.id}`, {
            headers: { Authorization: `Bearer ${user.token}` },
          })
          .then(async ({ data }) => {
            setUserInfo(data?.user);
          });
      }
    } catch (e) {}
  };

  return { userInfo };
};
