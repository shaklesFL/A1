AFRAME.registerComponent('pickup-object', {
    init : function(){
        console.log("init component");
        this.x_cord = 0;
        this.y_cord = 0;

        ifMouseDown = false;
        

        
        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            console.log("CLICKY");
            document.querySelector('a-entity[sound]').components.sound.playSound();
            Context_AF.createCow();
        });

        Context_AF.el.addEventListener("mouseenter", function(event){
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            Context_AF.el.object3D.scale.set(0.6,0.6,0.6);
        });

        Context_AF.el.addEventListener("mouseleave", function(event){
            Context_AF.el.object3D.scale.set(0.5,0.5,0.5);
        });

        Context_AF.el.addEventListener("mousedown", function(event){
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            ifMouseDown=true;
        });

        Context_AF.el.addEventListener("mouseup", function(event){
            ifMouseDown=false;
        });

        Context_AF.el.addEventListener("mousemove", function(event){
            console.log("MOVING");
            if(this.ifMouseDown)
            {
                var temp_x = event.clientX-this.x_cord;
                var temp_y = event.clientY-this.y_cord;
                if(Math.abs(temp_y)<Math.abs(temp_x))
                {
                    this.el.object3D.rotateY(temp_x*this.data.speed/1000);
                }
                else
                {
                    this.el.object3D.rotateX(temp_y*this.data.speed/1000);
                }
                this.x_cord = event.clientX;
                this.y_cord = event.clientY;
            }
        });
    },
    tick: function(){

        var position = new THREE.Vector3();
        var direction = new THREE.Vector3();
        

        
        const Context_AF = this;

        if(ifMouseDown)
        {
            var Ocamera = document.querySelector('.cam');
            var Odir = document.querySelector('.targetDir');
            position = document.querySelector('.targetDir').object3D.getWorldPosition(position);// + (document.querySelector('.targetDir').object3D.position-document.querySelector('.cam').object3D.position);
            Context_AF.el.object3D.position.set(position.x, position.y , position.z);
        }
    },

    createCow : function()
    {
        const Context_AF = this;
        let MyAnimator = document.querySelector('a-entity[sound]').components.animation;
        //Context_AF.el.setAttribute("rotation", "0 0 0");
        //-Context_AF.el.setAttribute('animation', "property: rotation; to:0 360 0; loop:false; dur:1000; easing:linear");
    }
});