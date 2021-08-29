
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var Engine,world;

function preload(){

}


function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  
    ground1 = new Ground(600,390,1200,10);
   
  }
  
  function draw() {
    background(0);  
   
    
  }
