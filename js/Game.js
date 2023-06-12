AFRAME.registerComponent("game-play", {
    schema: {
        elementId: {type: "string", default: "#coin1"}
    },

    isCollided: function(elementId){
        const element = document.querySelector(elementId);

        element.addEventListener("collide", e => {
            if(elementId.includes("#coin")){
                console.log(elementId + " collision")
            }
            else if(elementId.includes("#fish")){
                console.log(elementId + " collision")
            }
        })
    },

    update: function(){
        this.isCollided(this.data.elementId)
    }
})