

// localStorage.setItem('test','mest');

//document.getElementById('myForm').addEventListener('Submit',saveBookmark);


//
function saveBookmark(){


    var siteName=document.getElementById('siteNames').value;

    var siteUrl=document.getElementById('siteUrls').value;


    if(!siteName || !siteUrl){
       alert("Please Fill the Form");
       return false;
     }


     var urlregex = new RegExp(
            "^(http|https|ftp)\://([a-zA-Z0-9\.\-]+(\:[a-zA-Z0-9\.&amp;%\$\-]+)*@)*((25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])|localhost|([a-zA-Z0-9\-]+\.)*[a-zA-Z0-9\-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(\:[0-9]+)*(/($|[a-zA-Z0-9\.\,\?\'\\\+&amp;%\$#\=~_\-]+))*$");
          if(!urlregex.test(siteUrl)){

                      alert("Please enter correct Url");
                      return false;



                     }




     var bookmark={
          name:siteName,
          url:siteUrl
     };
         // console.log(localStorage.getItem("test"));
         // localStorage.removeItem('test');
         // console.log(localStorage.getItem("test"));



      if(localStorage.getItem('bookmarks')===null)
      {
            var bookmarks=[];
            bookmarks.push(bookmark);
            localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


      }
      else{

           var bookmarks=JSON.parse(localStorage.getItem("bookmarks"));
           bookmarks.push(bookmark);
           localStorage.setItem('bookmarks',JSON.stringify(bookmarks));


      }

fetchBookmarks();
document.getElementById('myForm').reset();



};


var deleteBookmark=(url)=>{


    var bookmarks=JSON.parse(localStorage.getItem('bookmarks'));

     bookmarks.forEach((bookmark,i)=>{


                   if(bookmark.url===url)
                   {

                       bookmarks.splice(i,1);

                   }


     });

     localStorage.setItem('bookmarks',JSON.stringify(bookmarks));
      fetchBookmarks();





};










var fetchBookmarks=()=>{



var bookmarks=JSON.parse(localStorage.getItem("bookmarks"));

var bookmarkResults=document.getElementById("bookmarkResults");

bookmarkResults.innerHTML="";

bookmarks.forEach((bookmark)=>{




                 let name=bookmark.name;
                 let url=bookmark.url;


  bookmarkResults.innerHTML+=`<div class="card bg-light text-dark card-body">
   <h3> ${name}  <a class="btn btn-default"
  href="${url}" target="_blank">Visit </a>
  <a  onclick="deleteBookmark('${url}')" class="btn btn-danger"
  href="#">  Delete </a>  </h3>
  </div>`;




});


};
