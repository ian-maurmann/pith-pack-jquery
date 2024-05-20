// noinspection ES6ConvertVarToLetConst

// Create Toolbox if it does not exist
// noinspection JSUnusedAssignment
if( typeof IansJqueryToolbox === 'undefined' || IansJqueryToolbox === null || IansJqueryToolbox === false){
    // noinspection SpellCheckingInspection
    var IansJqueryToolbox = {};
}

// Create Dynamic Event Control if it does not exist
if( typeof IansJqueryToolbox.DynamicEventControl === 'undefined' || IansJqueryToolbox.DynamicEventControl === null || IansJqueryToolbox.DynamicEventControl === false){
    IansJqueryToolbox.DynamicEventControl = {};
}

// Delegate Event
IansJqueryToolbox.DynamicEventControl.delegateEvent = function(selector, event_type_name, handler){
    // Start delegation as an empty object
    let delegation = {};

    // Add property for handling the given event type using the given handler
    delegation[event_type_name] = function(event){
        // noinspection JSUnresolvedFunction
        let element = $(event.target);
        handler(element, event);
    };

    // Listen for event to happen on given selector
    // noinspection JSUnresolvedFunction
    $(document).on(delegation, selector );
}



// Create Input Mask Utility if it does not exist
if( typeof IansJqueryToolbox.InputMaskUtility === 'undefined' || IansJqueryToolbox.InputMaskUtility === null || IansJqueryToolbox.InputMaskUtility === false){
    IansJqueryToolbox.InputMaskUtility = {};
}


// Apply Currency Mask
IansJqueryToolbox.InputMaskUtility.applyCurrencyMask = function(element){
    // Vars
    let input_string   = String(element.value);
    let allowed_string = '0123456789';
    let masked_string  = '';

    // Filter to allowed chars
    for (let i = 0; i < input_string.length; i++) {
        let current_char = input_string.charAt(i);
        let is_allowed   = (allowed_string.indexOf(current_char) !== -1);

        if(is_allowed){
            masked_string += current_char;
        }
    }

    // Clean-up leading zeros
    let masked_int       = parseInt(masked_string);
    let clean_string     = isNaN(masked_int) ? '' : String(masked_int);
    let formatted_string = '';

    // Add decimal point
    if(clean_string.length === 0){
        formatted_string = '0.00'
    }
    else if(clean_string.length === 1){
        formatted_string = '0.0' + clean_string;
    }
    else if(clean_string.length === 2){
        formatted_string = '0.' + clean_string;
    }
    else if(clean_string.length > 2){
        let insert_pos = clean_string.length - 2;
        formatted_string = clean_string.substring(0, insert_pos) + '.' + clean_string.substr(insert_pos);
    }

    // Update the field value
    element.value = formatted_string;
};

