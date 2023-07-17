import $ from 'jquery';
import { handleErrors, safeCredentials, authenticityHeader, getMetaContent, getAuthenticityToken } from './utlils/fetchHelper.js'

export const successCB = function (response) {
    console.log(response);
}

export const errorCB = function (error) {
    console.log('Error: ' + error);
} 

$.ajaxSetup({
    headers: { 
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    }
})

export const createUser = function (userData, successCB, errorCB) {
    const request = {
        type: 'POST',
        url: '/api/users',
        data: userData,
        success: successCB,
        error: errorCB
    }
    $.ajax(request);
}   

export const signInUser = function (user, successCB, errorCB) {
    const request = {
      type: 'POST',
      url: '/api/sessions',
      data: {
        user: {
          email: user.email,
          password: user.password
        }
      },
      success: successCB,
      error: errorCB
    };
  
    $.ajax(request);
};

export const deleteTweet = function (id, successCB, errorCB) {
    const request = {
        type: 'DELETE',
        url: '/api/tweets/' + id,
        success: successCB,
        error: errorCB,
        data: {
            tweet: {
                id: id,
                message: message
            }
        }
    }
    $.ajax(request);
}

export const createTweet = function (message, successCB, errorCB) {
    const request = {
        type: 'POST',
        url: '/api/tweets',
        data: JSON.stringify({
            tweet: {
                message: message
            }
        })
    }
    $.ajax(request);
}
  
export const getTweets = function (successCB, errorCB) {
    const request = {
      type: 'GET',
      url: '/api/tweets',
      data: {
        tweet: {
          username: username,
          message: message,
          created_at: created_at
        },
      },
      success: successCB,
      error: function (xhr, textStatus, errorThrown) {
        // Call the error callback with the error information
        errorCB(errorThrown);
      },
    };
  
    $.ajax(request);
  };
  

export const getTweetsByUser = function (username, successCB, errorCB) {
    const request = {
        type: 'GET',
        url: '/api/users/' + username + '/tweets',
        data : {
            username: username
        },
        success: successCB,
        error: errorCB
    }
    $.ajax(request);
}

export const searchKeyword = function (keyword, successCB, errorCB) {
    const request = {
        type: 'GET',
        url: '/api/tweets/search/' + keyword,
        data: {
            keyword: keyword
        },
        success: successCB,
        error: errorCB
    }
    $.ajax(request);
}

export const createSession = function (user, successCB, errorCB) {
    const request = {
        type: 'POST',
        url: '/api/sessions',
        data: {
            user: {
                email: user.email,
                password: user.password
            }
        },
        success: successCB,
        error: errorCB
    }
    $.ajax(request);
}

export const getAuthenticated = function (successCB, errorCB) {
    const request = {
        type: 'GET',
        url: '/api/authenticated',
        success: successCB,
        error: errorCB
    }
    $.ajax(request);
}