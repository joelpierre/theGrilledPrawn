export function addRemoveBtn(elm) {
  elm.classList.add('btn-red-alt');
  elm.classList.add('btn-delete-user-row');
  elm.classList.remove('btn-outline-white');
  elm.classList.remove('btn-add-user-row');
  elm.innerHTML = `
    Remove
    <i class="material-icons">delete</i>
    `;
}

export function newSignupRow(count) {
  return `
  <div class="row signup-user-row newsletter-row-${count}">
<div class="col">
<hr>
</div>
<div class="w-100"></div>
                        <div class="col-lg col-sm-6">

                            <div class="form-group">
                                <label for="name-${count}" class="w-100">
                                    Name
                                </label>
                                <input id="name-${count}" required type="text" class="form-control">
                            </div>

                        </div>

                        <div class="col-lg col-sm-6">

                            <div class="form-group">
                                <label for="surname-${count}" class="w-100">
                                    Surname
                                </label>
                                <input id="surname-${count}" required type="text" class="form-control">
                            </div>

                        </div>

                        <div class="col-lg">

                            <div class="form-group">
                                <label for="email-${count}" class="w-100">
                                    Email
                                </label>
                                <input id="email-${count}" required type="email" class="form-control nmbottom">
                            </div>

                        </div>

                        <div class="col-lg">
                            <label>
                                &nbsp;
                            </label>
                            <a class="btn btn-block btn-outline-white btn-add-user-row btn-newsletter">
                                Add Friend
                            </a>

                        </div>
                    </div>
  `;
}