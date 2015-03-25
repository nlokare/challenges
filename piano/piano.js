$(document).ready(function () {

  var notes = $('.notes');
  var log = $('.log');
  var key = $('.key');
  
  // Piano Click
  key.click(function (e) {
    e.preventDefault();
    var currentLog = log.text();
    currentLog += $(this).text();
    log.html(currentLog);
  });

  // Clear the log and input field
  $('.clear').click(function (e) {
    e.preventDefault();
    log.html('Notes played: ');
    notes.val('');
    key.removeClass('played');
  });

  // Allows you to play from the keyboard
  $('body').on('keypress', function (e) {
    if (!notes.is(':focus')) {
      e.preventDefault();
      var note = $('.' + String.fromCharCode(e.which));
      note.addClass('played');
      var currentLog = log.text();
      currentLog += note.text();
      log.html(currentLog);
    }
  });
  
  $('body').on('keyup', function (e) {
    key.removeClass('played');
  });

  // Play comma delimited string of notes
  $('.play').click(function (e) {
    e.preventDefault();
    var notesList = notes.val();
    if (notesList.length > 1 && notesList.indexOf(',') === -1) {
      alert('Please place commas between notes you would like to play!');
    } else {
      notesList = notesList.split(',');
      var playNotes = setInterval(function () {
        if (notesList.length === 0) {
          clearInterval(playNotes);
          key.removeClass('played');
        } else {
          key.removeClass('played');
          var currentNote = $('.' + notesList[0].toLowerCase());
          currentNote.addClass('played');
          var currentLog = log.text();
          currentLog += currentNote.text();
          log.html(currentLog);
          notesList.shift();
        }
      }, 1000);
      notes.val('');
      log.text('Notes played: ');
    }
  });

});
