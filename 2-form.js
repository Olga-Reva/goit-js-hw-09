import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */let e={email:"",message:""};const m=document.querySelector(".feedback-form");m.addEventListener("input",t=>{const{name:a,value:r}=t.target;(a==="email"||a==="message")&&(e[a]=r.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e)))});window.addEventListener("load",()=>{const t=localStorage.getItem("feedback-form-state");t&&(e=JSON.parse(t),document.querySelector('input[name="email"]').value=e.email,document.querySelector('textarea[name="message"]').value=e.message)});m.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),m.reset(),localStorage.removeItem("feedback-form-state"),e={email:"",message:""}});
//# sourceMappingURL=2-form.js.map
