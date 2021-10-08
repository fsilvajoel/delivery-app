import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Address from '~components/Address/index';
import ShoppingCart from '~components/ShoppingCart/ShoppingCart';
import { links } from '~constants/links';

import { usePartner } from '~hooks/query/usePartner';
import { useCartStore } from '~hooks/store/UseCartStore';
import { useLoginStore } from '~hooks/store/UseLoginStore';
import { UseExit } from '~hooks/UseAuthenticated';

import SearchBar from './Components/SearchBar/SearchBar';
import classes from './Menu.module.scss';

export default function MenuApp() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    useState<null | HTMLElement>(null);
  const partner = usePartner();
  const router = useRouter();
  const isLogged = useLoginStore((state) => state.isLogged);
  const { width } = useWindowSize();
  const contItensCart = useCartStore((state) => state.numberOfItens);
  const [isDesktop, setIsDesktop] = useState(false);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  useEffect(() => {
    setIsDesktop(() => width >= 1280);
  }, [width]);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleExit = () => {
    UseExit();
    router.push('/');
    handleMenuClose();
  };
  const handleLogin = () => {
    router.push('/login');
  };

  const menuId = 'menu-delivery-app';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {/* <MenuItem onClick={handleMenuClose}>Histórico de pedidos</MenuItem> */}
      {/* <MenuItem onClick={handleMenuClose}>Editar Dados</MenuItem> */}
      <MenuItem onClick={handleExit}>Sair</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'mobile-menu';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={contItensCart} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Carrinho</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
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

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <div className={classes.toolbar}>
          <div>
            <Link href={links.home}>
              <img
                className={classes.logo}
                src={
                  isDesktop ? partner?.data?.logo : partner?.data?.logo_mobile
                }
                alt="logo"
              />
            </Link>
          </div>
          {/* <SearchBar /> */}
          <div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Address />
              <ShoppingCart />
              {isLogged ? (
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                  <span>perfil</span>
                </IconButton>
              ) : (
                <IconButton
                  edge="end"
                  aria-label="login"
                  onClick={handleLogin}
                  color="inherit"
                >
                  <AccountCircle />
                  <span>Entrar</span>
                </IconButton>
              )}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
