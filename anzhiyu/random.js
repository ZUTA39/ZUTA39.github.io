var posts=["2024/11/25/Blog building/","2024/11/08/ComputerComposition/","2024/11/08/DataBaseStudyRecord/","2024/11/08/JavaStudyRecord/","2024/11/08/JavaTalkLater/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };