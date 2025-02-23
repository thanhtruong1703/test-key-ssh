
let str = '12344321';
document.getElementById('hienthi').innerHTML = str;


let a = "hello ";
let b="hello world";
let c= "";

/// du lieu dua vao ///
function loaddate(){

c=b;
b=a;
a=c;
document.getElementById('hienthi').innerHTML = b;

}
/// du lieu ket thuc // 









document.getElementById('loadButton').addEventListener('click', function() { 
const fileInput = document.getElementById('fileInput'); const file = fileInput.files[0]; if (file) { const reader = new FileReader(); reader.onload = function(event) { const arrayBuffer = event.target.result; mammoth.extractRawText({arrayBuffer: arrayBuffer}) .then(function(result) { const text = result.value;
 // Văn bản đã chuyển đổi
 let a = text.split(" ");
// document.getElementById('output').innerText = a;

 let bien = a[0];
 
////////////
///////////////// xu li phan giao answer and question
let giao=bien.indexOf("-");
let dem=0;

  for (let i=giao;i<bien.length;i++){
      if (bien[i]!="-") break;
      dem++;
   //   console.log(bien[i]);
      
  }
// console.log("dem =",dem);    
  
let hetgiao=giao+dem;
let cat="";
for (let i=giao;i< hetgiao;i++){
   cat = cat + bien[i];
}  
 bien=bien.replace(cat,"");

//  console.log(bien)
// console.log(giao)

// => vi tri giao giua question va answer la bien giao = 67
//////////////////////////////

 let dem1=0;
 let cqa=[];
 // mang answer and question
 let bd=0;
 let kt=0;
 // bien dem 
 let tam="";
 let ok=false;
// console.log(typeof bien) //  bien thuoc string
for (let i=0;i<bien.length;i++){
    if (bien[i]==":") {
      bd=i+1;
    }
    if (bien[i]=="\n") {
        kt=i;
      //  console.log(bd);
      //  console.log(kt);
         dem1=dem1+1; 
         if(bien.substring(bd,kt)!=""){
            if (bd!=0 && kt!=0){
               cqa[dem1] = bien.substring(bd,kt);
               bd=0;
               kt=0;
            }
           
         }
    }     
}

// loc mang 
cqa = cqa.filter(item => item.trim() !== ''); // loai bo cac phan tu  [empty] ***

/// 

// dem so phan tu cua mang da loc
let cqq=[];
let dodai = cqa.length;
//  console.log(dodai);
let n=dodai/2;
//   console.log(n);
let dem2=0;
 for (let i=n;i<cqa.length;i++){
     cqq[dem2]=cqa[i];
     dem2++;
 }
/// in pt ra kt 
for (let i=0;i<n;i++){
 console.log(cqa[i]);
}
for (let i=0;i<n;i++){
 console.log(cqq[i]);
}
// => xử lí hoàn tất 2 mảng 1 là questiong thuộc cqa, 2 là answer thuộc cqq độ dài 2 mảng là n
// đã nhận được dãy dữ liệu và lưu vào trong biến tên là " bien "


 ////  sinh thể điv tự động theo yêu cầu 
function taodiv(numberOfDivs) { 
const container = document.getElementById('container'); 
// Tìm kiếm phần tử container 
for (let i = 0; i < numberOfDivs; i++) {
 const div = document.createElement('div'); 
// Tạo một phần tử div mới
 div.textContent = "Câu " + (i+1) + " : " + cqa[i];
 
// Tạo một phần tử input mới
const br = document.createElement('br');

const input = document.createElement('input'); 
input.type = 'text';
input.placeholder = 'nhập dữ liệu'; // Cấu hình placeholder
input.name='kq';
//  // Thêm phần tử input vào thẻ div 
div.appendChild(br);
//
div.appendChild(input);

container.appendChild(div);


// Thêm phần tử div vào container 
} 
}

taodiv(n);
// them su kien cho nut button ne :) 
const values=[]; 
document.getElementById('submit-bt').addEventListener('click', function() { 
const container = document.getElementById('container'); 
const inputs = container.querySelectorAll('input');

inputs.forEach(input => { 
  values.push(input.value.trim()); 
});

console.log(values); // In ra mảng chứa các giá trị nhập vào

//// = > đã lấy  được các giá trị từ input

// so sanh ket qua 
let tong_ket=0;
 for (let i=0;i<n;i++){
     if (cqq[i]==values[i]) tong_ket++;
 }
// console.log(tong_ket); 
let score = tong_ket*0.5;
document.getElementById("diem").innerHTML=score;

});




  // Hiển thị văn bản trên trang
}) .catch(function(err) { console.error("Error:", err);

 });
 };
  reader.readAsArrayBuffer(file);
 } else { 
   console.error('No file selected.'); 
} 
});

///// kiem tra 

