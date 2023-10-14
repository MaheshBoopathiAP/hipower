/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        MONGODB_URI: process.env.MONGODB_URI,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
    webpack:(config,options)=>{
        config.module.rules.push({
                
            test: /\.node$/,
            use:[
                {
                    loader: 'node-loader',
                }
            ]
        })
        return config
    }
}

module.exports = nextConfig

