// debug.js
(function() {
    // Cria um painel flutuante
    var div = document.createElement('div');
    div.style.cssText = 'position:fixed; bottom:0; left:0; right:0; background:black; color:lime; font-size:12px; padding:10px; z-index:9999; max-height:200px; overflow:auto;';
    div.id = 'debug-console';
    document.body.appendChild(div);
    
    // Redireciona console.log
    var oldLog = console.log;
    console.log = function() {
      var msg = Array.from(arguments).join(' ');
      div.innerHTML += msg + '<br>';
      div.scrollTop = div.scrollHeight;
      oldLog.apply(console, arguments);
    };
    
    // Mostra erros
    window.onerror = function(msg) {
      div.innerHTML += '❌ ERRO: ' + msg + '<br>';
    };
  })();