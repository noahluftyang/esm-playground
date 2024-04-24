import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import { createApp } from 'vinxi';

export default createApp({
  routers: [
    {
      name: 'client',
      type: 'spa',
      handler: 'index.html',
      target: 'browser',
      plugins() {
        return [
          TanStackRouterVite({
            routesDirectory: './routes',
          }),
        ];
      },
    },
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
  ],
});
