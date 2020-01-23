AFRAME.registerComponent('catapult-arm-control', {
    init : function(){
        console.log("init component");

        currentStage=0;
        currentRotation = 0;
        delayTimer=0;
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log("CLICKY");
            if (currentStage==-1)
            {
                currentStage=0;
            }
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
        const Context_AF = this;

        if (currentStage==0)
        {     
            if (currentRotation>=Math.PI*0.5)
            {
                currentRotation=Math.PI*0.5;
                currentStage=1;
                var Omonster = document.querySelector("a-entity[id='monster_boi']");
                if (Omonster.getAttribute('pickup-object').insideBucket == true)
                {
                    Omonster.setAttribute('pickup-object',{insideBucket: false, isFlying:true});
                }
            }
            else
            {
                currentRotation+=0.2;
            }
        }
        else if (currentStage==1)
        {
            if (delayTimer<=70)
            {
                delayTimer+=1;
            }
            else    
            {
                currentStage=2;
                delayTimer=0;
            }
        }
        else if (currentStage=2)
        {
            if (currentRotation<=0)
            {
                currentRotation=0;
                currentStage=-1;
            }
            else
            {
                currentRotation-=0.02;
            }
        }
        
        let rot = new THREE.Vector3();
        rot.x=-currentRotation;
        rot.y=0;
        rot.z=0;
        Context_AF.el.object3D.rotation.setFromVector3(rot);
    }
});