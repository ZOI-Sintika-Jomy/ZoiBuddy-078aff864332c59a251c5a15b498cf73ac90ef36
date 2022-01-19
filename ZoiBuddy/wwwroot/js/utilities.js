function fn_postAjax(u, d, sh, eh) {
    if (typeof (showLoadingBox) == "function")
        showLoadingBox();
    $.ajax({
        type: "POST",
        url: u,
        data: d,
        cache: false,
        success: function (response, status, xhr) {
            if (typeof (hideLoadingBox) == "function")
                hideLoadingBox();
            var ct1 = xhr.getResponseHeader("content-type") || "";
            var ct = '';
            if (ct1.indexOf('html') > -1) {
                ct = 'html';
            }
            else if (ct1.indexOf('json') > -1) {
                ct = 'json';
            }
            if (sh)
                sh(response, ct);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if (eh)
                eh(xhr, ajaxOptions, thrownError);
        }
    });
}

function fn_getAjax(u, d, sh, eh) {
    if (typeof (showLoadingBox) == "function")
        showLoadingBox();
    $.ajax({
        type: "GET",
        url: u,
        data: d,
        success: function (response, status, xhr) {
            if (typeof (hideLoadingBox) == "function")
                hideLoadingBox();
            var ct1 = xhr.getResponseHeader("content-type") || "";
            var ct = '';
            if (ct1.indexOf('html') > -1) {
                ct = 'html';
            }
            else if (ct1.indexOf('json') > -1) {
                ct = 'json';
            }
            if (sh)
                sh(response, ct);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            if (eh)
                eh(xhr, ajaxOptions, thrownError);
        }
    });
}

function fn_IsJsonArrayEmpty(json_array) {
    if (json_array != null && json_array.length > 0) {
        return false;
    } else {
        return true;
    }
}

function fn_Reset() {

}