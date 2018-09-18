

/*-- 2 : Cambodia ------------------------------------------*/


function showName() { // Declare function
    
    var elCCText = document.getElementById('cambodia'); // Gets the element with an id of my-name
    elCCText.textContent = 'Going to Cambodia in 2016 changed my life.';
    
    // Store the element to be removed in a variable.
    var removeName = document.getElementById('2');

    // Find the parent element which contains the element to be removed.
    //var getNameParent = document.getElementById('page-277');
    var getNameParent = removeName.parentNode;

    // Remove the element.
    getNameParent.removeChild(removeName);

}

var elShow = document.getElementById('cambodia-two'); // Get the page-277
elShow.addEventListener('click', showName, false); // Click to show text in the my-name element


