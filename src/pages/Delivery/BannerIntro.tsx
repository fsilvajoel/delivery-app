import Typography from '@material-ui/core/Typography';
import { data } from '~components/Layout/data';

const BannerIntro = () => {
  return (
    <>
      <Typography
        align="center"
        color="textPrimary"
        component="h1"
        gutterBottom
        variant="h3"
      >
        {process.env.NEXT_PUBLIC_CLIENT}
      </Typography>
      <Typography align="center" color="textSecondary" paragraph variant="h5">
        {data.startSelectCategory}
      </Typography>
    </>
  );
};
export default BannerIntro;
