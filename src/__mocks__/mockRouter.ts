import { NextRouter, useRouter } from "next/router";

export const mockRouter = (initialPathname: string) => {
  const router = {
    pathname: initialPathname,
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    query: {},
    asPath: "",
    basePath: "",
    route: "/",
    locale: undefined,
    locales: undefined,
    defaultLocale: undefined,
    isFallback: false,
    isReady: true,
    isPreview: false,
    isLocaleDomain: false,
    isFallbackLocale: false,
    isReadonly: false,
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    beforeHistoryChange: jest.fn(),
    isFirstRender: true,
  };

  jest.spyOn(router, "push").mockImplementation(() => Promise.resolve());
  jest.spyOn(router, "replace").mockImplementation(() => Promise.resolve());

  const useRouterMock = () => ({
    router,
    pathname: router.pathname,
    route: router.route,
    query: router.query,
    asPath: router.asPath,
    prefetch: router.prefetch,
    push: router.push,
    replace: router.replace,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const mockUseRouter = () => useRouterMock();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  (useRouter as jest.Mock).mockImplementation(mockUseRouter);

  return router;
};