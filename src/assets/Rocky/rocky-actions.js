clippy.load('Rocky', function(agent){
    // do anything with the loaded agent
  agent.show();

  var callsf = function(yescall){
    return function(){
      $('.clippyyes').click(function(ev){
        ev.preventDefault();
        yescall();
        agent.stopCurrent();
        agent.stop();
        agent.speak("Done.");
        agent.play('GetWizardy');
      });

      $('.clippyno').click(function(ev){
        ev.preventDefault();
        agent.stopCurrent();
        agent.stop();
        agent.speak("I thought not.");
        agent.play('EmptyTrash');
      });
    }
  }

  $('input').keypress(function(){
    agent.stop();
    agent.play('Writing');
  });

  $('textarea').keypress(function(){
    agent.stop();
    agent.play('Writing');
  });


  var urlchange = function(){
    var yescall = function(){window.location.href = 'https://www.josephprince.org/';}
    agent.speak("Would you like to check out a website?<br /><br /><a href=\"#\" class=\"clippyyes\">YES</a>    <a href=\"#\" class=\"clippyno\">NO</a>", true, callsf(yescall));
  };


  var cat1 = function(){
    agent.play('GetTechy');
    agent.speak("HELLO THERE! 😀");
  };

  var animate = function(){
    agent.animate();
  }

  $('#clippy-2b3aef30-125c-11e2-892e-0800200c9a66').click(function(){
    agent.stopCurrent();
    agent.stop();
    var fun = arr[Math.floor(Math.random()*arr.length)];
    fun();
  });

  $('body').ajaxStart(function() {
    agent.stopCurrent();
    agent.stop();
    agent.speak("Sending request in the background...");
    agent.play('Processing');
  });

  $('body').ajaxSuccess(function() {
    agent.stopCurrent();
    agent.stop();
    agent.speak("Background request succeeded in some way!")
    agent.play('Congratulate');
  });

  $('body').ajaxError(function() {
    agent.stopCurrent();
    agent.stop();
    agent.speak("Something went horribly wrong with the background request!")
    agent.animate();
  });

  $('body').ajaxComplete(function() {
    agent.stopCurrent();
    agent.stop();
  });

  var arr = [
    cat1,
    urlchange,
    animate
  ]
  window.setInterval(function(){
    var fun = arr[Math.floor(Math.random()*arr.length)];
    if(clippy.isEmpty()){
      fun();
    }
  }, 45000);

},undefined, './build/');
