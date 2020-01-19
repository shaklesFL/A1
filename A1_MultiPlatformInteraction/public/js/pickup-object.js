AFRAME.registerComponent('pickup-object', {
    init : function(){
        console.log("init component");
        ifMouseDown = false;   
        targetPosition = new THREE.Vector3();
        targetRotation = new THREE.Vector3();
        
        const Context_AF = this;
        targetPosition=Context_AF.el.object3D.position;

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
            ifMouseDown=true;
        });

        Context_AF.el.addEventListener("mouseup", function(event){
            ifMouseDown=false;
        });

        Context_AF.el.addEventListener("mousemove", function(event){
            console.log("MOVING");
        });
    },
    tick: function(){

        var position = new THREE.Vector3();
        var direction = new THREE.Vector3();
        var pos1 = new THREE.Vector3();
        var pos2 = new THREE.Vector3();
        var Distance = 3;

        const Context_AF = this;

        if(ifMouseDown)
        {
            var Ocamera = document.querySelector('.cam');
            var Odir = document.querySelector('.targetDir');
            pos1 = Ocamera.object3D.getWorldPosition(position);
            pos2 = Odir.object3D.getWorldPosition(position);

            position = pos1.clone();
            direction.subVectors( pos2, pos1).normalize().multiplyScalar(Distance);
            position.add(direction);
            targetPosition=position.clone();
            targetRotation=Ocamera.object3D.rotation.clone();

        }
        Context_AF.el.object3D.position.lerp(targetPosition, 0.2);

        let rot = Context_AF.el.object3D.rotation.toVector3().lerp(targetRotation, 0.15);
        Context_AF.el.object3D.rotation.setFromVector3(rot);

        //got rotation smoothing idea from https://stackoverflow.com/questions/53380400/aframe-smoothing-position-and-rotation
    },

    createCow : function()
    {
        const Context_AF = this;
        let MyAnimator = document.querySelector('a-entity[sound]').components.animation;
        //Context_AF.el.setAttribute("rotation", "0 0 0");
        //-Context_AF.el.setAttribute('animation', "property: rotation; to:0 360 0; loop:false; dur:1000; easing:linear");
    }
});