/*-- 1 : Mtn Dew ------------------------------------------*/


function showName() { // Declare function
    
    var elCCText = document.getElementById('my-name'); // Gets the element with an id of my-name
    elCCText.textContent = 'I absolutely LOVE Mountain Dew with my whole heart.';
    
    // Store the element to be removed in a variable.
    var removeName = document.getElementById('click-show-name');

    // Find the parent element which contains the element to be removed.
    //var getNameParent = document.getElementById('page-277');
    var getNameParent = removeName.parentNode;

    // Remove the element.
    getNameParent.removeChild(removeName);

}

var elShow = document.getElementById('page-277'); // Get the page-277
elShow.addEventListener('click', showName, false); // Click to show text in the my-name element


