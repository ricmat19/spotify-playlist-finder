define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQBSkS-kTgi06UL02koB_A3ExYN81Ih1yjHB3nq9y5b3Bqtk3X4y22zVFDNgFj7PYuLfy9-t28s0G1RvdNcZj7HlvNj3v8HgtNb-Iep8i7s7H-ooBEXXliR9NzgLLJDAQaNLvL1MBHKoYI4td1zrnsE0iCrTXGY';

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