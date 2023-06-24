var title = document.getElementById("title-input")
var desc = document.getElementById('desc')
var cardiv = document.getElementById('my-card') 

function load() {}

function addPost(){
    if(!title.value && !desc.value){
        return
    }

    //create a post obj
    var post_arr= []
    var id=1
    var obj = {
        'id':id++,
        'title':title.value,
        'desc':desc
    }
    post_arr.unshift(obj)
    console.log(post_arr)

    var card = `<div class="card mt-5" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">${desc.value}</p>
      <a href="#" class="btn btn-success">Edit</a>
      <a href="#" class="btn btn-danger">Delete</a>
    </div>
  </div>`
    cardiv.innerHTML=card + cardiv.innerHTML
    title.value=""
    desc.value=""

}
