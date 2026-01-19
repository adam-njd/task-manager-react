import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function OutlinedAlerts({show,msg}) {
    if(show)
  return (
    <Stack sx={{ width: '90%',transition:'ease-in-out' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        {msg}
      </Alert>
    </Stack>
  );
}
