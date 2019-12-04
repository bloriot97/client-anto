import  config from '../config';

export const version = 'v1'

export const getUri = (path) => {
    return `${config.apiURI}${path}`;
}

