/** @format */

export const AUTH_API_ENDPOINT = `https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_ID}&client_secret=${process.env.REACT_APP_TWITCH_SECRET}&grant_type=client_credentials`;
export const bodyString =
  'fields *, cover.*, websites.*, alternative_names.*, external_games.*, game_modes.*, genres.*, involved_companies.company.*, game_engines.*, keywords.*, screenshots.*, release_dates.*, platforms.*, similar_games.*, themes.*,player_perspectives.*,screenshots.*; sort rating desc; where rating != null;';
