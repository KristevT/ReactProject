export const AppRoute = {
    main: '/',
    service: '/service'
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