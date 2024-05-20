// noinspection ES6ConvertVarToLetConst,DuplicatedCode

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

