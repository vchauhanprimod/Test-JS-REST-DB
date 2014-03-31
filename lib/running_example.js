/*bootbox.dialog('Click Confirm, if your browser\'s web security is disabled.<br>If not then click Cancel and please disable your browser\'s web security and try again.<br>Close your browser completely.<h4>For Windows machine\'s chrome browser:</h4>"C:\Program Files (x86)\Google\Chrome\Application>chrome --disable-web-security"<br><h4>For Mac machine\'s chrome browser:</h4>"$ open -a Google\\ Chrome --args --disable-web-security"<br><h4>For Ubuntu machine\'s chromium browser:</h4>"$ chromium-browser --disable-web-security"', [{
 "label": "Cancel",
 "class": "btn-danger",
 "callback": function() {
 location.href = "index.html";
 }
 }, {
 "label": "Confirm",
 "class": "btn-success",
 "callback": function() {*/

$.ajax({
    url: "https://app1.maaxframe.com/uat/access_controls/users.json",
    type: "POST",
    data: {"_method": "login", "data[users][user_name]": "timlee", "data[users][user_password]": "timlee"},
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {

    }
});

$.ajax({
    url: "https://app1.maaxframe.com/uat/crm/leads.json/",
    type: "GET",
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {

        /* var rows = data["paginate"]["data"];
         var length = rows.length;
         if (length > 0) {
         var row = {};
         $.each(rows[0], function(i, v) {
         row[i] = i.replace('.', '_');
         });
         }
         var records = [];
         for (recordNo = 0; recordNo < length; recordNo++) {
         records[recordNo] = {};
         $.each(rows[recordNo], function(i, v) {
         records[recordNo][row[i]] = v;
         });
         }
         var compiledTemplate = Handlebars.compile($('#view_lead').html());
         $('#leadlistview').html(compiledTemplate({
         records: records
         }));*/
        var records = data["paginate"]["data"];

        str = "<table class='table table-striped'><tr><th>Name</th><th>Company</th><th>Office Email</th><th>Office Phone</th><th>Status</th><th>Date Created</th><th>Deleted</th><th>Id</th></tr>";
        for (x = 0; x < records.length; x++) {

            str += '<tr>';
            $.each(records[x], function(k, v) {
                str += '<td>';
                str += v;
                str += '</td>';
            });
            str += '</tr>';

        }
        str += '</table>';
        $('#leadlistview').html(str);

    }
});

var q = {};
q["search_basic"] = "Lila Short";
$.ajax({
    url: "https://app1.maaxframe.com/uat/crm/leads.json/",
    type: "GET",
    data: {'q': encodeURIComponent(JSON.stringify(q))},
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
        /* if($('#basicsearch').next()){
         $('#basicsearch').next().remove();
         }*/

        var records = data["paginate"]["data"];

        str = "<table class='table table-striped'><tr><th>Name</th><th>Company</th><th>Office Email</th><th>Office Phone</th><th>Status</th><th>Date Created</th><th>Deleted</th><th>Id</th></tr>";
        for (x = 0; x < records.length; x++) {

            str += '<tr>';
            $.each(records[x], function(k, v) {
                str += '<td>';
                str += v;
                str += '</td>';
            });
            str += '</tr>';

        }
        str += '</table>';

        $('#search-result').html(str);
    }
});
q = {};

q["search_advance"] = [{"op": "", "value": {"config_lead_status.lead_status CONTAINS": "warm"}}];
$.ajax({
    url: "https://app1.maaxframe.com/uat/crm/leads.json/",
    type: "GET",
    data: {'q': encodeURIComponent(JSON.stringify(q))},
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
        /* if($('#basicsearch').next()){
         $('#basicsearch').next().remove();
         }*/

        var records = data["paginate"]["data"];

        str = "<table class='table table-striped'><tr><th>Name</th><th>Company</th><th>Office Email</th><th>Office Phone</th><th>Status</th><th>Date Created</th><th>Deleted</th><th>Id</th></tr>";
        for (x = 0; x < records.length; x++) {

            str += '<tr>';
            $.each(records[x], function(k, v) {
                str += '<td>';
                str += v;
                str += '</td>';
            });
            str += '</tr>';

        }
        str += '</table>';

        $('#adv-search-result').html(str);

    }
});

$.ajax({
    url: "https://app1.maaxframe.com/uat/crm/leads.json/",
    type: "POST",
    data: {"data[leads][first_name]": "Tony", "data[leads][last_name]": "Stark", "data[leads][office_email]": "officemail@examplel.com", "data[leads][personal_email]": "personalmail@example.com", "data[leads][assistant_email]": "assistantmail@example.com"},
    contentType: "application/x-www-form-urlencoded",
    success: function(data) {
        $.ajax({
            url: "https://app1.maaxframe.com/uat/crm/leads.json",
            type: "DELETE",
            data: {"id": data['id'], "is_confirm": "1"},
            contentType: "application/x-www-form-urlencoded",
            success: function(data) {

                $('[data-spy="scroll"]').each(function() {
                    var $spy = $(this).scrollspy('refresh')
                });
            }
        });
    }
});

// }
//}]);

