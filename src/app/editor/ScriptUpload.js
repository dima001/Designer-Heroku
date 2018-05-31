// JavaScript source code
export function UploadFiles(URL, FilesSelector, SuccessEvent, ErrorEvent) {
    // based on http://blog.teamtreehouse.com/uploading-files-ajax , http://stackoverflow.com/questions/5392344/sending-multipart-formdata-with-jquery-ajax
    var $FileUpload = (FilesSelector instanceof $) ? FilesSelector : $(FilesSelector);
    var FilesData = new FormData();
    $FileUpload.each(function () {
        for (var i = 0; i < this.files.length; i++) {
            var file = this.files[i];
            // Add the file to the request.
            FilesData.append(this.id, file, file.name);
        }
    });

    $.ajax({
        method: "POST",
        url: URL,
        dataType: this.DataType,
        contentType: false,
        processData: false,
        data: FilesData,
    }).done(function (res) {
        console.log('success ' + res);
        if (SuccessEvent != null)
            SuccessEvent(res);
    }).fail(function (err) {
        console.log('fail');
        if (ErrorEvent != null)
            ErrorEvent(err);
    });
}
