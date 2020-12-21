$(document).ready(function() {
    function play(str) {
        var audio = document.getElementById(str);
        audio.play();
    }
    $('#tom').on("click", function(e) {
        $('#display').text('Tom');
        play('Q');
   });
    $('#hiHat').on("click", function(e) {
        $('#display').text('Pedaled Hi-Hat');
        play('W');
    });
    $('#oHat').on("click", function(e) {
        $('#display').text('Open Hi-Hat');
        play('E');
    });
    $('#rim').on("click", function(e) {
        $('#display').text('Rimshot');
        play('A');
    });
    $('#pop').on("click", function(e) {
        $('#display').text('Pop');
        play('S');
    });
    $('#kick').on("click", function(e) {
        $('#display').text('Kick Drum');
        play('D');
    });
    $('#cymbal').on("click", function(e) {
        $('#display').text('Ride Cymbal');
        play('Z');
    });
    $('#snare').on("click", function(e) {
        $('#display').text('Snare Drum');
        play('X');
    });
    $('#cowbell').on("click", function(e) {
        $('#display').text('Cowbell');
        play('C');
    });
    $(this).on("keydown", function(e) {
        if (e.keyCode === 81) {
            play('Q');
            $('#tom').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Tom');
        } else if (e.keyCode === 87) {
            play('W');
            $('#hiHat').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Pedaled Hi-Hat');
        } else if (e.keyCode === 69) {
            play('E');
            $('#oHat').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Open Hi-Hat');
        } else if (e.keyCode === 65) {
            play('A');
            $('#rim').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Rimshot');
        } else if (e.keyCode === 83) {
            play('S');
            $('#pop').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Pop');
        } else if (e.keyCode === 68) {
            play('D');
            $('#kick').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Kick Drum');
        } else if (e.keyCode === 90) {
            play('Z');
            $('#cymbal').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Ride Cymbal');
        } else if (e.keyCode === 88) {
            play('X');
            $('#snare').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Snare Drum');
        } else if (e.keyCode === 67) {
            play('C');
            $('#cowbell').fadeTo(100, 0.1).fadeTo(200, 1.0);
            $('#display').text('Cowbell');
        }
    });
});