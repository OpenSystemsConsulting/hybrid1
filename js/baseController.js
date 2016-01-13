angular.module('BaseController', [])


.controller('BaseController', ['$rootScope', '$scope', '$state', 'Job', 'History', 'util', '$ionicActionSheet', '$ionicPopup', 'pdaParams', 'gpsService','appService','pushService', '$log','Logger',
function($rootScope, $scope, $state, Job, History, util, $ionicActionSheet, $ionicPopup, pdaParams,gpsService,appService,pushService,$log,Logger) {

	var logParams = { site: pdaParams.getSiteId(), driver: pdaParams.getDriverId(), fn: 'BaseController'};
	var log = Logger.getInstance(logParams);
	var mystr;

		$rootScope.desktopBrowserScrolling = true;
			// Make this false when you go into Mobile Production
			// "true" allows clean testing within the Desktop Browser

	$scope.pdaParams = pdaParams;

	  $scope.base = { "bDataChanged": false, 
	  			// For Edit Forms, this could be used to display/hide a "Save" Button
	  								"currentItem": null,		// Set by derived Class
	  								"currentData": null 		// Set by derived Class
  								};	


	  //	The Forms in this App are controlled by extra Attributes defined
	  //	within the LoopBack Data Model Properties and control the display
	  //	of these Properties within their Display and Edit Forms
	  $scope.getModelMetadata = function(model,
	  																		rootScopeProperty,
	  																		cb)  // 
	  {
	  	if ($rootScope[rootScopeProperty]) {
	      if (cb) {
  				cb($rootScope[rootScopeProperty]);
	      }
	  		return;	// We've already got the Metadata...
	  	}

			// This for sync model
			if (model.metadata) model.metadata(
				function(dummy, results) {

		    	// "index" will be used for Property Display Order
    			for (var property in results.properties) {
			      results.properties[property].index = 
			        results.properties[property].index || 1000000000;		// sets index if currently no value
			        	// By default, put Properties at the bottom
			    }

				// Sort the Properties by "index"
			    results.properties.sort(sortByindex);
			    function sortByindex(a,b) {
			    	return a.index - b.index;
			    }

				$rootScope[rootScopeProperty] = results;

				  if (cb) {
						cb($rootScope[rootScopeProperty]);
				  }

				}
			);

/*
// This worked before we implemented sync
			if (model.metadata) model.metadata()  // if the Model exposes Metadata, get it
		    .$promise
		    .then(function(results) {

		    	// "index" will be used for Property Display Order
    			for (var property in results.properties) {
			      results.properties[property].index = 
			        results.properties[property].index || 1000000000;
			        	// By default, put Properties at the bottom
			    }

			    results.properties.sort(sortByindex);
			    function sortByindex(a,b) {
			    	return a.index - b.index;
			    }
			    	// Sort the Properties by "index"

		      $rootScope[rootScopeProperty] = results;
		      	// Any Controller can access the Metadata
		      	// by the $rootScope Property named: rootScopeProperty 

		      if (cb) {
	  				cb($rootScope[rootScopeProperty]);
		      }
		    });
*/
	  }


	  // If some Properties within the Model have "includeInHeader" attributes,
	  // the Labels and Values will be concatanated into a meaningful description
	  // of the Entity...
	  $scope.generateHeaderForModelInstance = function(item, metadata, bLabels) {
		    mystr = 'generateHeaderForModelInstance';
			//log.debug(mystr);

		  	if (!metadata || !item) {
		  		return '';
		  	}
        var header = '';

        if (metadata.properties.length > 0) {
          header = (metadata.properties[0].label || '') + ' : ' +
                        item[metadata.properties[0].name];
        }
        var headerProperties = util.findArrayItemsByKey(metadata.properties, "includeInHeader", true);
        if (headerProperties.length > 0) {
          header = '';
          for (var i = 0; i < headerProperties.length; i++) {
            if (i > 0) {
              header += ' ';
            }
            if (bLabels !== false) {
            	header += (headerProperties[i].label || '') + ':' + item[headerProperties[i].name];
            }
            else {
            	header += item[headerProperties[i].name];
            }
          }
        }
        else {
          var headerProperty = util.findArrayItemByKey(metadata.properties, "defaultHeader", true);
          if (headerProperty) {
            header = (headerProperty.label || '') + ' : ' + item[headerProperty.name];
          }
        }
        return header;
 	  }

 	  // The "item" argument represents the Raw Data Values for the Entity
 	  // The "metadata" argument represents the Rules of how to Render the Values
 	  // The "bNew" argument directs us to created a new Default Entity
	$scope.combineValuesAndLabels = function(item, metadata, bNew) {
		var data = []

		mystr = 'combineValuesAndLabels';
		//log.debug(mystr);

		//Will register if not already registered

		//console.log("Now In combineValues ITEM TO FOLLOW in LOG");
		//console.log("Now In combineValues ITEM = " + JSON.stringify(item));

		//$log.info("Now In combineValues ITEM = " + JSON.stringify(item));

		$scope.convertDates(item, metadata);
		//console.log("Now In combineValues 1");
		//console.log("Now In combineValues 2 itemlength = " + item.length);

		var curProp;
		for( var iac = 0; iac < item.length; iac++)    //LEG LOOP EACH JOB LEG
		{
			var interimitem = item[iac];  //Just Get one of the Jobs/Leg
			if(pdaParams.experimental)
				log.debug("LegLoop:START:"+iac);

			for (var i = 0; i < metadata.properties.length; i++) {	 //Metadata LOOP loops thru each column

				if(pdaParams.experimental)
					log.debug("Metadata:START:"+i);
				if (i === 0) {
					metadata.properties[i].index = 1;
						// Give the First Property a predictable Index Value
				}

				//var property = interimitem[metadata.properties[i].name];
				curProp = metadata.properties[i];
				var property = interimitem[curProp.name];
	
/*
				if ((property == undefined) && bNew) {
					property = interimitem[metadata.properties[i].name] = metadata.properties[i].default || '';
						// Use "default" values (if specified) for New Entities...
				}

				if (((metadata.properties[i].inputType == "date") || (metadata.properties[i].type == "Date")) && bNew) {
					property = convertDate(new Date().toISOString());
						// The Ionic Date Input is pretty finicky about what Format it allows.
				}
*/

				if (property !== undefined) {

					// These properties are referenced in the jobDetailContentRow template as e.g. property.legid
					var addProp = { label: (curProp.label || curProp.name), 
												value: property,
												id: curProp.id,
												index: curProp.index,
												linkPattern: curProp.linkPattern,
												required: curProp.required,
												property: curProp.name,
												centered: curProp.centered || false,
												strong: curProp.strong || false,
												type: (curProp.inputType || ''),
												numlegs: interimitem.mobjobTotalLegs,
												legid: interimitem.mobjobSeq
											}
							// Ionic / Angular now have Data and Metadata combined for rendering...

					if (curProp.generateNewID) {
						addProp.generateNewID = curProp.generateNewID;
							// Some Database Tables may not be set up to auto-generate
							// new Primary Keys, so this will do it for them.
							// NOTE:  THIS IS A HACK THAT USING THE CURRENT Date/Time...
					}

					if (curProp.omitFromForm) {
						addProp.omitFromForm = curProp.omitFromForm;
							// This can be used to leave a Property off specific forms
							// based on Logic within the Template
					}

					if (curProp.lastModified) {
						addProp.lastModified = curProp.lastModified;
							// To make sure we update the lastModified on upsert...
					}

					if (curProp.inputType === 'enum') {
						addProp.enum = curProp.enum;
						var currentEnumValue = util.findArrayItemByKey(addProp.enum, "value", property);
						if (!currentEnumValue) {
							currentEnumValue = addProp.enum[0];
						}
						addProp.enumValue = currentEnumValue;
							// Use a Dropdown Select to restrict the Values
					}

					data.push(addProp);
				}

				if(pdaParams.experimental)
					log.debug("Metadata:END:"+i);
			}   // Metadata End FOR


			if(pdaParams.experimental)
				log.debug("LegLoop:END:"+iac);
		} //Item/Job END FOR
		//console.log("Now In combineValues 10");
		return data;
	  }

	  // Generate a Primary Key for the new Entity Instance if necessary
	  // and then create a new Instance with Default Values if provided.
	  $scope.createNewItem = function(item, metadata) {
			var idProperty = util.findArrayItemByKey(metadata.properties, "id", true);
			if (idProperty && (idProperty.generateNewID)) {
				var newID = new Date().getTime().toString();
				newID = (new Date().getTime() % 2) + newID.substr(newID.length - 8) + (new Date().getTime() % 2);
				item[idProperty.name] = newID;
					// This is a HACK to generate an almost certain Unique Key...
			}
			else {
				item[idProperty.name] = 'New';
			}
	  	var data = $scope.combineValuesAndLabels(item, metadata, true);
	  	return data;
	  }

	  // Ionic Date Input will ONLY take the "YYYY-MM-DD"
	  $scope.convertDates = function(item, metadata) {
    	for (var property in item) {
    		var metaProperty = util.findArrayItemByKey(metadata.properties, "name", property);
    		if ((item[property]) && (metaProperty) && (metaProperty.type === 'Date')) {
    			item[property] = convertDate(item[property]);
    		}
    	}
	  }
	  		// Assume an ISO Date Format is passed in...
			  function convertDate(dateTime) {
			  	if (dateTime.indexOf('T') > 0) {
			  		dateTime = dateTime.substring(0, dateTime.indexOf('T'));
			  	}
			  	return dateTime;
			  }

		// Return a Boolean if any Data Item in the Form differs from the
		// Data originally loaded.  This is called from "onChanged" Events
	  $scope.checkIfDataChanged = function(item, data) {
	  	if (!item || !data) {
	  		return false;
	  	}
    	for (var property in item) {
    		var metaProperty = util.findArrayItemByKey(data, "property", property);
    		if (metaProperty && (item[property] !== metaProperty.value)) {
    			return true;
    		}
    	}
    	return false;
	  }

	  // If some operation, typically Creates or Updates, fails,
	  // This will let the User know what happened.
	  // This is CURRENTLY displaying the Raw Error Messages
	  // TODO: Map known errors to more User Friendly Messages.
	  function ErrorPopup(err, title, data) {
    	var messages = err.data.error.details;
    	if (messages) {
    		messages = messages.messages;
    	}
    	else {
    		messages = { "Error": err.data.error.message };
    		if (!messages) {
    			messages = { "Error": err.data.error };
    		}
    		else {
    			messages = { "Error": "Unknown Failure"};
    		}
    	}
    	$scope.errorMessages = [];

    	for (var message in messages) {
    		errorObj = { name: message, message: messages[message], label: message }
    		var metaProperty = util.findArrayItemByKey(data, "property", message);
    		if (metaProperty) {
    			errorObj.label = metaProperty.label || errorObj.label;
    		}
    		$scope.errorMessages.push(errorObj);
    	}
    		// all of the above setup assumes
    		//		err.err.data.error.details OR
    		//		err.err.data.error.message

    	// $ionicPopup provides a clean, templated way to 
    	// display flexible Info or Confirm Popups.
			var myPopup = $ionicPopup.show({
		    templateUrl: 'templates/errorPopup.html',
		    title: title,
		    scope: $scope,
		    buttons: [
		      { text: 'OK' },
		    ]
		  });
  	}

  	// "updateItem" will handle both Inserts and Updates
	  $scope.updateItem = function(item, data, model, cb, bNew) {
 			// If we didn't have to generate a Primary Key for a New Entity,
 			// we delete the "id" property to ensure the DB Generates it as needed.
	 		if (bNew) {
	 			var idProperty = util.findArrayItemByKey(data, "id", true);
	 			if (idProperty) {
		 			if (!idProperty.generateNewID) {
		 				delete item[idProperty.property];
		 			}
		 		}
	 		}

	 		// Because the UX displayed the Values controlled with the Metadata,
	 		// Let's extract the Values back into a Clean Item Object...
    	for (var property in item) {
    		var metaProperty = util.findArrayItemByKey(data, "property", property);
    		if (metaProperty && (item[property] !== metaProperty.value)) {
    			item[property] = metaProperty.value;
    		}
    	}

	 		// If there is a "lastModified" Property, update it to "NOW"...

	 		var lastModified = util.findArrayItemByKey(data, "lastModified", true);
	 		if (lastModified) {
	 			item[lastModified.property] = new Date().toISOString();
	 		}


    	// Insert or Update
		  model.upsert(item) // Method generated by the LoopBack Angular SDK
		    .$promise
		    .then(function(results) {
		    	cb(results);
		    		// The Callback will usually do something like refresh the View
		    }, function(err) {
		    	ErrorPopup(err, 'Save Error(s)', data);
		    		// Display the Error(s)
		    });
	  }

	  // Delete an Entity
	  $scope.deleteItem = function(id, model, cb) {
		  model.deleteById({"id": id})  // Method generated by the LoopBack Angular SDK
		    .$promise
		    .then(function(results) {
		    	cb(results);
		    }, function(err) {
		    	ErrorPopup(err, 'Deletion Error(s)', data);
		    		// Display the Error(s)
		    });
	  }

	  // Most Views will have to Display some sort of Context Menu and
	  // this is the Base Helper Function which uses $ionicActionSheet
	  // to reveal this Context Menu from the Bottom of the Screen.
		$scope.showActionSheetBase = function(label, buttons, cb, bDelete) {
			// Show the action sheet
			var sheetParams = {
				buttons: buttons,						// Different for each View
				destructiveText: 'Delete',	// Delete the Entity being Displayed
				titleText: label,						// Gives some Context to the Menu
				cancelText: 'Hide Menu',		// Click to Hide the Menu
				cancel: function() {},			// Do nothing extra on Cancel
				buttonClicked: function(index) {
				 	var command = buttons[index].command;
				 	if (cb) {
				 		cb(command);						// Just let the View know the chosen
				 	}													// Action to perform...
					return true;
			 	},
			 	destructiveButtonClicked: function() {
				 	if (cb) {
				 		cb("delete");						// "delete" is the Action for "Delete"
				 	}
	   			return true;
			 	}
			}
			if (bDelete === false) {
				delete sheetParams.destructiveText;
						// if "delete" doesn't mean anything in this Context
			}

			// Let Ionic display the Menu
			$ionicActionSheet.show(sheetParams);
		};

		// Enum Selects need special Handling onChange
		// Since their Label may not be equivalent to the mapped Value
		// and the Enum Array Objects cannot serve as the actual Property Value
		$scope.multiSelectChange = function(property) {
	  	if ($scope.bNewItem) {
	  		$scope.base.bDataChanged = true; // New Entities should always allow "save"
	  		return;	
	  	}

			property.value = property.enumValue.value;
				// Set the Actual Property Value from the Chosen Enum Label...

			$scope.base.bDataChanged = $scope.checkIfDataChanged($scope.base.currentItem, $scope.base.currentData);
				// Check if anything has changed from the currentItem...
		}

		// This is actually done on keyup for standard Input Fields
		// Since onChange only triggers when the New Value differs 
		// from the Original Value.
	  $scope.dataChanged = function(evt, property) {
	  	if ($scope.bNewItem) {
	  		$scope.base.bDataChanged = true; // New Entities should always allow "save"
	  		return;	
	  	}

			$scope.base.bDataChanged = $scope.checkIfDataChanged($scope.base.currentItem, $scope.base.currentData);
				// Check if anything has changed from the currentItem...
	  };

	}
]);
