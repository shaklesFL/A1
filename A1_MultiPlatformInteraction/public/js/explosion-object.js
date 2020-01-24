AFRAME.registerComponent('explosion-object', {

    init : function(){
        console.log("init component");
        eVelocity = new THREE.Vector3();
        
        dir=Math.random()*Math.PI*2;
        mag=Math.random()*0.2+0.03;
        mt=Math.random()*3*60 + 3*60;

        maxTimer=mt;

        valx=Math.sin(dir)*mag;
        valz=Math.cos(dir)*mag;
        eVelocity.x=valx;
        eVelocity.y=0.1;
        eVelocity.z=valz;

        currentTimer=0;
    },

    deleteSelf : function()
    {
        const Context_AF = this;

        Context_AF.el.parentNode.removeChild(Context_AF.el);
    },

    tick: function(){
        //var position = new THREE.Vector3();
        const Context_AF = this;

        //eVelocity.set(eVelocity.x,eVelocity.y-0.001,eVelocity.z);

        currentTimer+=1;
        console.log("2: "+eVelocity.x);

        //pos1 = Context_AF.el.object3D.getWorldPosition(position);
        //position = pos1.clone();
        //position.add(eVelocity);

        Context_AF.el.object3D.position.add(eVelocity);

        if(currentTimer>=maxTimer)
        {
            Context_AF.deleteSelf();
        }
    }
});