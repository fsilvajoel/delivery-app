import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
// import MenuIcon from '@material-ui/icons/Menu';

import scss from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <Paper component="form" className={scss.root}>
      {/* <IconButton className={scss.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        className={scss.input}
        placeholder="Encontre seu produto aqui"
        inputProps={{ 'aria-label': 'search product' }}
      />
      <IconButton type="submit" className={scss.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
