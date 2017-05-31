class Auth{
	/**
	 * Authenticate a user. Save a token string in Local Storage
	 *
	 * @param {string} token
	 * @param {string} email
	 */
	 static authenticateUser(token, email){
	 	localStorage.setItem('token', token);
	 	localStorage.setItem('email', email);
	 }

	 /**
	  * Check if a user is authenticated - check if a token is saved in Local Storage
	  *
	  * @returns {boolean}
	  */
	  static isUserAuthenticated(){
	  	return localStorage.getItem('token') != null;
	  }
}