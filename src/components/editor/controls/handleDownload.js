import download from 'downloadjs';

/**
 * Handles download process
 *
 * @param {Object} api Object with API methods from parent component
 * @param {String} name Name of downloaded file
 *
 * @return void
 * */
export function handleDownload( api, name = 'file.txt' ) {

    const Blob = new window.Blob( [ '\uFEFF' + api.getValue() ] );

    download( Blob, name );
}