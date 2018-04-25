/* =================== Configs ========================= */
export const API_URL = 'http://127.0.0.1:8000';
export const API_URL_AUTHORIZE = 'https://accounts.spotify.com/authorize/';
export const SPOTIFY_CLIENT_ID = '1a13de40757f4defa6c91a7936f1cbfd';
export const SPOTIFY_CLIENT_SECRET = 'b6145b717a9f46a5a8928449181651c8';
export const CALLBACK_AUTHORIZE = 'http://127.0.0.1:8080/authorized';

/* =================== API URL ========================= */
export const CHECK_AUTHORIZE_URL = `${API_URL}/search`;
export const GET_TOKEN_URL = `${API_URL}/getAccessToken`;
export const SEARCH_URL = `${API_URL}/search`;
export const AUTHORIZE_URL = `${API_URL_AUTHORIZE}?client_id=${SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${CALLBACK_AUTHORIZE}&scope=user-read-private%20user-read-email`;

/* =================== MESSAGES ========================= */
export const AUTHORIZE_FAILED = 'We got a problem in authorizing your Spotify account, Try again !';
export const ACCESS_TOKEN_FAILED = 'We got a problem in getting your access token from spotify !';
export const WELCOME_MSG = 'Welcome, start by add some tracks to your playlists!';

/* =================== ACTION TYPES ===================== */
export const AUTHORIZED_UPDATED = 'AUTHORIZED_UPDATED';
export const ACCESS_TOKEN_UPDATE = 'ACCESS_TOKEN_UPDATE';
export const CURRENT_TRACK_UPDATED = 'CURRENT_TRACK_UPDATED';
export const PLAYLISTS_UPDATED = 'PLAYLISTS_UPDATED';
export const ACTIVE_PLY_UPDATED = 'ACTIVE_PLY_UPDATED';
export const TRACKS_UPDATED = 'TRACKS_UPDATED';
