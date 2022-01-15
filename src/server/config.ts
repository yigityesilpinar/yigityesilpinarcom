import convict from 'convict'

const config = convict({
  env: {
    doc: 'Node environment.',
    format: ['development', 'test', 'production'],
    default: 'production',
    env: 'NODE_ENV'
  },
  appEnv: {
    doc: 'Applicaton environment.',
    format: ['development', 'staging', 'production'],
    default: 'development',
    env: 'APP_ENV'
  },
  host: {
    doc: 'Server host',
    format: String,
    default: '0.0.0.0',
    env: 'HOST'
  },
  port: {
    doc: 'Server port',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },
})

config.validate({ allowed: 'strict' })

export type PassedToClient = Pick<ReturnType<typeof config.getProperties>, 'appEnv' | 'env'>

export default config
