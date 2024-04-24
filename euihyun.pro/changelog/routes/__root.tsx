import { Link, Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component() {
    return (
      <>
        <section>
          <nav>
            <a href="https://euihyun.pro/blog">Blog</a>
            <Link to="/" activeProps={{ className: 'font-bold' }} activeOptions={{ exact: true }}>
              Changelog
            </Link>
          </nav>
          <Outlet />
        </section>
        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
});
