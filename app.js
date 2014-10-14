var $ = require('jquery');
var HID = require('node-hid-fixed');

$(function() {
  $('#get-devices').on('click', function() {
    var devices = HID.devices();
    var $devices = $('#devices');
    var html = '';

    $.each(devices, function(idx, el) {
      html += '<option value="' + el.path + '">' + el.product + '</option>';
    });

    $devices.html(html);

    $('#read-data').show();
    $('#output').hide();
  });

  $('#read-data').on('click', function() {
    var path = $('#devices').val();

    var device = new HID.HID(path);

    device.read(function(err, data) {
      if (err) {
        data = err;
      }

      var html = '';
      $.each(data, function(idx, el) {
        html += 'byte: ' + el + ', ';
      });

      $('#output').val($('#output').val() + '\n' + html).show();
    });
  });
});
