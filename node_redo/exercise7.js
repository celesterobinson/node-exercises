/* Returns dance style given the time and tempo as parameters. */
function getDanceStyle(time,tempo){
        if (time === '3/4' && tempo >= 84 && tempo <= 93) {
                return 'Waltz';
        } else if (time === '3/4' && tempo >= 150 && tempo <= 180) {
                return 'Viennese Waltz';
        } if (time === '4/4' && tempo >= 112 && tempo <= 128) {
                return 'Cha-Cha';
        } if (time === '4/4' && tempo >= 152 && tempo <= 176) {
                return 'Jive';
        } else if (time === '2/4' && tempo >= 120 && tempo <= 132){
                return 'Tango';
        } else {
                return 'no match found';
        }
}