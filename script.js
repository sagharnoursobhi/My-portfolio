
 document.getElementById('about_box').addEventListener('click' , ()=>{
     let box = document.getElementById('about_box');
     if(box.classList.contains('clicked'))
     {
         box.classList.remove('clicked');
     }
     else
     {
         document.getElementById('about_img').classList.add('rotate1');
         setTimeout(()=>{
            document.getElementById('about_img').classList.remove('rotate1')
            box.classList.add('clicked')
         } , 1000);
     }
 }) 

 document.getElementById('skills_box').addEventListener('click' , ()=>{
    let box_about = document.getElementById('skills_box');
    if(box_about.classList.contains('clicked'))
    {
        box_about.classList.remove('clicked');
    }
    else
    {
        document.getElementById('skills_img').classList.add('rotate2');
        setTimeout(()=>{
           document.getElementById('skills_img').classList.remove('rotate2')
           box_about.classList.add('clicked')
        } , 1000);
    }
}) 

document.getElementById('work_box').addEventListener('click' , ()=>{
    let box = document.getElementById('work_box');
    if(box.classList.contains('clicked'))
    {
        box.classList.remove('clicked');
    }
    else
    {
        document.getElementById('work_img').classList.add('rotate1');
        setTimeout(()=>{
           document.getElementById('work_img').classList.remove('rotate1')
           box.classList.add('clicked')
        } , 1000);
    }
}) 

document.getElementById('lan_box').addEventListener('click' , ()=>{
    let box = document.getElementById('lan_box');
    if(box.classList.contains('clicked'))
    {
        box.classList.remove('clicked');
    }
    else
    {
        document.getElementById('lan_img').classList.add('rotate1');
        setTimeout(()=>{
           document.getElementById('lan_img').classList.remove('rotate1')
           box.classList.add('clicked')
        } , 1000);
    }
}) 
    
