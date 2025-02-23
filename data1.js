document.getElementById('loadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput'); 
    const file = fileInput.files[0]; 
    if (file) { const reader = new FileReader(); 
      reader.onload = function(e) { const text = reader.result;
          const lines = text.split('\n'); 
          console.log(lines);
    // Hiển thị dữ liệu trong mảng 
    
    };
     reader.readAsText(file); } 
     else { console.error('No file selected.');
     }
     
    });