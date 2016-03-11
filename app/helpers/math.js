import Ember from 'ember';

export function math(params/*, hash*/) {
  return params;
}

export default Ember.Helper.helper(math);

//ROUGHED OUT
// https://guides.emberjs.com/v2.4.0/templates/writing-helpers/
Ember.Handlebars.helper('math', function(operand1, operator, operand2) {

    var result;

    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }

    return result;
});
