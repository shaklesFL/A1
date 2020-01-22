AFRAME.registerComponent('catapultArm', {
    init : function(){
        console.log("init component");

        let currentRotation=0;
        
        Context_AF.el.addEventListener('click', function(event){
            console.log("CLICKY");
            //document.querySelector('a-entity[sound]').components.sound.playSound();
            //Context_AF.createCow();
        });

        Context_AF.el.addEventListener("mouseenter", function(event){
        });

        Context_AF.el.addEventListener("mouseleave", function(event){
        });

        Context_AF.el.addEventListener("mousedown", function(event){
        });

        Context_AF.el.addEventListener("mouseup", function(event){
        });

        Context_AF.el.addEventListener("mousemove", function(event){
            console.log("MOVING");
        });
    },
    tick: function(){

        currentRotation+=1;
        currentRotation %= 90;

        let rot = new THREE.Vector3();
        rot.x=-currentRotation;
        rot.y=0;
        rot.z=0;
        Context_AF.el.object3D.rotation.setFromVector3(rot);

        //got rotation smoothing idea from https://stackoverflow.com/questions/53380400/aframe-smoothing-position-and-rotation
    }
});