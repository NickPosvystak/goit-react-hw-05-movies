import { Outlet } from 'react-router-dom';
import { StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <nav>
        <StyledLink to="/">Home</StyledLink>
      </nav>
      <nav>
        <StyledLink to="/movie">Movies</StyledLink>
      </nav>
      <Outlet />
    </>
  );
};
