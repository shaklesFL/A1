AFRAME.registerComponent('pickup-object', {

    schema: {
        insideBucket: {type: 'boolean', default: false},
        isFlying: {type: 'boolean', default: false}
      },

    init : function(){
        console.log("init component");
        ifMouseDown = false;   
        hasLaunched = false;
        lastPosition = new THREE.Vector3();
        targetPosition = new THREE.Vector3();
        targetRotation = new THREE.Vector3();

        eVelocity = new THREE.Vector3();
        
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
        var Bposition = new THREE.Vector3();
        var direction = new THREE.Vector3();
        var pos1 = new THREE.Vector3();
        var pos2 = new THREE.Vector3();
        var Distance = 3;

        const Context_AF = this;

        if (hasLaunched == false && this.data.isFlying == true)
        {
            console.log("KK");
            eVelocity.set(0,0.4,-0.7);
            hasLaunched = true;
        }

        var Obucket = document.querySelector("a-entity[id='bucket_point']");
        Bposition = Obucket.object3D.getWorldPosition(position).clone();
        var dist = Obucket.object3D.getWorldPosition(position).clone().distanceTo(Context_AF.el.object3D.getWorldPosition(position).clone());
        if ((this.data.insideBucket==false && dist<0.4) || (this.data.insideBucket==true && dist<2) && this.data.isFlying==false) 
        {
            this.data.insideBucket=true;
        }
        else
        {
            this.data.insideBucket=false;
        }

        if (Math.random()*100<5)
        {
            targetRotation.y += (Math.random()*1-0.5);
        }

        if (this.data.insideBucket == false)
        {
            if (hasLaunched)
            {
                eVelocity.set(eVelocity.x,eVelocity.y-0.01,eVelocity.z);
                pos1 = Context_AF.el.object3D.getWorldPosition(position);
                position = pos1.clone();
                position.add(eVelocity);
                Context_AF.el.object3D.position.set(position.x,position.y,position.z);

                if (Context_AF.el.object3D.position.y<=0)
                {
                    this.resetMonster();
                }
            }
            else
            {
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
            }
        }
        else
        {
            Context_AF.el.object3D.position.set(Bposition.x, Bposition.y, Bposition.z);
        }

        let rot = Context_AF.el.object3D.rotation.toVector3().lerp(targetRotation, 0.15);
        Context_AF.el.object3D.rotation.setFromVector3(rot);

        //got rotation smoothing idea from https://stackoverflow.com/questions/53380400/aframe-smoothing-position-and-rotation
        lastPosition = Context_AF.el.object3D.getWorldPosition(position).clone();
    },

    resetMonster : function()
    {
        var pos = new THREE.Vector3();
        const Context_AF = this;
        var Orespawn = document.querySelector("a-entity[id='respawn_point']");
        pos = Orespawn.object3D.getWorldPosition(pos).clone();

        Context_AF.el.object3D.position.set(pos.x,pos.y-1,pos.z)
        targetPosition.set(pos.x,pos.y,pos.z);
        targetRotation.set(-0.4,0.3,0);
        Context_AF.el.object3D.rotation.set(1,-1,0);
        this.data.insideBucket=false;
        this.data.isFlying=false;
        hasLaunched=false;
        eVelocity.set(0,0,0);
        ifMouseDown=false;
    }
});