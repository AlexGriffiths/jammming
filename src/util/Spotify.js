const clientId = '0a37e4cbec5d42a5b5208b613283ec42';
const redirectURI = 'http://localhost:3000/';
const accessURIBase = 'https://accounts.spotify.com/authorize';
const spotifyURIBase = 'https://api.spotify.com/v1/';

let accessToken;

const Spotify  = {

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }


  const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
  const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
  if (urlAccessToken && urlExpiresIn) {
    accessToken = urlAccessToken[1];
    const expiresIn = urlExpiresIn[1];
    window.setTimeout(() => accessToken = '', expiresIn * 1000);
    window.history.pushState('Access Token', null, '/');
   } else {
    const accessURI = `${accessURIBase}?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    window.location = accessURI;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`${spotifyURIBase}search?type=track&q=${term}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
  ).then(response => { return response.json(); }
  ).then(jsonResponse => { // parsing of the retreived data into json objects.
      if (!jsonResponse.tracks) {
        return [];
      }
  /* picking of the json data and assigning to track object. */
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  savePlaylist(name, trackUris) {
   if (!name || !trackUris || trackUris.length === 0) return;
   const userUrl = 'https://api.spotify.com/v1/me';
   const headers = {
     Authorization: `Bearer ${accessToken}`
   };
   let userId = undefined;
   let playlistId = undefined;
   fetch(userUrl, {
     headers: headers
   })
   .then(response => response.json())
   .then(jsonResponse => userId = jsonResponse.id)
   .then(() => {
     const createPlaylistUrl = `https://api.spotify.com/v1/users/${userId}/playlists`;
     fetch(createPlaylistUrl, {
         method: 'POST',
         headers: headers,
         body: JSON.stringify({
           name: name
         })
       })
       .then(response => response.json())
       .then(jsonResponse => playlistId = jsonResponse.id)
       .then(() => {
         const addPlaylistTracksUrl = `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`;
         fetch(addPlaylistTracksUrl, {
           method: 'POST',
           headers: headers,
           body: JSON.stringify({
             uris: trackUris
           })
         });
       })
   })
 }

}

/* Hint from step 80
  window.setTimeout(() => accessToken = '', expiresIn * 1000);
  window.history.pushState('Access Token', null, '/');
*/

export default Spotify
