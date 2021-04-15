const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')


// functionality for the sidebar toggle button
toggleBtn.addEventListener('click', function(){
       

      // LONG WAY
      // if(sidebar.classList.contains("show-sidebar")){
      //       sidebar.classList.remove("show-sidebar");
      // } else{
      //       sidebar.classList.add("show-sidebar");
      // }

      // CONCISE WAY
      sidebar.classList.toggle("show-sidebar");

})


// functionality for the sidebar close button
closeBtn.addEventListener('click', function(){
      sidebar.classList.remove("show-sidebar");
})