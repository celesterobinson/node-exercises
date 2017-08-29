/* Returns letter grade given the score. */
function grade(score){
    if (score >= 0 && score <= 59) {
        return 'F';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else {
        return 'A';
    }
}