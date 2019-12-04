const dev = {
    apiURI: 'http://localhost:3003/api/v1',
};

const prod = {
    apiURI: 'http://51.38.235.157:3003/api/v1',
};

const config = process.env.REACT_APP_STAGE === 'production'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
