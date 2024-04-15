var posts=["2024/04/14/经验贴/","2024/04/13/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };