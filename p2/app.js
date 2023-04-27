let openbtn =document.getElementById('open-btn');
let modelcontaier = document.getElementById('model-container');
let closebtn = document.getElementById('close-btn');

openbtn.addEventListener('click', function() {
    modelcontaier.style.display='block';
});

closebtn.addEventListener('click',function(){
    modelcontaier.style.display = 'none';
});

window.addEventListener('click',function(e){
    if(e.target === modelcontaier){
        modelcontaier.style.display = 'none';
    }
});