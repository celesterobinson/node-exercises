/*
EXERCISE 6:

        Write a small function called "grade" that takes a parameter called "score" and returns the grade that corresponds to that "score".

        Grading Table:
            0-59: 'F'
            60-69: 'D'
            70-79: 'C'
            80-89: 'B'
            90-100: 'A'
        
        For example:

        grade(3) should return 'F'
        grade(89) should return 'B'
        grade(90) should return 'A'
*/

function grade(score){
    var finalGrade = score;   
        if (score <= 59){
            finalGrade = 'F';         
        } else if (score > 59 && score <= 69) {
            finalGrade = 'D';
        } else if (score >= 70 && score <= 79) {
            finalGrade = 'C';
        } else if (score >= 80 && score <= 89) {
            finalGrade = 'B';
        } else {
            finalGrade = 'A';
        }
    return finalGrade;
}
 