var posts=["2024/11/08/ComputerComposition/","2025/01/10/ItemPet/","2024/11/08/JavaStudyRecord/","2025/02/17/lanqiaonote/","2024/11/08/JavaTalkLater/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };