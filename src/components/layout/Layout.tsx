import React, { useEffect, useState } from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
} from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, GridView, Category, ContactPage } from '@mui/icons-material';
import { Outlet } from "react-router-dom";
import './Layout.scss';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  active?: boolean;
  primary: string;
  to: string;
}

interface INavList {
  icon?: React.ReactElement;
  route: string;
  name: string;
}

const Layout = ({ onClick }: { onClick: () => void }) => {

  const [navList] = useState<INavList[]>([
    { name: 'Home', route: '/', icon: <Home /> },
    { name: 'Blogs', route: '/blogs', icon: <GridView /> },
    { name: 'Products', route: '/products', icon: <Category /> },
    { name: 'Contact', route: '/contact', icon: <ContactPage /> },
  ]);
  const [navActive, setNavActive] = useState<string>('/');
  const location = useLocation();

  useEffect(
    () => { setNavActive(location.pathname); },
    [location]
  );


  function ListItemLink(props: ListItemLinkProps) {
    const { icon, primary, to, active } = props;
  
    const renderLink = React.useMemo(
      () =>
        React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'to'>>(function Link(
          itemProps,
          ref,
        ) {
          return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
        }),
      [to],
    );
  
    return (
      <li>
        <ListItem button component={renderLink}
          className={active ? 'active' : ''}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  return (
    <>
      <nav>
        <List aria-label="main mailbox folders" onClick={onClick}>
          {navList.map((navItem, index) => (
            <ListItemLink key={index}
              to={navItem.route}
              active={navActive === navItem.route}
              primary={navItem.name}
              icon={navItem.icon} />
          ))}
        </List>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;