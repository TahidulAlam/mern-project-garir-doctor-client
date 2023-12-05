import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useAuth = () => {
  const allAuth = useContext(AuthContext);
  return allAuth;
};
export default useAuth;
