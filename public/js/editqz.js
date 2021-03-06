 $(document).ready(function() {
     var qnum = $("#qNumber").val();
     if(qnum === 'all') {
         $("#qNum").hide();
     } else {
         $("#qNum").show();
     }
     
         
$('#submit_btn').click(function(){
  var name = $("#qName").val();
  var desc = $("#qDescription").val();
  var qnum = $("#qNumber").val();
  var pattern = /^(0|([1-9]\d*))$/;
  
  if (name === '') {
    $("#Name").addClass("has-error bg-danger");
  } else {
    $("#Name").removeClass("has-error bg-danger");
  }
  
  
  if (desc === '') {
    $("#Description").addClass("has-error bg-danger");
  } else {
    $("#Description").removeClass("has-error bg-danger");
  }
  
  if (qnum === '' || !(pattern.test(qnum))) {
    $("#qNum").addClass("has-error bg-danger");
  } else {
    $("#qNum").removeClass("has-error bg-danger");
  }
  var pattern = /^(0|([1-9]\d*))$/;
  if (name !== '' && desc !== '' && (qnum === 'all' || pattern.test(qnum))) {
  $("#update_form").submit();
  } 

});
     
     
    $('[name="cb_qNumber"]').on('switchChange.bootstrapSwitch', function(event, state) {    
      if(state) {
          //if user decide to show all questions then set number of questions to 'all' and hide the field from user
          //also in this cese user will not have option to choose rether questions should or should not be shuflled in next step
          //if the setting is set to show all questions they are automaticaly being shuffled
          $("#qNum").hide();
          $("#qNumber").val('all');
          $("#cb_shuffleQuestion").bootstrapSwitch('disabled',false);
      } else {
          //undo all above if user change the switch state to off
          $("#qNum").show();
          $("#qNumber").val('');
          $("#shuffleQuestion").val(true);
          $("#cb_shuffleQuestion").bootstrapSwitch('state',true);
          $("#cb_shuffleQuestion").bootstrapSwitch('disabled',true);
      }
    });
    
    //switch button for shuffling or not answers
    $('[name="cb_shuffleAnswers"]').on('switchChange.bootstrapSwitch', function(event, state) {    
      if(state) {
          //if state is true hidden input shuffleAnswers will receive true vaule
          //hidden field has been set due the fact that checkboxes post their state only when they are shecked (when the state is true)
          //therefore if false checkbox field was not saved to the database at all
          $("#shuffleAnswers").val(true);
      } else {
          $("#shuffleAnswers").val(false);
      }
    });
    
    //switch button for shuffling or not questions
    $('[name="cb_shuffleQuestion"]').on('switchChange.bootstrapSwitch', function(event, state) {    
      if(state) {
          $("#shuffleQuestion").val(true);
      } else {
          $("#shuffleQuestion").val(false);
      }
    });

 });