var Contact = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var Address = {
  fullAddress: function() {
    return this.street + ", " + this.city + ", " + this.state;
  }
};

var Phone = {
  fullPhone: function() {
    return "(" + this.areaCode + ")" + this.number;
  }
};

$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("#add-phone").click(function() {
    $("#new-phone").append('<div class="row">' +
                             '<div class="col-md-2">' +
                                '<div class="form-group">' +
                                  '<label for="new-area-code">Area Code</label>' +
                                  '<input type="text" class="form-control new-area-code">' +
                                '</div>' +
                              '</div>' +
                              '<div class="col-md-4">' +
                                '<div class="form-group">' +
                                  '<label for="new-number">Phone Number</label>' +
                                  '<input type="text" class="form-control new-number">' +
                                '</div>' +
                              '</div>' +
                           '</div>');
  });
});

$(document).ready(function() {

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = Object.create(Contact);
    newContact.firstName = inputtedFirstName;
    newContact.lastName = inputtedLastName;

    newContact.addresses = [];

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = Object.create(Address);
      newAddress.street = inputtedStreet;
      newAddress.city = inputtedCity;
      newAddress.state = inputtedState;

      newContact.addresses.push(newAddress);
    });

    newContact.phone = [];

    $(".new-phone").each(function() {
      var inputtedAreaCode = $(this).find("input.new-area-code").val();
      var inputtedNumber = $(this).find("input.new-number").val();


      var newPhone = Object.create(Phone);
      newPhone.areaCode = inputtedAreaCode;
      newPhone.number = inputtedNumber;

      newContact.phone.push(newPhone);
    });


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });

       $("ul#phones").text("");
      newContact.phone.forEach(function(phone) {
        $("ul#phones").append("<li>" + phone.fullPhone() + "</li>");
      });

    });
    this.reset();
  });
});
