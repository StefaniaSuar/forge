document.addEventListener('DOMContentLoaded', () => {
  let likesPost1 = 0;
  let likesPost2 = 0;
  let likesPost3 = 0;

  document.getElementById('btn1').onclick = () => {
    likesPost1++;
    document.getElementById('likes1').textContent = likesPost1 + ' like(s)';
  };

  document.getElementById('btn2').onclick = () => {
    likesPost2++;
    document.getElementById('likes2').textContent = likesPost2 + ' like(s)';
  };

  document.getElementById('btn3').onclick = () => {
    likesPost3++;
    document.getElementById('likes3').textContent = likesPost3 + ' like(s)';
  };
});