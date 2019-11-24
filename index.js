// task #1;

// document.getElementById('test')
// document.querySelector('#test').innerHTML = 'Last';;
test.innerHTML = 'Last';

// task #2;

let catImage = document.getElementsByClassName('image');
catImage[0].id = 'catImage';
document.getElementById('catImage').src = 'cat.jpg';
document.getElementById('catImage').alt = 'cat';

// task #3;

let paragraph = [];
paragraph = document.querySelectorAll('#text p');
for (let i = 0; i<paragraph.length; i++) {
    alert(`Selector text ${i}: ${paragraph[i].innerHTML}`);
}

// task #4;

// let ulList = document.getElementById('list');
// let arrayList = [];
// let ulListChildren = ulList.children;
// for (let child = 0; child<ulListChildren.length; child++) {
//     arrayList[child] = ulListChildren[child].innerHTML;
// }
// alert(arrayList);

let firstMethod = [];
firstMethod[0] = ulList.children[0].innerHTML;
firstMethod[1] = ulList.children[4].innerHTML;
firstMethod[2] = ulList.children[1].innerHTML;
firstMethod[3] = ulList.children[3].innerHTML;
firstMethod[4] = ulList.children[2].innerHTML;

alert('first method: ' + firstMethod);


let secondMethod = [];
secondMethod[0] = ulList.firstElementChild.innerHTML;
secondMethod[1] = ulList.lastElementChild.innerHTML;
secondMethod[2] = ulList.firstElementChild.nextElementSibling.innerHTML;
secondMethod[3] = ulList.lastElementChild.previousElementSibling.innerHTML;
secondMethod[4] = ulList.children[2].innerHTML;

alert('second method: ' + secondMethod);

// task #5

let headerOne = document.querySelector('h1');
headerOne.style.backgroundColor = 'green';
headerOne.style.fontWeight = 'bold';

let myDiv = document.getElementById('myDiv');
let firstParagraph = myDiv.firstElementChild;
firstParagraph.style.fontWeight = 'bold';

let secondParagraph = firstParagraph.nextElementSibling;
secondParagraph.style.color = 'red';

let thirdParagraph = myDiv.children[2];
thirdParagraph.style.textDecoration = 'underline';

let fourthParagraph = myDiv.lastElementChild;
fourthParagraph.style.fontStyle = 'italic';

let verticalList = document.getElementById('myList');
verticalList.style.listStyleType = 'none';

let verticalListChildren = verticalList.children;

for (let el = 0; el<verticalListChildren.length; el++) {
verticalListChildren[el].style.writingMode = 'vertical-rl';
verticalListChildren[el].style.textOrientation = 'upright';
}

document.querySelector('span').style.visibility = 'hidden';

// task #6

let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

input1.value = prompt('Enter your message!');
input2.value = prompt('Enter your message!');

alert('Now we will change input values');

let temp = input1.value;
input1.value = input2.value;
input2.value = temp;




