import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="http://growtechnologies.com.br/">
        Growtech
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}
