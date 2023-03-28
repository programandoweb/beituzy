const exportar  = {
  Prefijo:"/pwa",
  ConfigAppUrl : (document.location.hostname==='localhost')?window.location.origin+'/': (process.env.NODE_ENV==='development')?'https://beituzy.com/':'https://beituzy.com/',
  ConfigSocketUrl : (document.location.hostname==='localhost')?'https://socket.programandoweb.net:10081/':(process.env.NODE_ENV==='development')?'https://socket.programandoweb.net:10081/':'https://socket.programandoweb.net:10081/',
  ConfigNotifications:process.env.REACT_APP_URL_NOTIFICATIONS,
  ConfigApirest   : (document.location.hostname==='localhost')?'http://localhost/apirest.bellecolombia3/':(process.env.NODE_ENV==='development')?'https://apiv2.bellecolombia.com.co/':'https://apiv2.bellecolombia.com.co/',
  Title:'BelleColombia',
  Alt:'BelleColombia',
  db:"BelleColombia",
}

export default exportar
