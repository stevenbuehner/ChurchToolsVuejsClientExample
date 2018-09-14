// credentials.js
// stores credentials, must NOT be committed to git!

const isProduction = process.env.NODE_ENV === 'production';

export {
    isProduction
}

