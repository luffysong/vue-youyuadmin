const ENV = process.env.API_ENV;
module.exports = {
  NODE_ENV: '"production"',
  API_HOST: `"http://admin${ ENV === 'prod' ? '' : ENV }.corp.youyutouzi.com"`,
  UPLOAD_TOKEN: `"${ ENV === 'prod' ? 'https://www' : 'http://' + ENV }.youyutouzi.com"`,
}
