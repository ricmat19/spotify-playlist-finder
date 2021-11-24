define(function(require) {
    const $ = require('jquery');


    const AUTH_TOKEN = 'BQAlO3NhSFV_26JOZl8wypuXB-FJ_pDFnb3u4FGrxjglASsoAbERYvDdueOkijYnjHdnu8EDR4D-dCno_W4fL-vuObjeb8aVIf1ha8ZOGNIPKljQLIrCY5D9hoVvvITpnK_Gnr8dh-fbYQphNz5ySR1318ymkvo';

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