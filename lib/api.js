define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQDJLaZ9byDVlI54xieeUE5sBdtS-rAebMWVS6aTncw-QskctnAzmwQZDrZTzSkGV5Bkgp_NamfFEPnRHZ1MSbNPz5nEXrbYv1s33p2Z3pqzRAESwas1fzfMbfVSU-en43OQO3UOQvUnIGged-FyqFFaEpwgdEA';

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