const ENV = process.env.API_ENV;
module.exports = {
  NODE_ENV: '"production"',
  API_HOST: `"http://admin${ ENV === 'prod' ? '' : ENV }.corp.youyutouzi.com"`,
  UPLOAD_TOKEN: `"http://${ ENV === 'prod' ? '' : ENV }.youyutouzi.com"`,
}
