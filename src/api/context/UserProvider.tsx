import { createContext, ReactNode, useState } from "react";

interface UserContextProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

// Create context
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = (props: UserProviderProps) => {
  const [username, setUsername] = useState<string>("");

  // Provider value
  const userContextValue: UserContextProps = {
    username,
    setUsername,
  };
  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
