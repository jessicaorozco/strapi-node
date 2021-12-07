module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8601f41d10122f2f5ad5e7982dd1a8f'),
  },
});
