var BardAPIKey = API_Key; //Follow Quickstart guide for API key

function Send(prompt,code) {//Send Prompt to Bard API
    $.getJSON('https://blackearthauction.com/Bard/audio?req=' + prompt + '&token=' + BardAPIKey, function (data) {
        var s = data.response;
        $("#down").attr("href", "https://blackearthauction.com/" + s); //Link to generated MP3 file
        $('#Ask').html("Generate  <i class='far fa-paper-plane'></i>");
        $('#Ask').prop('disabled', false);
        $('#down').show();

        //Save in hidden to export CSV
         let cssv = s.replace(/(\r\n|\n|\r)/gm, " ");
          let hddnn = $('#hdn_csv').val(); //Save chat in hidden file to be downloaded as CSV file when required
           $('#hdn_csv').val(s);
    });
}


