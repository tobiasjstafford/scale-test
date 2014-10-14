var $ = require('jquery');
var HID = require('node-hid');

$(function() {
  $('#get-devices').on('click', function() {
    var devices = HID.devices();
    var $devices = $('#devices');
    var html = '';

    $.each(devices, function(idx, el) {
      html += '<option value="' + el.path + '">' + el.product + '</option>';
    });

    $devices.html(html);
  });
});
