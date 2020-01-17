AFRAME.registerComponent('delete-cow-component', {
    init : function(){
        console.log("init component");

        const Context_AF = this;
        Context_AF.el.addEventListener('click', function(event){
            console.log("CLICKY");
            Context_AF.deleteCow();
        });

        Context_AF.el.addEventListener("mouseenter", function(event){
            //el = html entity or element
            //object3D = three.js (rendering engine) 3D element
            Context_AF.el.object3D.scale.set(1.1,1.1,1.1);
        });

        Context_AF.el.addEventListener("mouseleave", function(event){
            Context_AF.el.object3D.scale.set(1,1,1);
        });
        //Context_AF.el.setAttribute('animation', "property:rotation; to:0 -360 0; loop:true; dur:1000; easing:linear");
    },
    deleteCow : function()
    {
        const Context_AF = this;

        Context_AF.el.parentNode.removeChild(Context_AF.el);
    }
});