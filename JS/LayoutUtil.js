// This file is created to contain functions that aid with
// creating an organized layout for a page.


function LUaddBasicLayout(DOM_object, basic_layout_d) {
/*
 *  This function takes an existing DOM object with a parent
 *      DOM object and defines its foundational layout
 *      pieces such as left, top, height, width, position type,
 *      and border
 *
 * Args: 
 *      DOM_object is a Document Object Model object
 *      basic_layout_d is an object with the following keys:
 *          values_type: (str) "fixed" or "fractions"
 *          l: (num) left or null
 *          t: (num) top or null
 *          h: (num) height or null
 *          w: (num) width or null
 */
    let lft = null;
    let tp = null;
    let ht = null;
    let wd = null;
    if (basic_layout_d["values_type"] === "fractions") {
        CheckFractionValues(basic_layout_d);
        let parent_DOM_elem = DOM_object.parentElement;
        if (!(parent_DOM_elem === null)) {
                if (basic_layout_d["l"] != null) {
                    lft = parent_DOM_elem.clientWidth*basic_layout_d["l"];
                }
                if (basic_layout_d["t"] != null) {
                    tp = parent_DOM_elem.clientHeight*basic_layout_d["t"];
                }
                if (basic_layout_d["h"] != null) {
                    ht = parent_DOM_elem.clientHeight*basic_layout_d["h"] - 1;
                }
                if (basic_layout_d["w"] != null) {
                    wd = parent_DOM_elem.clientWidth*basic_layout_d["w"] - 1;
                }
            } else {
            throw "In add basic layout, the DOM_object has no parent element"
        }
    } else if (basic_layout_d["values_type"] === "fixed") {
        lft= basic_layout_d["l"];
        tp = basic_layout_d["t"];
        ht = basic_layout_d["h"];
        wd = basic_layout_d["w"];

    } else {
        //console.log(basic_layout_d["values_type
        throw "value type must be either 'fractions' or 'fixed'"
    }

    LU_Layout_Implementation(DOM_object, 
                lft, 
                tp, 
                ht, 
                wd
            )


    if (DOM_object.tagName === "P") {
       console.log("Found a p tag");
       DOM_object.style.fontSize = basic_layout_d["p"];
    }

}

function LU_Layout_Implementation(DOM_object, lft, tp, ht, wd) {
    // lft, tp, ht, and wd should all be Numbers or null
    if (lft != null) {
        DOM_object.style.left = lft.toString() + "px";
    }
    if (tp != null) {
        DOM_object.style.top =  tp.toString() + "px";
    }
    if (ht != null) {
        DOM_object.style.height = ht.toString() + "px";
    }
    if (wd != null) {
        DOM_object.style.width = wd.toString() + "px";
    }
}



function LUAddStyleToDOMObj(DOM_obj, style_d) {

    // For each key in style_d object
    // we add that style to the DomObject
    // e.g. style_d:
    //   fontSize: 20px

    style_vals = Object.keys(style_d);

    for (let i = 0; i < style_vals.length; i++) {

        key = style_vals[i];

        func_str = "DOM_obj.style." + key + ' = "' + style_d[key] + '";';

        eval(func_str); 

    }

}

function LUAddPropertiesToDOMObj(DOM_obj, property_d) {
    // For each key in property_d object
    // we add that property to the DomObject
    // e.g. property_d:
    //   target: "_blank"

    property_vals = Object.keys(property_d);

    for (let i = 0; i < property_vals.length; i++) {

        key = property_vals[i];

        func_str = "DOM_obj." + key + ' = "' + property_d[key] + '";';

        eval(func_str); 

    }

}




function LUAddElementToParent(DOM_obj, parent_id) {
    document.getElementById("#" + parent_id).appendChild(DOM_obj);
}




function LUCreateBlockElementFromInfo(inp_d, id_base, className) {
    /*
     * This function creates the blocks that are provided in info files
     * Args:
     *     inp_obj:
     *         tag_type: (str)
     *         size_loc_d: obj
     *              values_type: "fixed" or "fractions"
     *              l:
     *              t:
     *              h: 
     *              w:
     *         ids_d: (obj)
     *              [parent_id]: (str) One of this or ext, the parent's id
     *              [parent_id_ext]: (str) One of this or above just parent id
     *              id_ext: (str)
     *         ext_style: (obj) Contains stylistic info.
     *          stylename -> stylevalue
     *         [unq_prp]: (obj) Contains properties to add to object.
     */

    let current_DOM_elem = document.createElement(inp_d["tag_type"]);
    let current_id = id_base + inp_d["ids_d"]["id_ext"];
    let parent_id = null;
    if ("parent_id" in inp_d["ids_d"]) {
        parent_id = inp_d["ids_d"]["parent_id"];
    } else if ("parent_id_ext" in inp_d["ids_d"]) {
        parent_id = id_base + inp_d["ids_d"]["parent_id_ext"];
    } else {
        console.log(inp_d)
        throw "Parent ID not found in block object ^"
    }

    let parent_DOM_elem = document.getElementById(parent_id);

    if (parent_DOM_elem != undefined) {
        parent_DOM_elem.appendChild(current_DOM_elem);
    } else {
        setTimeout(function() {
            parent_DOM_elem = document.getElementById(parent_id);

            if (parent_DOM_elem != undefined) {
                parent_DOM_elem.appendChild(current_DOM_elem);
            } else {
                throw "Parent DOM Element for " + current_id + " object not found!";
            }
        })
    }

    LUaddBasicLayout(current_DOM_elem, inp_d["size_loc_d"]);

    LUAddStyleToDOMObj(current_DOM_elem, inp_d["ext_style"]);
    
    if ("unq_prp" in inp_d) {
        LUAddPropertiesToDOMObj(current_DOM_elem, inp_d["unq_prp"]);
    }

    current_DOM_elem.className = className;
    current_DOM_elem.id = current_id;

    return current_DOM_elem
}






function CheckFractionValues(basic_layout_d) {
 /* In this function we check if the values in the layout dict are indeed
  * percentages
 *      basic_layout_d is an object with the following keys:
 *          values_type: (str) "fixed" or "fractions"
 *          l: (f)
 *          t: (f)
 *          h: (f)
 *          w: (f)
 */
    let key_list = ["l","t","h","w"];
    key_list.forEach(function (item, index) {
        if (!(basic_layout_d[item] > -0.01 && basic_layout_d[item] < 1.01)){
            throw "Error with percentage value " + item + ": " + basic_layout_d[item].toString();
        }
    });
}



function LUCreateElementFromInfoOLD(inp_obj) {

    /*
     *
     * Args:
     *     inp_obj:
     *         tag_type: (str)
     *         basic_layout_d: obj
     *         id_i: (obj)
     *              parent_id: (str)
     *              id: (str)
     *         size_loc_i: (obj) Contains location (height, etc. info)
     *              l:
     *              t:
     *              h: 
     *              w:
     *         style_i: (obj) Contains stylistic info.
     */

    let current_DOM_elem = document.createElement(inp_obj["tag_type"]);

    id_i = inp_obj["id_i"];

    current_DOM_elem.id = id_i["id"];

    let parent_DOM_elem = document.getElementById(id_i["parent_id"])



    parent_DOM_elem.appendChild(current_DOM_elem);

    LUaddBasicLayout(current_DOM_elem, inp_obj["size_loc_i"]);

    LUAddStyleToDOMObj(current_DOM_elem, inp_obj["style_i"]);


    return current_DOM_elem;



}

