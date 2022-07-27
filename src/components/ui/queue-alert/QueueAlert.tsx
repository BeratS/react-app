import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

function MySnackBarQueue() {
  const { enqueueSnackbar } = useSnackbar();

  const showSnackbar = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };

  return (
    <>
      <Button onClick={showSnackbar('success')}>Show success snackbar</Button>
    </>
  );
}

export default function SnackBarQueueProvider() {
  return (
    <SnackbarProvider maxSnack={3}>
      <MySnackBarQueue />
    </SnackbarProvider>
  );
}