define(function(require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');

    const api = require('./api');

    console.log('main');

    const container = $('#app');
    let selectedCategory = "pop";

    api.getCategories().then(({ categories }) => {
        categories.items.forEach(item => {

            let category = `
                <div class="card">
                    ${JSON.stringify(item.name)}
                </div>`

            container.append(category);
        })
    });

    // $(".card").on("click", function () {
        api.getPlaylists(selectedCategory).then(({playlists}) => {

            const playlist = [];

            playlists.items.forEach(item => {
                playlist.push(`<div class="playlist">${JSON.stringify(item.name)}</div>`)
            })

            let playlistModal = `
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            ${playlist.join("")}
                        </div>
                    </div>
                </div>`
            container.append(playlistModal);
        });
    // });

})