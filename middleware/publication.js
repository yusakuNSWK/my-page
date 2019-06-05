export default function (context) {
    context.store = process.server ? context.req.headers['user-agent'] : navigator.userAgent
  }