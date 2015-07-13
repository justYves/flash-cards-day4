app.directive('flashCard', function(ScoreFactory) {
  return {
    restrict: 'E',
    scope: {
      card: '='
    },
    link: function(scope, element, attribute) {
      // controller.answerQuestion(scope.flashCard.answer);

      scope.answerQuestion = function(answer) {
        if (!scope.answered) {
          scope.answered = true;
          if (answer.correct) {
            ++ScoreFactory.correct;
          } else {
            ++ScoreFactory.incorrect;
          }
          scope.answeredCorrectly = answer.correct;
        }
      };
    },
    templateUrl: 'js/directives/flash-card/flash-card.html'
  };
});
