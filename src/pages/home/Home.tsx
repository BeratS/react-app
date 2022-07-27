import { useEffect, useState } from "react";

import useAxios from 'axios-hooks'
import Button from "@mui/material/Button";

const Home = () => {

  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  )

  // if (loading) return <p>Loading...</p>
  // if (error) return <p>Error!</p>

  return (
    <div>
      <Button variant="text" onClick={() => refetch()}>refetch</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
};

export default Home;