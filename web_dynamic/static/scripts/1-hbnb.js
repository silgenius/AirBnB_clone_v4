// Ensure the DOM is fully loaded before running the script
$(document).ready(function() {
    var checkedAmenities = [];

    function updateAmenitiesList() {
        var checkedNames = checkedAmenities.map(function(id) {
            return $('input[type="checkbox"][data-id="' + id + '"]').data('name');
        });

        var listString = checkedNames.join(', ');

        $('#Amenities h4').text(listString);
    }

    $('input[type="checkbox"]').on('change', function() {
        var amenityId = $(this).data('id');

        if ($(this).is(':checked')) {
            if (!checkedAmenities.includes(amenityId)) {
                checkedAmenities.push(amenityId);
            }
        } else {
            // Remove the amenity ID from the array if it's unchecked
            checkedAmenities = checkedAmenities.filter(function(id) {
                return id !== amenityId;
            });
        }

        // Update the h4 tag with the new list of checked amenities
        updateAmenitiesList();
    });
});

