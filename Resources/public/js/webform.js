var ajax = function (url, data) {
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200) {
                document.querySelector('.webform .response').innerHTML = JSON.parse(req.response);
                document.querySelector(".webform form").reset();
            }
            else {
                console.log(req.response);

                if (req.status == 412) {
                    alert('Captcha invalide');
                }
            }
        }
    };
    req.send(data)
};
var form = document.querySelector(".webform form");
if (form !== undefined && form != null) {
    var url = form.getAttribute("action");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        var formData = new FormData(form);
        ajax(url, formData);
    }, false);
}