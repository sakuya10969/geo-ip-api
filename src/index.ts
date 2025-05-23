import { Hono } from 'hono'
import geoIp from './routes/geo-ip.route'
import { cacheMiddleware } from './middlewares/cache.middleware'

const app = new Hono()

// キャッシュ有効化
app.use('*', cacheMiddleware)

// Geo-IPルートを登録
app.route('/geo-ip', geoIp)

app.get('/', (c) => {
  return c.json({ message: 'Geo-IP APIへようこそ！' })
})

export default app
