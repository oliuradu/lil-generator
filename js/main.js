
// THE VARIABLES
var pages = document.querySelectorAll(".page");
var currentPage = 0;
var unidades = "px";



// THE SCROLLER FUNCTION
window.onscroll = function() {
    var currentPosition = window.pageYOffset || document.documentElement.scrollTop;
  
    if (previousPosition > currentPosition) {
      console.log('scrolling up');
    } else {
      console.log('scrolling down');
    }
  
    previousPosition = currentPosition;
  };




/*/ INIT 

(() => {
    console.log("START..");
    var btnPages = document.querySelectorAll("#menu a");
    btnPages.forEach( (btn, index) => {
        btn.addEventListener("click", e => {
            if(index !== 0){
                document.querySelector("#logoImg").src = "images/logo-white.png";
            }
            else {
                document.querySelector("#logoImg").src = "images/logo-black.png";
            }

        })
    })
})();
*/

  // BORDER RADIUS 

(() => {

const borderExample = document.querySelector("#borderExample");
var sliderBorderRadius = document.querySelector("#border_radius_slider");
var radio = document.querySelectorAll(".border-radius-radio");
var sliderBorderSize = document.querySelector("#border_size_slider");
var styleRadio = document.querySelectorAll(".border-size-radio");
var color = document.querySelector("#borderColor");
const copyCode = document.querySelector(".copyCode");
var borderContent = document.querySelectorAll('.border-content');
    copyCode.addEventListener('click', checkOutPut);


radio.forEach(e => {
    e.addEventListener('click', () =>{

        if(radio[0].checked){
            // AVERAGE NUMBER OF ALL 4 (I have to clean this code here!!!)
            sliderBorderRadius.value = (Number(borderExample.style.borderTopLeftRadius.replace("px", "")) +
                                        Number(borderExample.style.borderTopRightRadius.replace("px", "")) + 
                                        Number(borderExample.style.borderBottomLeftRadius.replace("px", "")) +
                                        Number(borderExample.style.borderBottomRightRadius.replace("px", ""))) / 4
        }
        else if(radio[1].checked){
            sliderBorderRadius.value = borderExample.style.borderTopLeftRadius.replace("px", "");
        }
        else if(radio[2].checked){
            sliderBorderRadius.value = borderExample.style.borderTopRightRadius.replace("px", "");
        }
        else if(radio[3].checked){
            sliderBorderRadius.value = borderExample.style.borderBottomLeftRadius.replace("px", "");
        }
        else if(radio[4].checked){
            sliderBorderRadius.value = borderExample.style.borderBottomRightRadius.replace("px", "");
        }
    })
})

sliderBorderRadius.addEventListener("input", e => {
    
    if(radio[0].checked){

        borderExample.style.borderRadius = `${sliderBorderRadius.value}${unidades}`;
    }
    else{
        if(radio[1].checked){
            borderExample.style.borderTopLeftRadius = `${sliderBorderRadius.value}${unidades}`;
        }
        else if(radio[2].checked){
            borderExample.style.borderTopRightRadius = `${sliderBorderRadius.value}${unidades}`;
        }
        else if(radio[3].checked){
            borderExample.style.borderBottomLeftRadius = `${sliderBorderRadius.value}${unidades}`;
        }
        else if(radio[4].checked){
            borderExample.style.borderBottomRightRadius = `${sliderBorderRadius.value}${unidades}`;
        }
    }
    updateOutput();
});

// Border size 

sliderBorderSize.addEventListener("input", e => {
    borderExample.style.borderWidth = `${sliderBorderSize.value}${unidades}`;
    updateOutput();
});


// Style Radio

styleRadio.forEach(e => {
    e.addEventListener('click', () =>{
        if(styleRadio[0].checked){
            borderExample.style.borderStyle = "solid";
        }
        else if(styleRadio[1].checked){
            borderExample.style.borderStyle = "dashed";
        }
        else if(styleRadio[2].checked){
            borderExample.style.borderStyle = "dotted";
        }
        else if(styleRadio[3].checked){
            borderExample.style.borderStyle = "double";
        }
        else if(styleRadio[4].checked){
            borderExample.style.borderStyle = "groove";
        }
        updateOutput();
    })
})

// Border color
color.addEventListener("change", e => {
    borderExample.style.borderColor = `#${color.value}`;
    updateOutput();
});

// Box sinzing
borderContent.forEach( e => {
    e.addEventListener('click', e => {
        if(borderContent[0].checked){
            borderExample.style.boxSizing = "content-box";
        }
        else{
            borderExample.style.boxSizing = "border-box";
        }
        updateOutput();
    })
})

// Border OUTPUT
function checkOutPut() {
    copyCode.textContent = "Coppied!";
    copyCode.addEventListener("mouseleave", e => {
        copyCode.textContent = "Copy code";
    })
    
    copyText = document.getElementById("Border-output");
    copyText.value = "";
    borderExample.style.borderRadius == "" ? "" : copyText.value += `border-radius:${borderExample.style.borderRadius};\n`;
    borderExample.style.borderWidth == "" ? "" : copyText.value += `border:${borderExample.style.borderWidth} ${borderExample.style.borderStyle} ${borderExample.style.borderColor};\n`;
    borderExample.style.boxSizing == "" ? "" : copyText.value += `box-sizing:${borderExample.style.boxSizing};\n`;
    copyText.select();
    document.execCommand("copy");
}

function updateOutput() {
    copyText = document.getElementById("Border-output");
    copyText.value = "";
    borderExample.style.borderRadius == "" ? "" : copyText.value += `border-radius:${borderExample.style.borderRadius};\n`;
    borderExample.style.borderWidth == "" ? "" : copyText.value += `border:${borderExample.style.borderWidth} ${borderExample.style.borderStyle} ${borderExample.style.borderColor};\n`;
    borderExample.style.boxSizing == "" ? "" : copyText.value += `box-sizing:${borderExample.style.boxSizing};\n`;
}

})();



// Shadow 

(() => {
    copyTextShadow = document.getElementById("Shadow-output");
    const exampleBox = document.querySelector("#shadowExample");
    const exampleText = document.querySelector("#exampleText");
    var horizontal_length = 0,
        vertical_length =0,
        opacity = 99,
        color = "6454e2",
        radius = 1,
        spread = 1,
        shadowtype = "box";
        shadowWhere = "";
    var slider_horizontal = document.querySelector("#shadow_horinzontal"),
        slider_vertical = document.querySelector("#shadow_vertical"),
        slider_blur = document.querySelector("#shadow_blur"),
        slider_spread = document.querySelector("#shadow_spread"),
        slider_opacity = document.querySelector("#opacity"),
        checkbox_where = document.querySelectorAll(".shadow_where"),
        shadowColor = document.querySelector("#shadowColor"),
        checkbox_type = document.querySelectorAll(".shadowType");
    //////////////////////////////////////////////// event listeners ///////////////////////////////////////////////////////////


    // General 

    function updateShadow() {
        if(shadowtype == "box"){
            exampleBox.style.boxShadow = shadowWhere + horizontal_length + 'px ' + vertical_length + "px " + radius + "px " + spread + "px #" + color  + opacity;
        }
        else if(shadowtype == "text"){
            exampleText.style.textShadow = horizontal_length + 'px ' + vertical_length + "px " + radius + "px #" + color + opacity;
        }
        updateOutputShadow()
    }
    //Horizontal Length

    slider_horizontal.addEventListener("input", e =>{
        horizontal_length = slider_horizontal.value;
        updateShadow();
    })

    // Vertical Lenght
    slider_vertical.addEventListener("input", e => {
        vertical_length = slider_vertical.value;
        updateShadow();
    })
    // Shadow blur
    slider_blur.addEventListener("input", e => {
        radius = slider_blur.value;
        updateShadow();
    })
    // Shadow Spread
    slider_spread.addEventListener("input", e => {
        spread = slider_spread.value;
        updateShadow();
    })
    // Shadow Opacity
    slider_opacity.addEventListener("input", e => {
        opacity = slider_opacity.value;
        updateShadow()
    });
    // Shadow Where
    checkbox_where.forEach(e => {
        e.addEventListener("click", e => {
            if(checkbox_where[1].checked){
                shadowWhere = "inset ";
            }
            else {
                shadowWhere = "";
            }
            updateShadow();
        })
        
    })
    // Shadow Color

    shadowColor.addEventListener("change", e => {
        color = shadowColor.value;
        updateShadow();
    })
    // Shadow Type

    checkbox_type.forEach( e => {
        e.addEventListener("click", e => {
            if(checkbox_type[0].checked){
                shadowtype = "box";
                exampleText.style.textShadow = "";
            }
            else {
                shadowtype = "text";
                exampleBox.style.boxShadow = "";
            }
            updateShadow();
        })
    })
    // Update output

    function updateOutputShadow() {

        copyTextShadow.value = "";
        shadowExit = "box-shadow:";
        shadowtype == "box" ? shadowExit = "box-shadow:" : shadowExit = "text-shadow:"
        copyTextShadow.value = shadowExit + horizontal_length + 'px ' + vertical_length + "px " + radius + "px " + spread + "px #" + color + opacity;
    }
})()
