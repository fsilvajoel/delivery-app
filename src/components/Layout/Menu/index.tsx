import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const renderMenu = () => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={menuId}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isMenuOpen}
    onClose={handleMenuClose}
  >
    <MenuItem onClick={handleMenuClose}>Histórico de pedidos</MenuItem>
    <MenuItem onClick={handleMenuClose}>Editar Dados</MenuItem>
    <MenuItem onClick={handleMenuClose}>Sair</MenuItem>
  </Menu>
);
