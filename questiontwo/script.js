const canvas = document.getElementById("canvas");  
const ctx = canvas.getContext("2d");              
let running = false; 
let interval;       

const ownShip = { x: 300, y: 300 }; 
let targets = [                             
  { x: 100, y: 100, vx: 1, vy: 0.5 },
  { x: 500, y: 100, vx: -0.8, vy: 1 }
];

function distance(a, b) {                     
  return Math.hypot(a.x - b.x, a.y - b.y);    
}

function classifyRisk(d) {
  if (d < 200) return "Danger";          
  if (d < 500) return "Warning";        
  return "Safe";                       
}                                      

function draw() {                     
  ctx.clearRect(0, 0, canvas.width, canvas.height);  

  
  ctx.fillStyle = "blue";  
  ctx.beginPath();
  ctx.arc(ownShip.x, ownShip.y, 10, 0, Math.PI * 2);
  ctx.fill();

  let info = "";

  targets.forEach(t => {
    t.x += t.vx;          
    t.y += t.vy;          

    const d = distance(ownShip, t); 
    const risk = classifyRisk(d);  

    ctx.fillStyle =                                
      risk === "Danger" ? "red" :                  
      risk === "Warning" ? "orange" : "green";     

    ctx.beginPath();
    ctx.arc(t.x, t.y, 8, 0, Math.PI * 2);
    ctx.fill();

    info += `Target: ${risk} (Distance: ${d.toFixed(1)})<br>`;
  });                                                          

  document.getElementById("info").innerHTML = info;
}

function start() {
  if (!running) {
    running = true;
    interval = setInterval(draw, 50); 
  }
}

function pause() {
  running = false;
  clearInterval(interval); 
}
