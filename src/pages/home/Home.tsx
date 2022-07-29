import useAxios from 'axios-hooks'
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

const CenterLoading = styled.a`
  /* This renders the buttons above... Edit me! */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const Home = () => {

  const [{ data, loading, error }, refetch, abort] = useAxios(
    '/users?delay=1'
  )

  function renderData() {
    return (
      <div>
        <Button variant="text" onClick={() => refetch()}>Refetch</Button>
        <Button variant="text" onClick={() => abort()}>Abort</Button>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }

  return (
    <div>
      {error &&
        <h2>
          An error occurred while fetching the data.
        </h2>
      }
      {loading
        ? <CenterLoading><CircularProgress size={80} /></CenterLoading>
        : renderData()
      }
    </div>
  )
};

export default Home;