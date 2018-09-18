

/*-- 3 : Joy ------------------------------------------*/


function showName() { // Declare function
    
    var elCCText = document.getElementById('joy'); // Gets the element with an id of my-name
    elCCText.textContent = 'I think joy is one of greatest blessings in life.';
    
    // Store the element to be removed in a variable.
    var removeName = document.getElementById('3');

    // Find the parent element which contains the element to be removed.
    //var getNameParent = document.getElementById('page-277');
    var getNameParent = removeName.parentNode;

    // Remove the element.
    getNameParent.removeChild(removeName);

}

var elShow = document.getElementById('blessings'); // Get the page-277
elShow.addEventListener('click', showName, false); // Click to show text in the my-name element


