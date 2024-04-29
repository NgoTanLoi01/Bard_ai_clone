var BardAPIKey = "deemoo"; //Follow Quickstart guide for API key

function Send(prompt) {//Send Prompt to Bard API
    $.getJSON('https://blackearthauction.com/Bard/api?req=' + prompt + '&token=' + BardAPIKey, function (data) {
        var s = data.response;
        $('#mssg').append("<div class='direct-chat-msg'><div class='direct-chat-infos clearfix'><span class='direct-chat-name float-left'>Synthia</span><span class='direct-chat-timestamp float-right'><a href='#' vall='"+s+"' class='text-primary play'><i class='fas fa-play-circle'></i></a></span></div><img class='direct-chat-img' src='img/neo.jpg' alt='Message User Image'><div class='direct-chat-text'>" + s + "</div> </div>");
        $('#Ask').html("Ask");
        $('#Ask').prop('disabled', false);
        //Scroll to the answer
           $('#mssg').stop().animate({
        scrollTop: $('#mssg')[0].scrollHeight
    }, 800);
        //Save in hidden to export CSV
         let cssv = s.replace(/(\r\n|\n|\r)/gm, " ");
          let hddnn = $('#hdn_csv').val(); //Save chat in hidden file to be downloaded as CSV file when required
           $('#hdn_csv').val(hddnn + '\r\nYou: '+prompt+'\r\n Bard: ' + cssv);
    });
}

  $(function () {
  $('#export').click(function(){//Export Chat in CSV format
  downloadCSV("bardExport.csv",$('#hdn_csv').val());
  });
  })
        function downloadCSV(filename, content) {
  // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
  const element = document.createElement('a');
   
  //A blob is a data type that can store binary data
  // "type" is a MIME type
  // It can have a different value, based on a file you want to save
  const blob = new Blob([content], { type: 'plain/text' });

  //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
  const fileUrl = URL.createObjectURL(blob);

  //setAttribute() Sets the value of an attribute on the specified element.
  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', filename); // file name
  element.style.display = 'none';

  //use appendChild() method to move an element from one element to another
  document.body.appendChild(element);
  element.click();

  //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
  document.body.removeChild(element);
};
      
   function downloadFile(filename, content) {
  // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
  const element = document.createElement('a');

  //A blob is a data type that can store binary data
  // "type" is a MIME type
  // It can have a different value, based on a file you want to save
  const blob = new Blob([content], { type: 'plain/text' });

  //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
  const fileUrl = URL.createObjectURL(blob);

  //setAttribute() Sets the value of an attribute on the specified element.
  element.setAttribute('href', fileUrl); //file location
  element.setAttribute('download', filename); // file name
  element.style.display = 'none';

  //use appendChild() method to move an element from one element to another
  document.body.appendChild(element);
  element.click();

  //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
  document.body.removeChild(element);
};
//Clear chat
     $(document).ready(function(){
    $('#clear').click(function(){//Clear Chat
    let text = "Do you want to clear chat?";
  if (confirm(text) == true) {
 var theDiv = document.getElementById("mssg");
theDiv.innerHTML="";
  }
});
});