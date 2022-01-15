export const ADDRESS_DELIM = ",";
export const EMAIL_ADDRESS_DELIM = "@";
export const ORIGIN = (new URL(document.location)).origin;
export const HOST = (new URL(document.location)).host;
export const PATHNAME = (new URL(document.location)).pathname.replace(/\/+$/, '');
export const API_GW_URL = 'https://api.zeer0.com/v001';
export const EMAIL_CONTENT_URL = `${API_GW_URL}/email`;
export const EMAILS_LIST_URL = `${API_GW_URL}/email/list`;
export const COMMENT_POST_URL = `${API_GW_URL}/email/comments`;
export const DEFAULT_FQDN = HOST.startsWith('localhost') ? 'ramachandr.in' : HOST;
export const LOGIN_REDIRECT_URL = `${ORIGIN}${PATHNAME}`;
// export const LOGOUT_REDIRECT_URL = `${ORIGIN}${PATHNAME}`;
export const COGNITO_URL = 'https://zeer0.auth.ap-south-1.amazoncognito.com/';
export const CLIENT_ID = '7iia3e63t239ul2el9vrqfkb3v';
export const RESPONSE_TYPE = 'token';
export const SCOPE = 'email+openid';
export const NEW_EMAIL_CHECKOUT_TIME = 300000;
export const COGNITO_LOGIN_URL = `${COGNITO_URL}login?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}&redirect_uri=${LOGIN_REDIRECT_URL}`;
export const EMAIL_FOLDERPATH_QP_STRING = `folderpath=/email`;
export const BCC_EMAIL = `secret-bcc-sent-folder@${DEFAULT_FQDN}`;
