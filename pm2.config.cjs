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
                DEBUG: 'myapp:error',
                PORT: 80,
            }
        }
    ]
};
