define(function(require) {
    const $ = require('jquery');
    const _ = require('lodash');
    const moment = require('moment');
    const api = require('./api');
    const container = $('#app');

    let playlistArray = [];

    $(function createPlayListModal() {
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
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>`
            container.append(playlistModal);
            $(".modal").hide();
    })

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

        playlistArray = [];
        $(".modal-body").empty();

        const selectedPlayList = e.target.id;

        api.getPlaylists(selectedPlayList).then(({playlists}) => {
            console.log(playlists.items)
            playlists.items.forEach(item => {
                playlistArray.push(`<div class="playlist">${JSON.stringify(item)}</div>`)
            })

            $(playlistArray.join("<hr>")).appendTo(".modal-body")
            $(".modal").show();
        });
    })

    $("#app").on("click", ".close-modal", function () {
        playlistArray = [];
        $(".modal-body").empty();
        $(".modal").hide();
    })

})