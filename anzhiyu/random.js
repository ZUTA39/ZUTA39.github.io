var posts=["2024/11/08/JavaTalkLater/","2024/11/08/JavaStudyRecord/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };