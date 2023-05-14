import { useState, useEffect } from "react";
import config from "../api/base";

export default function useFetchTodo(activityId) {
  const [isLoading, setLoading] = useState(true);
  const [listTodo, setListTodo] = useState([]);

  const _getTodos = async () => {
    try {
      const { data } = await config.get(
        `/todo-items?activity_group_id=${activityId}`
      );
      setListTodo(data?.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    _getTodos();
  }, []);

  return [isLoading, listTodo, _getTodos];
}
