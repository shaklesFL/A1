AFRAME.registerComponent('target-object', {
    
    init : function(){
        console.log("init component");
        
        const Context_AF = this;

        Context_AF.el.addEventListener('click', function(event){
            console.log("CLICKY");
            Context_AF.explodeSelf();
        });

    },
    tick: function(){

        var position = new THREE.Vector3();
        var Bposition = new THREE.Vector3();
        var Distance = 3;

        const Context_AF = this;

        var Omonster = document.querySelector("a-entity[id='monster_boi']");
        Bposition = Omonster.object3D.getWorldPosition(position).clone();
        var dist = Omonster.object3D.getWorldPosition(position).clone().distanceTo(Context_AF.el.object3D.getWorldPosition(position).clone());
        if (dist<4) 
        {
            Context_AF.explodeSelf();
        }
    },
    deleteSelf : function()
    {
        const Context_AF = this;

        Context_AF.el.parentNode.removeChild(Context_AF.el);
    },
    explodeSelf : function()
    {
        position = new THREE.Vector3();
        const Context_AF = this;
        pos = new THREE.Vector3();
        pos.x=Context_AF.el.object3D.getWorldPosition(position).clone().x;
        pos.y=Context_AF.el.object3D.getWorldPosition(position).clone().y;
        pos.z=Context_AF.el.object3D.getWorldPosition(position).clone().z;

        for(i=0;i<15;i++)
        {
            var partElem = document.createElement('a-entity');
            partElem.setAttribute('geometry', 'primitive: box');
            partElem.setAttribute('position', {x: pos.x+(Math.random()*1)-0.5, y:pos.y+(Math.random()*1)-0.5 ,z:pos.z+(Math.random()*1)-0.5});
            let randScale = 0.2+ (Math.random()*0.4);
            partElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
            partElem.setAttribute('rotation', {x:Math.random()*359, y:Math.random()*359, z:Math.random()*359});
            partElem.setAttribute('material', "color:red");
            partElem.setAttribute('explosion-object', "");
            //add to scene
            let scene = document.querySelector('a-scene');
            scene.appendChild(partElem);
        }

        //Context_AF.deleteSelf();
    }
});