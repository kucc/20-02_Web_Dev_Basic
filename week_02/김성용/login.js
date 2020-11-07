function IDreturn(){
    var name = document.getElementById('userid').value;
    return name
  }
function bordergreen(tag){
    tag.className = "gr";
  }
function f_link(){
    alert(IDreturn() + '님이 로그인하셨습니다.');
    location.href = "login.html";
  }

