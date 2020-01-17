AFRAME.registerComponent('create-cow-component', {
    init : function(){
        console.log("init component");

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            console.log("CLICKY");
            Context_AF.createCow();
        });

        Context_AF.el.addEventListener("mouseenter", function(event){
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
        });

        Context_AF.el.addEventListener("mouseleave", function(event){
            Context_AF.el.object3D.scale.set(1,1,1);
        });
    },
    createCow : function()
    {
        const Context_AF = this;

        let cowElem = document.createElement('a-entity');
        cowElem.setAttribute('class', 'clickable');
        cowElem.setAttribute('obj-model', 'obj:assets/models/Cow.obj');
        cowElem.setAttribute('material', 'src:assets/textures/Cow.png');

        cowElem.setAttribute('position', {x: (Math.random()*6)-3, y:0 ,z:-4.0 - (Math.random()*3)});
        const randScale = 0.2+ (Math.random()*0.8);
        cowElem.setAttribute('scale', {x:randScale, y:randScale, z:randScale});
        cowElem.setAttribute('rotation', {x:0, y:Math.random()*359, z:0});
        cowElem.setAttribute('delete-cow-component', '');
        cowElem.setAttribute('animation', "property:rotation; to:0 -359 0; loop:true; dur:3000; easing:linear");

        //add to scene
        let scene = document.querySelector('a-scene');
        scene.appendChild(cowElem);
    }
});