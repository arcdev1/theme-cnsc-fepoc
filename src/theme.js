/*
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 */
;(function ($, wb, window) {
  'use strict';
  window.poc = {
    // USERS & AUTHENTICATION
    getCurrentUser: getCurrentUser,
    signIn: signIn,

	// CMS
	cms: getCmsClient(),
	  
    // LICENCES
    getLicenceList: getLicenceList,
    getSelectedLicence: getSelectedLicence,
    licenceListTo2DArray: licenceListTo2DArray,
    selectLicence: selectLicence,

    // DATA TABLE HELPER
    addRowClickHandler: addRowClickHandler,
    bindDataToTable: bindDataToTable
  };

  var API_ROOT = 'https://cnsc-poc-api.azurewebsites.net/api/';

  /* -----------------------------
   * USERS AND AUTHENTICATION
   *----------------------------- */
  function signIn (email, password, redirect, store, location) {
    location = location || window.location;
    $.get(API_ROOT + '/users/1234', function (user) {
      user.email = user.email || email;
      cacheUser(user, store);
      location.href = redirect;
    });
  }

  function cacheUser (user, store) {
    setState(
      'currentUser', {
        id: '1234',
        email: user.email,
        name: user.firstName + ' ' + user.lastName
      }
    , store)
  }

  function getCurrentUser (store) {
    const user = getState(store).currentUser
    if (user) {
      return user
    }
    location.href = '/index-' + wb.lang + '.html'
  }
	
  /* -----------------------------
   * CMS
   *----------------------------- */
	function getCmsClient() {
			const SPACE_ID = 'i1v307pa7u1u'
			const ACCESS_TOKEN = '8889ff8f66619853cbfe8900690fc667e3b95467a53c843066a6e5145f9acec0'

			const client = contentful.createClient({
				// This is the space ID. A space is like a project folder in Contentful terms
				space: SPACE_ID,
				// This is the access token for this space. Normally you get both ID and the token in the Contentful web app
				accessToken: ACCESS_TOKEN
			})
			
			return client;
	}
	
  /* -----------------------------
   * LICENCES
   *----------------------------- */
  function getLicenceList (listReceivedCallback, store) {
    var licenceList = getCachedLicenseList(store)
    if (licenceList) {
      console.log('using cached license list')
      return listReceivedCallback(licenceList)
    }

    var sstsAuthorizationsEndpoint =
      API_ROOT + '/users/' + getCurrentUser().id + '/authorizations/SSTS'

    $.get(sstsAuthorizationsEndpoint, authorizationReceived)

    function authorizationReceived (authorization) {
      var licenceList = authorization.licences
      cacheLicenceList(licenceList)
      listReceivedCallback(licenceList)
    }
  }

  function getCachedLicenseList (store) {
    return getState(store).licenceList
  }

  function cacheLicenceList (list, store) {
    setState(
      'licenceList', list
    , store)
  }

  function licenceListTo2DArray (list) {
    return list.map(function (licence) {
      return [licence.licenceNumber, licence.effectiveDate, licence.expiryDate]
    })
  }

  $(document).on('licenceSelected', selectLicence)
  function selectLicence (e) {
    setState('selectedLicence', e.selectedLicence)
    location.href = '/create-sealed-source-step-two-' + wb.lang + '.html'
  }

  function getSelectedLicence () {
    var selectedLicence = getState().selectedLicence
    if (!selectedLicence) {
      location.href = '/create-sealed-source-step-one-' + wb.lang + '.html'
    }
    return selectedLicence
  }

  /* -----------------------------
   * DATA TABLE HELPERS
   *----------------------------- */
  function bindDataToTable (data, $table, options) {
    var config = options || {}
    config.data = data

    $table
      .addClass('wb-tables')
      .attr('data-wb-tables', JSON.stringify(config))
      .trigger('wb-init.wb-tables')
  }

  function addRowClickHandler ($table, onClick) {
    $table.on('init.dt', function (event) {
      $table.find('tr').each(function (index, row) {
        if (index > 0) {
          $(row)
            .css('cursor', 'pointer')
            .click(function (e) {
              onClick($(row))
          })
        }
      })
    })
  }

  /* -----------------------------
   * STATE MANAGEMENT
   *----------------------------- */
  function getState (store) {
    store = store || window.sessionStorage
    return JSON.parse(store.getItem('state') || '{}')
  }

  function setState (key, value, store) {
    store = store || window.sessionStorage
    const state = getState(store)
    state[key] = value
    store.setItem('state', JSON.stringify(state))
  }

  window['wb-data-ajax'] = {
    corsFallback: function (fetchObj) {
      fetchObj.url = fetchObj.url.replace('.html', '.htmlp')
      return fetchObj
    }
  }
})(jQuery, wb, this)
