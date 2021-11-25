define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQDRhw9h_1Doc_PwX-DAzJ-ho7J0462OG29gADe3iEHm4oyzo6vLsraHlxospvQePW5kGP3PDj8gcuLzPjUmKEeL_qSCBt1AsmMwG_BQITdx6_qShqGygx6dQV-HsB4laKhdCcRu1bbh1KOxcvbLCLe2Vh1k7zY';

    const BASE_URL = 'https://api.spotify.com/v1';

    return {
        getCategories: function() {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + '/browse/categories',
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + AUTH_TOKEN
                    },
                    success: (data, status) => {
                        console.log('getCategories: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('Spotify Auth Token is Invalid')
                        } else {
                            reject(err);
                        }
                    }
                })
            })
            
        },
        getPlaylists: function(category_id) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: BASE_URL + `/browse/categories/${category_id}/playlists`,
                    method: 'GET',
                    headers: {
                        Authorization: 'Bearer ' + AUTH_TOKEN
                    },
                    success: (data, status) => {
                        console.log('getPlaylists: ', data);
                        resolve(data);
                    },
                    error: err => {
                        if(err.status === 401) {
                            alert('Spotify Auth Token is Invalid')
                        } else {
                            reject(err);
                        }
                    }
                })
            })
        },
    }

})