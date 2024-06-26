import { useEffect, useState } from "react";
import { baseUrl, getRequest } from "../utils/services";

export const useFetchRecipientUser = (chat, user) => {
  const [recipientUser, setRecipientUser] = useState(null);
  const [error, setError] = useState(null);

  const recipientId = chat?.members.find((id) => id !== user?._id);
  console.log("Recipientb Id: ", recipientId)

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;
      const response = await getRequest(`${baseUrl}/api/v1/find_a_user/${recipientId}`);

      if (response.error) return setError(error);
      setRecipientUser(response);
    };
    getUser();
  }, [recipientId]);
  return { recipientUser, error };
};
