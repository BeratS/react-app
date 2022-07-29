import { Navigate } from "react-router-dom";

const GuardedRoute = ({ children, ...rest }: any) => {

  console.log("auth:", rest);
  // https://v5.reactrouter.com/web/example/auth-workflow

  // let auth = useAuth();
  let auth = false;

  return (
    auth ? (
      children
    ) : (
      <Navigate
        to="/login"
        state={{ from: rest.path }}
      />
    )
  );
}

export default GuardedRoute;
