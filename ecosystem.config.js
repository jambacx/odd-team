module.exports = {
  apps: [{
    name: 'resume-front',
    script: 'npm run start',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '300M',
    env: {
      "PORT": 4000,
      "NODE_ENV": "development"
    },
    env_production: {
      "PORT": 4000,
      "NODE_ENV": "production",
      "NEXT_PUBLIC_API_URL": 'https://out-api.mobicom.mn/api/v1',
      "NEXT_PUBLIC_GET_URL": 'https://out-api.mobicom.mn/upload'
    }
  }],

  deploy: {
    production: {
      user: 'ec2-user',
      host: '54.179.168.190',
      ref: 'origin/main',
      key: '~/Documents/pems/resume-api.pem',
      path: '/home/ec2-user/resume',
      repo: 'git@gitlab.com:Erdenebulgan/resume.git',
      'post-deploy': 'npm install && rm -rf dist && npm run build && pm2 reload ecosystem.config.js',
    }
  }
}
