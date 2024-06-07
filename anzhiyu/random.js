var posts=["2024/06/07/GitNote/","2024/04/14/经验贴/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };