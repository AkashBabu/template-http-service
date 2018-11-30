import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import cors from '@koa/cors'

const app = new Koa()
const router = new Router({sensitive: false, strict: false})

// CORS middleware
app.use(cors())

// Body Parser. Adds => ctx.body
app.use(bodyParser({
    jsonLimit: '1mb',
    formLimit: '1mb',
}))

router.get('/try/:me', ctx => {
    console.log(`ctx.params:`, ctx.params)
    console.log(`ctx.query:`, ctx.query)
    ctx.body = 'Success'
})

app.use(router.routes())


app.listen(9900, (err) => {
    console.log(`Server started...`)
})

// TODO: Api middleware (ms-logger with key as api)
// TODO: Health Middleware
// TODO: Logger Middleware 
// TODO: Shutdown middleware