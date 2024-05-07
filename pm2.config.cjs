module.exports = {
    apps: [
        {
            name: 'myapp',
            instances: 'max',
            script: 'bin/www',
            exec_mode: 'cluster',
            watch: false,
            autorestart: true,
            env: {
                DEBUG: 'myapp:*',
                PORT: 3000,
            }
        }
    ]
};
