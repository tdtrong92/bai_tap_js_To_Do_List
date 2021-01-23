function Validation() {
    this.checkEmty = function (input, divId, mess) {
        if (input === "") {
            getEle(divId).style.display = "block";
            getEle(divId).innerHTML = mess;
            return false;
        } else {
            getEle(divId).style.display = "none";
            getEle(divId).innerHTML = "";
            return true;
        }
    };

    this.checkDuplicate = function (input, divId, mess, arr) {
        var status = true;
        for (var i = 0; i < arr.length; i++) {
            if (input === arr[i].taskName) {
                status = false;
                break;
            }
        }
        if (status) {
            getEle(divId).innerHTML = ""
            return true
        }
        getEle(divId).style.display = "block";
        getEle(divId).innerHTML = mess;
        return false
    };
}
