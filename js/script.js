/******************************************
Treehouse Techdegree:
FSJS Project 2 - List Filter and Pagination
By Elizabeth Hinson
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***Created two global variables to store in the DOM, which will call a list of 10 students and student information on a page.***/
const numberOfItems = 10;
const studentInfo = document.querySelectorAll('.student-item');

console.log(numberOfItems);
console.log(studentInfo);

/***Created a showPage function to hide all of the items on a page except 10 at a time. For page one just show items 0-9, 
   for page two just show 10-19, and so forth, while hiding the rest ***/
const showPage = (studentInfo, page) => {
   let startIndex = (page * numberOfItems) - numberOfItems;
   let endIndex = page * numberOfItems;
      for (let i = 0; i < studentInfo.length; i++) {
         if (i >= startIndex && i < endIndex) {
            studentInfo[i].style.display = 'block'; //showing
         } else {
            studentInfo[i].style.display = 'none'; //hiding
         }
      }
}; 
   showPage(studentInfo, 1); //show result with new search
   
/***
 Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = (studentInfo) => {
   let div = document.createElement("div");
   let ul = document.createElement("ul");
   let li = document.querySelector("page");
   div = setAttribute('pagination');
   ul.appendChild(li);
   li.textContent = addItemInput.value = 'numberOfItems';
   <div class="pagination">
      <ul>
         <li>
           <a class="active" href="#">1</a>
         </li>
         <li>
           <a href="#">2</a>
         </li>
         <li>
           <a href="#">3</a>
         </li>
         <li>
           <a href="#">4</a>
         </li>
         <li>
           <a href="#">5</a>
         </li>
      </ul>
   </div>

   )
}

/***targets an element on a page that set up the callback to fire in resonse to the specified event. */
 eventTarget.addEventListener(

 )
 target.addEventListener(type, listener[(numberOfItems),options]);
 window.setTimeout(add,5000,2,2);

// Remember to delete the comments that came with this file, and replace them with your own code comments.