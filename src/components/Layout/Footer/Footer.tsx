import Typography from '@material-ui/core/Typography';
import { data } from '~components/Layout/data';

import Copyright from '../Copyright';

const Footer = () => (
  <>
    <footer>
      <Typography align="center" gutterBottom variant="h6">
        {process.env.NEXT_PUBLIC_CLIENT}
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        component="p"
        variant="subtitle1"
      >
        {data.footerPhrase}
      </Typography>
      <Typography align="center" variant="subtitle2">
        Sr Miyagi
      </Typography>
      <Copyright />
    </footer>
  </>
);
export default Footer;
