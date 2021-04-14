window.onload = function () {
  var fileTag = document.querySelector("#file-upload");
  var preview = document.querySelector("img");
  fileTag.addEventListener("change", function () {
    changeImage(this);
  });

  function changeImage(input) {
    var reader;

    if (input.files && input.files[0]) {
      reader = new FileReader();

      reader.onload = function (e) {
        preview.setAttribute("src", e.target.result);
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  // window.addEventListener('load', function() {
  //     document.querySelector("#file-upload").addEventListener('change', function() {
  //         if (this.files && this.files[0]) {
  //             var img = document.querySelector('img');
  //             img.onload = () => {
  //                 URL.revokeObjectURL(img.src);  // no longer needed, free memory
  //             }

  //             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
  //         }
  //     });
  //   });
};
