// lode All pats
const loadpats =async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data =await res.json();
    const pats =data.pets;
    displayPats(pats);
    appandliked(pats)
} 

// pats continer

const allPatscontiner = document.getElementById('all-pats');

const displayPats =(pats)=>{

   pats.forEach( pat=> {
    // console.log(pat)
    const patscard= document.createElement('div');
    patscard.classList=`card lg:w-96 border-solid border-2 border-[#F8F8F8] rounded-lg p-3 `
    patscard.innerHTML=`
    <figure class="p-5"><img class="rounded-md" src="${pat.image}" alt="Sgies"></figure>
    <div class="card-body">
    <h1 class="text-xl font-bold">${pat.pet_name}</h1>

    <p class="text-[#383838] flex items-center"><img class="rounded-md" src="images/frame.png" alt="">Breed:${pat.breed}</p>

    <p class="text-[#383838] flex items-center"><img class="rounded-md" src="images/frame1.png" alt="">Birth:${pat.date_of_birth}</p>

    <p class="text-[#383838] flex items-center"><img class="rounded-md" src="images/frame2.png" alt="">Gender:${pat.gender
    }</p>

    <p class="text-[#383838] flex items-center"><img class="rounded-md" src="images/frame3.png" alt="">Price :${pat.price
    }$</p>
     
     <div class="flex justify-between border-t-2 border-solid border-[#EEEEEE] pt-3">
      <button  onclick="appandliked()" class="px-3 py-2 border-2 border-solid border-[#E4F0F0] text-[#0E7A81] text-xl font-bold rounded-lg"><img src="images/frame15.png" alt=""></button>

      <button onclick="" class="px-3 py-2 border-2 border-solid border-[#E4F0F0] text-[#0E7A81] text-xl font-bold rounded-lg">Adopt</button>

      <button onclick="" class="px-3 py-2 border-2 border-solid border-[#E4F0F0] text-[#0E7A81] text-xl font-bold rounded-lg">Details</button>

     </div>

    </div>
    `;

    allPatscontiner.appendChild(patscard)
    
    
   
   });

}

// like pats
const likedPat=document.getElementById('likedPats')
        
// pats catagory button

function appandliked(likePatsapps){
    likePatsapps.forEach(likePatsapp => {
         const likePatscon =  document.createElement('div');
        console.log(likePatsapp.image)
        likePatscon.innerHTML=`
        <img src="${likePatscon.image}" alt="">
        `
        likedPat.appendChild(likePatscon)
    });
       
  
    
}  

  
       

loadpats()



const patscatagori =async()=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data =await res.json();
    const PatscatagoriBtns=data.categories;
    catagoriBtn(PatscatagoriBtns);
} 


// get catagoris contener

const catagoriscontener = document.getElementById('catagoris')

const catagoriBtn =(PatscatagoriBtns)=>{
 
    PatscatagoriBtns.forEach(PatscatagoriBtn => {
        
        const PatBtnsContiner=document.createElement('div') 
        PatBtnsContiner.classList=`flex`;
        PatBtnsContiner.innerHTML=`
        <button class="px-[120px] p-3 border-2 border-solid border-[#E4F0F0] rounded-lg hover:bg-[#E7F2F3] hover:rounded-[120px] hover:border-2  hover:border-solid hover:border-[#0E7A81] flex gap-4 items-center "><img src="${PatscatagoriBtn.category_icon
        }" alt="">${PatscatagoriBtn.category
        }</button>
         `;
         catagoriscontener.appendChild(PatBtnsContiner)
    });

}
    patscatagori()


 