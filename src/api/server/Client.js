import Response from '../Response';
import Utility from '../../helpers/Utility';

/**
 * Helper class for managing api connections
 * */
class Client {

	/** @property {String} API endpoint */
	static endpoint = 'http://skryba3000.server.ct8.pl/api';

	/** @property {String} API token */
	static token = '';

	/**
	 * Generate new access token if it's not stored in localStorage
	 *
	 * @return void
	 * */
	static async getToken() {

		await Client.get( '/get-token' ).then( data => {
			Client.token = data.result
		} );

	}

	static clearToken() {
		Client.token = '';
	}

	/**
	 * Perform post request to api
	 *
	 * @param {String} url
	 * @param {FormData|Object} data
	 *
	 * @return Promise
	 * */
	static async post( url, data ) {

		let headers = new Headers( {
				'Content-Type': 'application/json'
			} ),
			opts    = {
				body:        data,
				method:      'POST',
				headers:     headers,
				credentials: 'include'
			};


		let token  = Client.token,
			result = await fetch( `${Client.endpoint}${url}?token=${token}`, opts );

		let json = await result.json();

		return new Response( json );

	}

	/**
	 * Perform get request to api
	 *
	 * @param {String} url
	 * @param {Object} query
	 *
	 * @return {Promise}
	 * */
	static async get( url, query = {} ) {

		let json = {};

		query.token = Client.token;

		try {
			let result = await fetch( Utility.buildQuery( `${Client.endpoint}${url}`, query ), {
				credentials: 'include',
			} );

			json = await result.json();
		} catch ( e ) {
			console.error( `GET request error `, e );
		}


		return new Response( json );

	}

	/**
	 * Inserts new words into DB
	 *
	 * @param {Array} words
	 *
	 * @return Promise
	 * */
	static async insertWords( words = [] ) {
		return await Client.post( '/insert-words', JSON.stringify( { words } ) );
	}

	/**
	 * Check if provided word have any translations
	 *
	 * @param {String} word
	 * @param {String} language
	 *
	 * @return Promise
	 * */
	static async getTranslations( word, language ) {

		return await Client.get( '/get-translations', {
			word, language
		} );

	}

	/**
	 * Convert form data to json format
	 *
	 * @param {FormData} data
	 *
	 * @return {Object}
	 * */
	static formDataToJson( data ) {

		let result = {};

		for ( let item of  data.entries() ) {
			let [ key, value ] = item;
			result[ key ] = value;
		}

		return result;

	}

}


export default Client;
