import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import classes from './Menu.module.scss';
import { IMobileMenu } from './type';

export const renderMobileMenu = (props: IMobileMenu) => (
  <Menu
    anchorEl={props.mobileMoreAnchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id="mobileMenu"
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={props.isMobileMenuOpen}
    onClose={props.handleMobileMenuClose}
  >
    <MenuItem>
      <IconButton aria-label="show 11 new notifications" color="inherit">
        <Badge badgeContent={11} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <p>Carrinho</p>
    </MenuItem>
    <MenuItem onClick={props.handleProfileMenuOpen}>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <p>Perfil</p>
    </MenuItem>
    <MenuItem>
      <IconButton aria-label="quit" color="inherit">
        <ExitToAppIcon className={classes.icon} />
      </IconButton>
      <p>Sair</p>
    </MenuItem>
  </Menu>
);
