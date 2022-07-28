import { SnackbarProvider, useSnackbar } from 'notistack';
import { useEffect } from 'react';

function MySnackBarQueue({alertState}: any) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    if (alertState.type === 'clear') {
      closeSnackbar();
    } else if (alertState.msg?.length > 0) {
      enqueueSnackbar(alertState.msg, { variant: alertState.type });
    }
  
    return () => {
      closeSnackbar();
    }
  }, [alertState, enqueueSnackbar, closeSnackbar]);
  

  return (
    <></>
  );
}

export default function SnackBarQueueProvider({ alertState }: any) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MySnackBarQueue alertState={alertState}/>
    </SnackbarProvider>
  );
}
