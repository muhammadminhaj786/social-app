var title = document.getElementById("title-input")
var desc = document.getElementById('desc')
var cardiv = document.getElementById('my-card') 

window.addEventListener("load",function(){
  if(cardiv){
    var getPost = JSON.parse(localStorage.getItem('posts')) || []
    console.log('getposts',getPost)
    for (var value of getPost) {
    cardiv.innerHTML += `<div class="card mt-5" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${value.title}</h5>
      <p class="card-text">${value.desc}</p>
      <button class="btn btn-success" onclick="editPost(${value.id},this)">Edit</button>
      <button class="btn btn-danger" onclick="delPost(${value.id},this)">Delete</button>
    </div>
  </div>`
      
    }
  }
})

function addPost(){
    if(!title.value && !desc.value){
      alert("please give title and description")
        return
    }

    var id;
    var getPost = JSON.parse(localStorage.getItem('posts')) || []
    console.log('getposts',getPost)

    if (getPost.length>0){
      id=getPost[0].id + 1
    }else{
      id=1
    }

    var card = `<div class="card mt-5" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">${desc.value}</p>
      <button class="btn btn-success" onclick="editPost(${id}, this)">Edit</button>
      <button class="btn btn-danger" onclick="delPost(${id}, this)" >Delete</button>
    </div>
  </div>`
    cardiv.innerHTML=card + cardiv.innerHTML

  
    //create a post obj
    var post_obj = {
        id:id,
        title:title.value,
        desc:desc.value
    }

    getPost.unshift(post_obj)
    localStorage.setItem("posts",JSON.stringify(getPost))
    title.value=""
    desc.value=""

}

//creating a edit function
function editPost(id,el){
  var indexNum;
  var getPost = JSON.parse(localStorage.getItem('posts'))
  var post = getPost.find(function (value, index) {
    if (value.id === id) {
        indexNum = index
        return true
      }
  })

  var edittitle = prompt("Enter title",)
  var editdesc = prompt("Enter desc",)
  var editobj = {
    id: post.id,
    title:edittitle,
    desc:editdesc

  }
  getPost.splice(index,1,editobj)
  localStorage.setItem('posts',JSON.stringify(getPost))
  
  //edit from ui
    var h5title = e.parentNode.firstElementChild
    var pdesc = e.parentNode.firstElementChild.nextElementSibling
    h5title.innerHTML = edittitle
    pdesc.innerHTML = editdesc


}

//creating a delete post function
function delPost(id,el){
  var getposts = JSON.parse(localStorage.getItem('posts'))
  var indexNum = getposts.findIndex(function (value){
    if(value.id==id) return true
  })
  getposts.splice(indexNum,1)
  localStorage.setItem('posts', JSON.stringify(getposts))
  
  //removing from ui
  console.log(el.parentNode.parentNode.remove())
}
