export const AppRoute = {
    main: '/',
    service: '/service',
    login: '/login'
}

export const URLs = {
    services: 'https://673423afa042ab85d1190055.mockapi.io/api/v1/services',
    news: 'https://673423afa042ab85d1190055.mockapi.io/api/v1/main'
}

export const getStyleForNavLink = ({isActive}) =>
    isActive
        ? {
            cursor: 'default',
            color: 'black',
            textDecoration: 'none',
            padding: 5
          }
        : {padding: 5}