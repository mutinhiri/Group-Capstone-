const counterComment = (comments) => {
  const result = comments ? `Comments(${comments.length})` : 'Comments (0)';
  return result;
};

const getComments = async (id) => {
  const apiUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xDtzCPywXomy9vfRiKuT/comments?item_id=${id}`;
  const response = await fetch(apiUrl, { method: 'GET' });
  let comments = await response.json();
  if (comments.error) {
    comments = [];
  }
  return comments;
};
const postStrange = async (body) => {
  const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xDtzCPywXomy9vfRiKuT/comments';
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const populateList = (list) => {
  const section = document.getElementById('comments');
  section.innerHTML = '';
  list.forEach((item) => {
    const newElement = document.createElement('li');
    newElement.classList = 'item-list';
    newElement.innerHTML = `${item.username}: ${item.comment} : ${item.creation_date}`;

    section.appendChild(newElement);
  });
  const counterCom = counterComment(list);
  document.getElementById('comment-count').innerHTML = counterCom;
};

const fillPopUp = (show, sum, id) => {
  const popUp = document.getElementById('modal');
  popUp.classList = 'modal';
  popUp.style.display = 'block';
  popUp.innerHTML = `
  <a href="#" id="toogle">X</a>
    <img class="show-img" src="${show}" alt="TV-show">
    <div class="paragraph">
     ${sum}
     </div>
    
    <h3 id="comment-count"></h3>
<div id="comments">
   </div>
<div class="inner">
<h4>Add a comment</h4>
<input type="text"  id="input-text" required>
<textarea  id="input-area" cols="21" rows="2" required></textarea>
<button type="button" id="btn-comment" >Comment</button>
</div>
    `;
  const name = document.getElementById('input-text');
  const commentText = document.getElementById('input-area');
  const commentBtn = document.getElementById('btn-comment');

  commentBtn.addEventListener('click', () => {
    const body = {
      item_id: id,
      username: name.value,
      comment: commentText.value,
    };
    postStrange(body);
    setTimeout(() => {
      getComments(id).then((com) => {
        populateList(com);
      });
    }, 1000);

    name.value = '';
    commentText.value = '';
  });
  const toogle = document.getElementById('toogle');

  toogle.addEventListener('click', () => {
    popUp.style.display = 'none';
  });
  setTimeout(() => {
    getComments(id).then((com) => {
      populateList(com);
    });
  }, 1000);
};

export default fillPopUp;
