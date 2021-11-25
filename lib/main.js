define(function(require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');

    const api = require('./api');

    console.log('main');

    const container = $('#app');

    api.getCategories().then(({ categories }) => {
        categories.items.forEach(item => {

            let category = `
                <div class="card" id=${item.id}>
                    ${JSON.stringify(item)}
                </div>`

            container.append(category);
        })
    });
    
    $("#app").on("click", ".card", function (e) {

        const selectedPlayList = e.target.id;

        api.getPlaylists(selectedPlayList).then(({playlists}) => {

            const playlist = [];

            playlists.items.forEach(item => {
                playlist.push(`<div class="playlist">${JSON.stringify(item)}</div>`)
            })

            let playlistModal = `
                <div class="modal" tabindex="-1" role="dialog">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                            <div class="modal-body">
                                ${playlist.map(item =>{
                                    `<div>${item}</div>`
                                })}
                                ${playlist}
                                ${playlist.join("")}
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`

            container.append(playlistModal);
        });
    })

    $("#app").on("click", ".close-modal", function () {

        $(".modal").remove();

    })

})