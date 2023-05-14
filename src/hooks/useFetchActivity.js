import { useState, useEffect } from "react";
import config from "../api/base";

export default function useFetchActivity() {
  const [isLoading, setLoading] = useState(true);
  const [activities, setActivity] = useState([]);

  const _getAllActivity = async () => {
    const { data } = await config.get("/activity-groups?email=dior@mail.com");
    setActivity(data?.data);
    setLoading(false);
  };

  useEffect(() => {
    _getAllActivity();
  }, []);

  return [isLoading, activities, _getAllActivity];
}
