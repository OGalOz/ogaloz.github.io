

function TestFullProgram() {
    // To test:
    // How to get browser size in pixels (height and width)
    // How to create divs based on percentage size

    // When the window is resized, we run 'GetBrowserWidth'
    window.addEventListener("resize", GetBrowserWidth);

}

function GetDimensionsRelativeToElement(DOM_elem, dim_dict) {
    // DOM_elem is a DOM element
    // dim_dict is an object with optional dimensions:
    // top || bottom, left || right, height, width
    // all above values MUST be fractions (Numbers) between 0 and 1.
    // And we return pixel values based on the parent values

    var parent_width = DOM_elem.clientWidth;
    var parent_height = DOM_elem.clientHeight;
    
    var ret_d = {};

    if "top" in Object.keys(dim_dict) {
        CheckFrac(dim_dict["top"])
        ret_d["top"] = dim_dict["top"]*parent_height
    }

    if "height" in Object.keys(dim_dict) {
        CheckFrac(dim_dict["height"])
        ret_d["height"] = dim_dict["height"]*parent_height
    }

    if "left" in Object.keys(dim_dict) {
        CheckFrac(dim_dict["left"])
        ret_d["left"] = dim_dict["left"]*parent_width
    }


    if "width" in Object.keys(dim_dict) {
        CheckFrac(dim_dict["width"])
        ret_d["width"] = dim_dict["width"]*parent_width
    }

    return ret_d
}

function CheckFrac(val) {
    //Function checks if value is between 0 and 1

    if(!(val >= 0 && val <=1)) {
        throw "Incorrect Fraction Value: " + val.toString()
    }
}

function GetBrowserWidth() {

    // first get the size from the window
    // if that didn't work, get it from the body
    var size = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }

    console.log(size["width"])
    console.log(size["height"])

}

function SetWindowToDiv() {
    /*
     * First we set the window to the main web div
     *
     */

    //We change body margins to 0
    document.body.style.margin = 0;


    // We Create the main div
    main_div = CreateMainDiv();


    //We set background gradient
    document.body.style.backgroundImage = "linear-gradient(white, #ccffff, white)";

    return main_div


}

function CreateMainDiv() {
    md_i = DefaultVars["Main_Div"]
    main_div = document.createElement("DIV")
    main_div.style.top = md_i["top"] 
    main_div.style.left = md_i["left"] 
    main_div.style.height = md_i["height"] 
    main_div.style.width = md_i["width"] 
    main_div.style.position = md_i["position"] 
    main_div.id = md_i["id"] 

    document.body.appendChild(main_div)
    return main_div
}

function CreateMenuBar(main_div) {
    /*
     * DefaultVars is a global var.
     * TD: add image as background?
     *
     */

    // Getting data
    mb_i = DefaultVars["Menu_Bar"];

    btn_layout_i = mb_i["button_layout_info"];

    // Creating div
    menu_div = CreateMenuDiv(mb_i, main_div);

    //Attaching image
    menu_url = 'img/bssclf_bigger.jpg'
    menu_div.style.backgroundImage = "url('" + menu_url + "')";

    btn_x_loc = mb_i["first_btn_x"];
    btns_y = mb_i["btns_y"];

    btns_d = mb_i["buttons"]
    btns_list = Object.keys(btns_d);
    for (btn_i in btns_list) {
        btn_name = btns_list[btn_i];
        console.log(btn_name);
        btn_width = CreateMenuButton(btn_name, menu_div, btns_d, btn_layout_i);
        btn_x_loc += btn_width + mb_i["btwn_button_width"]
        console.log(btn_x_loc);
    }

}



function CreateMenuButton(btn_name, menu_div, btns_d, btn_layout_i) {
    /*
     * Args:
     *   btn_name: (string)
     *   menu_div: (Javascript Object)
     *
     *   btn_i: (d)
     *      border_color: (str)
     *      fill_color: (str)
     *      fill_text_color
     *      left
     *      top
     *      height
     *      width
     *
     *  btn_layout_i: (d)
     *      
            fnt_style: ,
            fnt_size: ,
            fnt_color: ,
            trsn_drtn: ,
            border: unknown,
            borderRadius: str
            bg_color: white
     */

    btn_i = btns_d[btn_name];

    var crnt_btn = document.createElement("btn");
    crnt_btn.style.left = btn_i["left"];
    crnt_btn.style.position = "absolute";
    crnt_btn.style.display = "inline-block";
    crnt_btn.style.top = btn_i["top"];
    crnt_btn.style.cursor = "pointer";
    crnt_btn.style.textAlign = "center";
    crnt_btn.style.fontSize = btn_layout_i["fontSize"];
    crnt_btn.style.paddingTop = btn_layout_i["paddingTop"];
    crnt_btn.style.height = btn_i["height"];
    crnt_btn.style.width = btn_i["width"];
    crnt_btn.style.border = btn_layout_i["border"];
    crnt_btn.style.borderRadius = btn_layout_i["borderRadius"];
    crnt_btn.style.transitionDuration = btn_layout_i["transitionDuration"];
    crnt_btn.id = IDify(btn_name) + "-btn-id";
    crnt_btn.innerHTML = btn_name;
    SetBtnOnClick(crnt_btn, btn_name, btn_i);
    menu_div.appendChild(crnt_btn)

    console.log(crnt_btn.offsetWidth);

    return crnt_btn.offsetWidth;

}

function IDify(inp_s) {
    // Function used to remove slashes and spaces from ids
    return inp_s.replace(/\s/g, '-')
}

function SetBtnOnClick(btn_obj, btn_name, btn_i) {
    if (btn_name == "Home") {

        btn_obj.setAttribute("onclick", "CreateHomeContent(true)");

    } else if (btn_name == "Discography") {

        btn_obj.setAttribute("onclick", "CreateDiscographyContent(true)");
    } else if (btn_name == "Transcriptions") {

        btn_obj.setAttribute("onclick", "CreateTranscriptionsContent(true)");
    } else if (btn_name == "Compositions") {

        btn_obj.setAttribute("onclick", "CreateCompositionsContent(true)");
    } else if (btn_name == "Other Projects") {

        btn_obj.setAttribute("onclick", "CreateOtherProjectsContent(true)");
    } else if (btn_name == "Contact") {

        btn_obj.setAttribute("onclick", "CreateContactContent(true)");
    } else {
        alert("Error- do not recognize button name")
    }
}

function CreateMenuDiv(menu_bar_info, main_div) {

    // Creating Menu Div - empty
    menu_div = document.createElement("DIV");
    menu_div.style.position = "absolute";
    menu_div.style.left = "0px";
    menu_div.style.top = menu_bar_info["top"].toString() + "px";
    menu_div.style.height = menu_bar_info["height"];
    menu_div.style.width = "100%";
    //menu_div.style.border = "thick solid #0000FF";
    main_div.appendChild(menu_div);

    return menu_div

}


function CreateContentDiv(main_div) {

    cont_d = DefaultVars["Content_Div"];
    content_div = document.createElement("DIV")
    content_div.id = "content-div"
    content_div.style.position = "absolute";
    content_div.style.left = "0px";
    content_div.style.top = "350px";
    content_div.style.height = "100%";
    content_div.style.width = "100%"; 
    content_div.style.transitionDuration = cont_d["transitionDuration"];
    main_div.appendChild(content_div);

}

function UpdateButtons(btn_name) {
    /*
     * btn_name: (str) one of "Home", "Compositions", "Transcriptions", ...
     *
     *
     *
     *
     */

    //If the button is pressed, then we do nothing:
    if (!(btn_name in pressed_buttons_d)) {

        pressed_button_name = Object.keys(pressed_buttons_d)[0];

        // We get the newly pressed_button object in DOM
        btn_to_press = document.getElementById(IDify(btn_name) + "-btn-id");

        btn_info = DefaultVars["Menu_Bar"]["buttons"][btn_name];

        btn_to_press.style.backgroundColor = btn_info["fill_color"];
        btn_to_press.style.color = btn_info["fill_text_color"];


        // We get the pressed_button object in DOM
        if (pressed_button_name) {
            pressed_btn = document.getElementById(IDify(pressed_button_name) 
                + "-btn-id");

            pressed_btn.style.backgroundColor = "white";
            pressed_btn.style.color = "black";
            // We remove the formerly pressed button from pressed_buttons_d
            delete pressed_buttons_d[pressed_button_name];
        }

        pressed_buttons_d[btn_name] = 1;
    }

}


// active_bool (True or False) used to decide whether to create object 
// actively or inactively (I.e. to the side and placed in 'right_stored_content')
function CreateHomeContent(active_bool) {

    if (!("Home" in pressed_buttons_d)) {
    
        // First we get the content div and clear it out
        content_div = ClearAndGetContentDiv("Home"); 

        // We get the Home Data (Currently already imported from HomeData.js)
        h_d = HomeData 

        // We prepare the buttons:
        UpdateButtons("Home");

        // Then we check if Home has already been created or not
        if ("Home" in created_contents) {
            //You get every element's left, top, and width by its id
            home_elems = document.getElementsByClassName(IDify("Home") + "-content");

            console.log("HERE")

            for (i=0; i<home_elems.length; i++) {
                crnt_elem = home_elems[i];
                crnt_elem.style.opacity = "1";
                crnt_elem.style.left = h_d["elem_ids"][crnt_elem.id]["left"];
                crnt_elem.style.width = h_d["elem_ids"][crnt_elem.id]["width"];

            }
        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place
            elem_ids_d = h_d["elem_ids"];
            elm_ids = Object.keys(elem_ids_d); 
            for (i=0; i<elm_ids.length; i++) {
                elm_d = elem_ids_d[elm_ids[i]];
                tt_x = document.createElement(elm_d["tag_type"]);
                tt_x.id = IDify(elm_ids[i]);
                tt_x.className = "Home-content";
                tt_x.style.position = elm_d["position"];
                tt_x.style.fontStyle = elm_d["fontStyle"]
                tt_x.style.fontSize = elm_d["fontSize"]
                tt_x.style.color = elm_d["fontColor"]
                tt_x.innerHTML = elm_d["innerHTML"].join("");
                tt_x.style.left = "1500px";
                tt_x.style.top = elm_d["top"];
                tt_x.style.width = elm_d["width"];
                tt_x.style.opacity = "0";
                tt_x.style.transitionDuration = "1200ms";
                content_div.appendChild(tt_x);
            }
            
            if (active_bool) {
                // Move them to proper location 
                for (i=0; i<elm_ids.length; i++) {
                    elm_d = elem_ids_d[elm_ids[i]];
                    tt_x = document.getElementById(IDify(elm_ids[i]));
                    tt_x.style.left = elm_d["left"];
                    tt_x.style.opacity = "1";
                }
            } else {
                right_stored_content_d["Home"] = 1;
            }

            created_contents["Home"] = 1;
        }

        active_content_d["Home"] = 1;
    }
    
}




function CreateDiscographyContent(active_bool) {
    //active_bool is a boolean describing whether you want to create
    // these elements active (in center with opacity 1...) or inactive 
    // (to the side with opacity 0)

    if (!("Discography" in pressed_buttons_d)) {

        if (active_bool) {
            // First we get the content div and clear it out
            content_div = ClearAndGetContentDiv("Discography"); 

            UpdateButtons("Discography");
        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Discography" in created_contents) {

            //You get every element's left, top, and width by its id
            disc_elems = document.getElementsByClassName(IDify("Discography") + "-content");

            console.log("HERE")

            for (i=0; i<disc_elems.length; i++) {
                crnt_elem = disc_elems[i];
                crnt_elem.style.opacity = "1";
                crnt_elem.style.left = disc_i["div_info"]["left"];
                crnt_elem.style.width = disc_i["div_info"]["width"];

            }
        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place
            
            // We create the "As Leader" title
            createAsLeaderTitle();

            discLeader_i_l = disc_i["leader_discography_info_list"]
            discLeader_i_l.forEach(createLeaderDiscographyDiv);

            //We create "As Sideman" title
            sideman_divs_start = createAsSidemanTitle();

            
            discSideman_i_l = disc_i["sideman_discography_info_list"]
            
            discSideman_i_l.forEach(createSidemanDiscographyDiv);
            

            if (active_bool) {
    
                console.log("Discography Here");
                disc_elems = document.getElementsByClassName(IDify("Discography") + "-content");

                // Move them to proper location 
                for (i=0; i<disc_elems.length; i++) {
                    crnt_elm = disc_elems[i];
                    crnt_elm.style.left = disc_i["div_info"]["left"];
                    crnt_elm.style.width = disc_i["div_info"]["width"];
                    crnt_elm.style.opacity = "1";
                }
            } else {
                right_stored_content_d["Discography"] = 1;
            }

            created_contents["Discography"] = 1;
        }
        
        if (active_bool) {
            active_content_d["Discography"] = 1;
        }
    }


}

function CreateTranscriptionsContent(active_bool) {

    if (!("Transcriptions" in pressed_buttons_d)) {

        if (active_bool) {
            // First we get the content div and clear it out
            content_div = ClearAndGetContentDiv("Transcriptions"); 

            UpdateButtons("Transcriptions");
        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Transcriptions" in created_contents) {

            //You get every element's left, top, and width by its id
            transc_elems = document.getElementsByClassName(IDify("Transcriptions") + "-content");

            console.log("HERE")

            for (i=0; i<transc_elems.length; i++) {
                crnt_elem = transc_elems[i];
                crnt_elem.style.opacity = "1";
                crnt_elem.style.left = transc_i["div_info"]["left"];
                crnt_elem.style.width = transc_i["div_info"]["width"];

            }
        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place

            transc_i_l = transc_i["transcriptions_info_list"]
            transc_i_l.forEach(createTranscriptionDiv);

            if (active_bool) {
    
                console.log("Transcription Here");
                transc_elems = document.getElementsByClassName(IDify("Transcriptions") + "-content");

                // Move them to proper location 
                for (i=0; i<transc_elems.length; i++) {
                    crnt_elm = transc_elems[i];
                    crnt_elm.style.left = transc_i["div_info"]["left"];
                    crnt_elm.style.width = transc_i["div_info"]["width"];
                    crnt_elm.style.opacity = "1";
                }
            } else {
                right_stored_content_d["Transcriptions"] = 1;
            }

            created_contents["Transcriptions"] = 1;
        }
        
        if (active_bool) {
            active_content_d["Transcriptions"] = 1;
        }
    }



}


function CreateCompositionsContent(active_bool) {

    if (!("Compositions" in pressed_buttons_d)) {

        if (active_bool) {
            // First we get the content div and clear it out
            content_div = ClearAndGetContentDiv("Compositions"); 

            UpdateButtons("Compositions");
        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Compositions" in created_contents) {

            //You get every element's left, top, and width by its id
            comp_elems = document.getElementsByClassName(IDify("Compositions") + "-content");

            console.log("HERE")

            for (i=0; i<comp_elems.length; i++) {
                crnt_elem = comp_elems[i];
                crnt_elem.style.opacity = "1";
                crnt_elem.style.left = comp_i["div_info"]["left"];
                crnt_elem.style.width = comp_i["div_info"]["width"];

            }
        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place

            comp_i_l = comp_i["compositions_info_list"]
            comp_i_l.forEach(createCompositionDiv);

            if (active_bool) {
    
                console.log("Composition Here");
                comp_elems = document.getElementsByClassName(IDify("Compositions") + "-content");

                // Move them to proper location 
                for (i=0; i<comp_elems.length; i++) {
                    crnt_elm = comp_elems[i];
                    crnt_elm.style.left = comp_i["div_info"]["left"];
                    crnt_elm.style.width = comp_i["div_info"]["width"];
                    crnt_elm.style.opacity = "1";
                }
            } else {
                right_stored_content_d["Compositions"] = 1;
            }

            created_contents["Compositions"] = 1;
        }
        
        if (active_bool) {
            active_content_d["Compositions"] = 1;
        }
    }

}

function CreateOtherProjectsContent(active_bool) {

    // First we get the content div and clear it out
    content_div = ClearAndGetContentDiv("Other Projects"); 


    UpdateButtons("Other Projects");
}

function CreateContactContent(active_bool) {

    // First we get the content div and clear it out
    content_div = ClearAndGetContentDiv("Contact"); 


    UpdateButtons("Contact");
}


function ClearAndGetContentDiv(new_content_name) {
    /*
     * Args: 
     *     new_content_name: (str) The name of new content, e.g. "Home".
     *
     *
     */
    // In this function we will take all objects, and push them to the side
    // All DOM objects will have transitionDuration set to 1 second.
    // They will be pushed to left = 0 and width = 0 and visibility = hidden?
    // These in combination with transition duration will create a nice visual effect.
    // We will move active nodes to the left, and all inactive ones will be transferred to the 
    // The right side of the page immediately, before moving
    // anything to the right (Transition-duration set to 0), so it will look like we are flipping pages forward all 
    // the time. (Exit to the left, enter from the right).


    // Two cases: If the new_content_name is in the left, we move active content
    // to the right. Otherwise, we move the active content to the left.

    // First, we move the active objects to left
    active_name = Object.keys(active_content_d)[0];

    console.log("Clearing Content Div");
    console.log("active: " + active_name);

    if (!(new_content_name in left_stored_content_d)) {


        if (active_name) {
            active_elems = document.getElementsByClassName(IDify(active_name) + "-content");
            for (i=0; i<active_elems.length; i++) {
                active_obj = active_elems[i];

                active_obj.style.left = "0px";
                active_obj.style.width = "0px";
                active_obj.style.opacity = "0";
                active_obj.transitionDuration = "0ms";

            }
            delete active_content_d[active_name];
        }

        // Then, we  move any thing from before from the left stored content to the right
        // in silence

        console.log("Left stored content: ")
        console.log(left_stored_content_d);
        left_name = Object.keys(left_stored_content_d)[0];

        if (left_name) {
            left_elems = document.getElementsByClassName(IDify(left_name) + "-content")
            for (i=0; i<left_elems.length; i++) {
                crnt_left_obj = left_elems[i];
                crnt_left_obj.style.transitionDuration = "0";
                crnt_left_obj.style.left = "1500px";
            }
            // Remove it from the left stored content 
            delete left_stored_content_d[left_name];
        }
        // Then we add the original active element to the left_stored_content
        if (active_name) {
            left_stored_content_d[active_name] = 1
        };
        
        if (left_name) {
            right_stored_content_d[left_name] = 1;
        }
        

        //Then we restore transition duration of right content to proper amount
        right_stored_objects = Object.keys(right_stored_content_d);
        console.log("Right stored objects:")
        console.log(right_stored_objects);

        for (i = 0; i < right_stored_objects.length; i++) {
            crnt_right_name = right_stored_objects[i];
            crnt_right_elems = document.getElementsByClassName(IDify(crnt_right_name) + "-content");
            console.log("current right elements worked on: ")
            console.log(crnt_right_elems);
            for (j = 0; j< crnt_right_elems.length; j++) {
                crnt_right_el = crnt_right_elems[j];
                crnt_right_el.style.transitionDuration = "1200ms";
            }
        }

        delete right_stored_content_d[new_content_name];
        // We add the recently moved object from the left to the right

    } else {
        // Now is the case where the new_content_name is stored in the left.
        // We just move the content to the right.

        console.log(new_content_name + " found in left, moving remaining to right")

        if (active_name) {
            active_elems = document.getElementsByClassName(IDify(active_name) + "-content");
            for (i=0; i<active_elems.length; i++) {
                active_obj = active_elems[i];

                active_obj.style.left = "1500px";
                active_obj.style.width = "0px";
                active_obj.style.opacity = "0";
                active_obj.transitionDuration = "0ms";

            }
            delete active_content_d[active_name];
            right_stored_content_d[active_name] = 1;
        }
            // Remove new_content_name from the left stored content 
            delete left_stored_content_d[new_content_name];

    }


    content_div = document.getElementById("content-div")
    return content_div

}
function createTranscriptionDiv(item, index) {

    //NOTE: Incomplete - Still in Composition format.
    // Update the transcription parts to include the transcription
    // images and the correct videos and better descriptions.

    /*
     * item: (d) Contains keys
     *     song_name: (str)
     *     artist_name: (str)
     *     album_name: (str)
     *     year_of_recording: (str) 
     *     audio_link: (str)
     *     img_link: (str)
     *     purchase_link: (str)
     *     description: list<str>
     *     [instrumentation]: (str)
     */

    t_elm = document.createElement("DIV")
    
    //transcription element div info:
    d_i = transc_i["div_info"];
    t_elm.style.height = d_i["height"].toString() + "px";
    h_val = (d_i["init_height"] + index*(d_i["height"] + d_i["space_btwn_divs"])).toString() + "px";
    console.log(h_val);
    t_elm.style.top = h_val ;
    t_elm.style.position = d_i["position"];
    t_elm.style.border = d_i["border_style"];
    t_elm.style.transitionDuration = "1200ms";
    t_elm.className = "Transcriptions-content";
    t_elm.style.opacity = "0";
    t_elm.style.left = "1500px";
    t_elm.style.width = "0px";

    //Creating image
    img_i = d_i["img_info"]
    t_img = document.createElement("A");
    t_img.style.position = img_i["position"];
    t_img.style.left = img_i["left"];
    t_img.style.top = img_i["top"];
    t_img.style.height = img_i["height"];
    t_img.style.width = img_i["width"];
    t_img.style.backgroundImage = "url('" + item["img_link"] + "')";
    t_img.style.backgroundSize = img_i["backgroundSize"]; 
    t_img.style.cursor = "pointer";
    t_img.href= item["audio_link"];
    t_img.target = img_i["target"];
    //t_img.className = "Compositions-content";
    t_elm.appendChild(t_img);


    // Creating info sidebar
    sif_d = d_i["info_div"]
    t_sub_info_d = document.createElement("DIV")
    t_sub_info_d.style.position = sif_d["position"];
    t_sub_info_d.style.left = sif_d["left"];
    t_sub_info_d.style.top = sif_d["top"];
    t_sub_info_d.style.height = sif_d["height"];
    t_sub_info_d.style.width = sif_d["width"];
    t_sub_info_d.style.overflow = sif_d["overflow"];



    // Creating Title
    ttl_i = d_i["info_div"]["title_info"]
    c_ttl = document.createElement("DIV")
    c_ttl.style.position = ttl_i["position"];
    c_ttl.style.left = ttl_i["left"];
    c_ttl.style.top = ttl_i["top"];
    c_ttl.style.height = ttl_i["height"];
    c_ttl.style.width = ttl_i["width"];
    c_ttl.style.textAlign = ttl_i["textAlign"];
        ttl_p = document.createElement("P");
        ttl_p.style.fontSize = ttl_i["fontSize"];
        ttl_p.style.fontWeight = ttl_i["fontWeight"];
        ttl_p.style.fontFamily = ttl_i["fontFamily"];
        ttl_p.innerHTML = item["song_name"]
    c_ttl.appendChild(ttl_p);
    t_sub_info_d.appendChild(c_ttl);

    // Creating "Artist"
    artst_i = d_i["info_div"]["artist_info"]
    c_artst = document.createElement("DIV")
    c_artst.style.position = artst_i["position"];
    c_artst.style.left = artst_i["left"];
    c_artst.style.top = artst_i["top"];
    c_artst.style.height = artst_i["height"];
    c_artst.style.width = artst_i["width"];
    c_artst.style.textAlign = artst_i["textAlign"];
        artst_p = document.createElement("P");
        artst_p.style.fontSize = artst_i["fontSize"];
        artst_p.style.fontWeight = artst_i["fontWeight"];
        artst_p.style.fontFamily = artst_i["fontFamily"];
        artst_p.innerHTML = "Artist: " + item["artist_name"]
    c_artst.appendChild(artst_p);
    t_sub_info_d.appendChild(c_artst);


    // Creating "Album"
    albm_i = d_i["info_div"]["album_info"]
    c_albm = document.createElement("DIV")
    c_albm.style.position = albm_i["position"];
    c_albm.style.left = albm_i["left"];
    c_albm.style.top = albm_i["top"];
    c_albm.style.height = albm_i["height"];
    c_albm.style.width = albm_i["width"];
    c_albm.style.textAlign = albm_i["textAlign"];
        albm_p = document.createElement("P");
        albm_p.style.fontSize = albm_i["fontSize"];
        albm_p.style.fontWeight = albm_i["fontWeight"];
        albm_p.style.fontFamily = albm_i["fontFamily"];
        albm_p.innerHTML = "Album: " + item["album_name"]
    c_albm.appendChild(albm_p);
    t_sub_info_d.appendChild(c_albm);


    // Creating "Year"
    year_i = d_i["info_div"]["year_info"]
    c_year = document.createElement("DIV")
    c_year.style.position = year_i["position"];
    c_year.style.left = year_i["left"];
    c_year.style.top = year_i["top"];
    c_year.style.height = year_i["height"];
    c_year.style.width = year_i["width"];
    c_year.style.textAlign = year_i["textAlign"];
        year_p = document.createElement("P");
        year_p.style.fontSize = year_i["fontSize"];
        year_p.style.fontWeight = year_i["fontWeight"];
        year_p.style.fontFamily = year_i["fontFamily"];
        year_p.innerHTML = "Year: " + item["year_of_recording"]
    c_year.appendChild(year_p);
    t_sub_info_d.appendChild(c_year);




    // Creating Listen/Purchase button 
    purch_i = d_i["info_div"]["purchase_listen_info"]
    c_li_purch = document.createElement("DIV")
    c_li_purch.style.position = purch_i["position"];
    c_li_purch.style.left = purch_i["left"];
    c_li_purch.style.top = purch_i["top"];
    c_li_purch.style.height = purch_i["height"];
    c_li_purch.style.width = purch_i["width"];
    c_li_purch.style.textAlign = purch_i["textAlign"];

    //Creating Purchase link
    purch_a = document.createElement("A");
    purch_a.style.fontSize = purch_i["fontSize"];
    purch_a.style.color = purch_i["fontColor"];
    purch_a.style.fontFamily = purch_i["fontFamily"];
    purch_a.style.fontStyle = purch_i["fontStyle"];
    purch_a.href = item["purchase_link"];
    purch_text_i = purch_i["purchase_text"]
    purch_a.style.position = purch_text_i["position"]
    purch_a.style.left = purch_text_i["left"],
    purch_a.target = purch_text_i["target"];
    purch_a.innerHTML = purch_text_i["text"]; 
    c_li_purch.appendChild(purch_a);

    //Creating Listen link
    lisn_a = document.createElement("A");
    lisn_a.style.fontSize = purch_i["fontSize"];
    lisn_a.style.color = purch_i["fontColor"];
    lisn_a.style.fontFamily = purch_i["fontFamily"];
    lisn_a.style.fontStyle = purch_i["fontStyle"];
    lisn_a.href = item["audio_link"];


    lisn_text_i = purch_i["listen_text"]
    lisn_a.style.position = lisn_text_i["position"]
    lisn_a.style.left = lisn_text_i["left"]
    lisn_a.target = lisn_text_i["target"];
    lisn_a.innerHTML = lisn_text_i["text"]; 
    c_li_purch.appendChild(lisn_a);


    //Creating Divider 
    divd_p = document.createElement("A");
    divd_p.style.fontSize = purch_i["fontSize"];
    divd_p.style.fontFamily = purch_i["fontFamily"];
    divd_p.href = item["audio_link"];

    divd_text_i = purch_i["divider_text"]

    divd_p.style.color = divd_text_i["fontColor"];
    divd_p.style.position = divd_text_i["position"];
    divd_p.style.left = divd_text_i["left"];
    divd_p.style.top = divd_text_i["top"];
    divd_p.style.textDecoration = "none";
    divd_p.style.cursor = "default";
    divd_p.style.fontStyle = divd_text_i["fontStyle"];
    divd_p.innerHTML = divd_text_i["text"]; 
    c_li_purch.appendChild(divd_p);


    t_sub_info_d.appendChild(c_li_purch);



    // Creating description area
    desc_i = d_i["info_div"]["description_info"]
    c_desc = document.createElement("DIV")
    c_desc.style.position = desc_i["position"];
    c_desc.style.left = desc_i["left"];
    c_desc.style.top = desc_i["top"];
    c_desc.style.height = desc_i["height"];
    c_desc.style.width = desc_i["width"];

    desc_a = document.createElement("P");
    desc_a.style.fontSize = desc_i["fontSize"];
    desc_a.style.color = desc_i["fontColor"];
    desc_a.style.fontStyle = desc_i["fontStyle"];
    desc_a.style.fontFamily = desc_i["fontFamily"];
    desc_a.innerHTML = item["description"].join("");
    c_desc.appendChild(desc_a);
    t_sub_info_d.appendChild(c_desc);



    t_elm.appendChild(t_sub_info_d);

    content_div.appendChild(t_elm);



}

function createLeaderDiscographyDiv(item, index) {
    /*
     *
     * item
            "artist_name":"Omree Gal-Oz" ,
            "album_name": "Storm",
            "img_link": "img/DSCG/OG_Storm.jpg",
            "date_of_release": "August 9th, 2020" ,
            "date_of_recording": "February 1st, 2020",
            "video_link":"",
            "listen_link": "https://omreegal-oz.bandcamp.com/track/storm",
            "description": [""]
     *
     */

    c_elm = document.createElement("DIV")
    
    //composition elements div info:
    d_i = disc_i["div_info"];
    c_elm.style.height = d_i["height"].toString() + "px";
    h_val = (d_i["init_height"] + index*(d_i["height"] + d_i["space_btwn_divs"])).toString() + "px";
    console.log(h_val);
    c_elm.style.top = h_val ;
    c_elm.style.position = d_i["position"];
    c_elm.style.border = d_i["border_style"];
    c_elm.style.transitionDuration = "1200ms";
    c_elm.className = "Discography-content";
    c_elm.style.opacity = "0";
    c_elm.style.left = "1500px";
    c_elm.style.width = "0px";

    //Creating image
    img_i = d_i["img_info"]
    c_img = document.createElement("A");
    c_img.style.position = img_i["position"];
    c_img.style.left = img_i["left"];
    c_img.style.top = img_i["top"];
    c_img.style.height = img_i["height"];
    c_img.style.width = img_i["width"];
    c_img.style.backgroundImage = "url('" + item["img_link"] + "')";
    c_img.style.backgroundSize = img_i["backgroundSize"]; 
    c_img.style.cursor = "pointer";
    c_img.href= item["listen_link"];
    c_img.target = img_i["target"];
    //c_img.className = "Compositions-content";
    c_elm.appendChild(c_img);


    // Creating info sidebar
    sif_d = d_i["info_div"]
    c_sub_info_d = document.createElement("DIV")
    c_sub_info_d.style.position = sif_d["position"];
    c_sub_info_d.style.left = sif_d["left"];
    c_sub_info_d.style.top = sif_d["top"];
    c_sub_info_d.style.overflow = sif_d["overflow"];
    c_sub_info_d.style.height = sif_d["height"];
    c_sub_info_d.style.width = sif_d["width"];


    // Creating title
    ttl_i = d_i["info_div"]["title_info"]
    c_ttl = document.createElement("DIV")
    c_ttl.style.position = ttl_i["position"];
    c_ttl.style.left = ttl_i["left"];
    c_ttl.style.top = ttl_i["top"];
    c_ttl.style.height = ttl_i["height"];
    c_ttl.style.width = ttl_i["width"];
    c_ttl.style.textAlign = ttl_i["textAlign"];
    ttl_p = document.createElement("P");
    ttl_p.style.fontSize = ttl_i["fontSize"];
    ttl_p.style.fontWeight = ttl_i["fontWeight"];
    ttl_p.style.fontFamily = ttl_i["fontFamily"];
    ttl_p.innerHTML = item["album_name"]
    c_ttl.appendChild(ttl_p);
    c_sub_info_d.appendChild(c_ttl);


    // Creating Listen/Purchase button 
    purch_i = d_i["info_div"]["purchase_listen_info"]
    c_li_purch = document.createElement("DIV")
    c_li_purch.style.position = purch_i["position"];
    c_li_purch.style.left = purch_i["left"];
    c_li_purch.style.top = purch_i["top"];
    c_li_purch.style.height = purch_i["height"];
    c_li_purch.style.width = purch_i["width"];
    c_li_purch.style.textAlign = purch_i["textAlign"];

    //Creating Purchase link
    purch_a = document.createElement("A");
    purch_a.style.fontSize = purch_i["fontSize"];
    purch_a.style.color = purch_i["fontColor"];
    purch_a.style.fontFamily = purch_i["fontFamily"];
    purch_a.style.fontStyle = purch_i["fontStyle"];
    purch_a.href = item["purchase_link"];
    purch_text_i = purch_i["purchase_text"]
    purch_a.style.position = purch_text_i["position"]
    purch_a.style.left = purch_text_i["left"],
    purch_a.target = purch_text_i["target"];
    purch_a.innerHTML = purch_text_i["text"]; 
    c_li_purch.appendChild(purch_a);

    //Creating Listen link
    lisn_a = document.createElement("A");
    lisn_a.style.fontSize = purch_i["fontSize"];
    lisn_a.style.color = purch_i["fontColor"];
    lisn_a.style.fontFamily = purch_i["fontFamily"];
    lisn_a.style.fontStyle = purch_i["fontStyle"];
    lisn_a.href = item["audio_link"];


    lisn_text_i = purch_i["listen_text"]
    lisn_a.style.position = lisn_text_i["position"]
    lisn_a.style.left = lisn_text_i["left"]
    lisn_a.target = lisn_text_i["target"];
    lisn_a.innerHTML = lisn_text_i["text"]; 
    c_li_purch.appendChild(lisn_a);


    //Creating Divider 
    divd_p = document.createElement("A");
    divd_p.style.fontSize = purch_i["fontSize"];
    divd_p.style.fontFamily = purch_i["fontFamily"];
    divd_p.href = item["audio_link"];

    divd_text_i = purch_i["divider_text"]

    divd_p.style.color = divd_text_i["fontColor"];
    divd_p.style.position = divd_text_i["position"];
    divd_p.style.left = divd_text_i["left"];
    divd_p.style.top = divd_text_i["top"];
    divd_p.style.textDecoration = "none";
    divd_p.style.cursor = "default";
    divd_p.style.fontStyle = divd_text_i["fontStyle"];
    divd_p.innerHTML = divd_text_i["text"]; 
    c_li_purch.appendChild(divd_p);


    c_sub_info_d.appendChild(c_li_purch);




    // Creating description area
    desc_i = d_i["info_div"]["description_info"]
    c_desc = document.createElement("DIV")
    c_desc.style.position = desc_i["position"];
    c_desc.style.left = desc_i["left"];
    c_desc.style.top = desc_i["top"];
    c_desc.style.height = desc_i["height"];
    c_desc.style.width = desc_i["width"];

    desc_a = document.createElement("P");
    desc_a.style.fontSize = desc_i["fontSize"];
    desc_a.style.color = desc_i["fontColor"];
    desc_a.style.fontStyle = desc_i["fontStyle"];
    desc_a.style.fontFamily = desc_i["fontFamily"];
    desc_a.innerHTML = item["description"].join("");
    c_desc.appendChild(desc_a);
    c_sub_info_d.appendChild(c_desc);



    c_elm.appendChild(c_sub_info_d);

    content_div.appendChild(c_elm);



}


function createSidemanDiscographyDiv(item, index) {
    /*
     *
     * item
            "artist_name":"Omree Gal-Oz" ,
            "album_name": "Storm",
            "img_link": "img/DSCG/OG_Storm.jpg",
            "date_of_release": "August 9th, 2020" ,
            "date_of_recording": "February 1st, 2020",
            "video_link":"",
            "listen_link": "https://omreegal-oz.bandcamp.com/track/storm",
            "description": [""]
     *
     * We also use var sideman_divs_start (int) for starting height
     */

    c_elm = document.createElement("DIV")
    
    //composition elements div info:
    d_i = disc_i["div_info"];
    c_elm.style.height = d_i["height"].toString() + "px";
    h_val = (sideman_divs_start + index*(d_i["height"] + d_i["space_btwn_divs"])).toString() + "px";
    console.log(h_val);
    c_elm.style.top = h_val ;
    c_elm.style.position = d_i["position"];
    c_elm.style.border = d_i["border_style"];
    c_elm.style.transitionDuration = "1200ms";
    c_elm.className = "Discography-content";
    c_elm.style.opacity = "0";
    c_elm.style.left = "1500px";
    c_elm.style.width = "0px";

    //Creating image
    img_i = d_i["img_info"]
    c_img = document.createElement("A");
    c_img.style.position = img_i["position"];
    c_img.style.left = img_i["left"];
    c_img.style.top = img_i["top"];
    c_img.style.height = img_i["height"];
    c_img.style.width = img_i["width"];
    c_img.style.backgroundImage = "url('" + item["img_link"] + "')";
    c_img.style.backgroundSize = img_i["backgroundSize"]; 
    c_img.style.cursor = "pointer";
    c_img.href= item["listen_link"];
    c_img.target = img_i["target"];
    //c_img.className = "Compositions-content";
    c_elm.appendChild(c_img);


    // Creating info sidebar
    sif_d = d_i["info_div"]
    c_sub_info_d = document.createElement("DIV")
    c_sub_info_d.style.position = sif_d["position"];
    c_sub_info_d.style.left = sif_d["left"];
    c_sub_info_d.style.top = sif_d["top"];
    c_sub_info_d.style.overflow = sif_d["overflow"];
    c_sub_info_d.style.height = sif_d["height"];
    c_sub_info_d.style.width = sif_d["width"];


    // Creating title
    ttl_i = d_i["info_div"]["title_info"]
    c_ttl = document.createElement("DIV")
    c_ttl.style.position = ttl_i["position"];
    c_ttl.style.left = ttl_i["left"];
    c_ttl.style.top = ttl_i["top"];
    c_ttl.style.height = ttl_i["height"];
    c_ttl.style.width = ttl_i["width"];
    c_ttl.style.textAlign = ttl_i["textAlign"];
    ttl_p = document.createElement("P");
    ttl_p.style.fontSize = ttl_i["fontSize"];
    ttl_p.style.fontWeight = ttl_i["fontWeight"];
    ttl_p.style.fontFamily = ttl_i["fontFamily"];
    ttl_p.innerHTML = item["album_name"]
    c_ttl.appendChild(ttl_p);
    c_sub_info_d.appendChild(c_ttl);

    // Creating Artist Name
    art_i = d_i["info_div"]["artist_info"]
    //Creating Purchase link
    artst_h = document.createElement("H3");
    artst_h.style.fontSize = art_i["fontSize"];
    artst_h.style.color = art_i["fontColor"];
    artst_h.style.fontFamily = art_i["fontFamily"];
    artst_h.style.fontStyle = art_i["fontStyle"];
    artst_h.style.position = art_i["position"];
    artst_h.style.top = art_i["top"];
    artst_h.style.left = art_i["left"];
    artst_a = document.createElement("A");
    if (!(item["artist_website"] == "")) {
        artst_a.href = item["artist_website"]
        artst_a.target = "_blank";
    }
    artst_a.innerHTML = item["artist_name"]; 
    artst_h.appendChild(artst_a);
    c_sub_info_d.appendChild(artst_h);



    // Creating Listen/Purchase button 
    purch_i = d_i["info_div"]["purchase_listen_info"]
    c_li_purch = document.createElement("DIV")
    c_li_purch.style.position = purch_i["position"];
    c_li_purch.style.left = purch_i["left"];
    c_li_purch.style.top = purch_i["top"];
    c_li_purch.style.height = purch_i["height"];
    c_li_purch.style.width = purch_i["width"];
    c_li_purch.style.textAlign = purch_i["textAlign"];

    //Creating Purchase link
    purch_a = document.createElement("A");
    purch_a.style.fontSize = purch_i["fontSize"];
    purch_a.style.color = purch_i["fontColor"];
    purch_a.style.fontFamily = purch_i["fontFamily"];
    purch_a.style.fontStyle = purch_i["fontStyle"];
    purch_a.href = item["purchase_link"];
    purch_text_i = purch_i["purchase_text"]
    purch_a.style.position = purch_text_i["position"]
    purch_a.style.left = purch_text_i["left"],
    purch_a.target = purch_text_i["target"];
    purch_a.innerHTML = purch_text_i["text"]; 
    c_li_purch.appendChild(purch_a);

    //Creating Listen link
    lisn_a = document.createElement("A");
    lisn_a.style.fontSize = purch_i["fontSize"];
    lisn_a.style.color = purch_i["fontColor"];
    lisn_a.style.fontFamily = purch_i["fontFamily"];
    lisn_a.style.fontStyle = purch_i["fontStyle"];
    lisn_a.href = item["audio_link"];


    lisn_text_i = purch_i["listen_text"]
    lisn_a.style.position = lisn_text_i["position"]
    lisn_a.style.left = lisn_text_i["left"]
    lisn_a.target = lisn_text_i["target"];
    lisn_a.innerHTML = lisn_text_i["text"]; 
    c_li_purch.appendChild(lisn_a);


    //Creating Divider 
    divd_p = document.createElement("A");
    divd_p.style.fontSize = purch_i["fontSize"];
    divd_p.style.fontFamily = purch_i["fontFamily"];
    divd_p.href = item["audio_link"];

    divd_text_i = purch_i["divider_text"]

    divd_p.style.color = divd_text_i["fontColor"];
    divd_p.style.position = divd_text_i["position"];
    divd_p.style.left = divd_text_i["left"];
    divd_p.style.top = divd_text_i["top"];
    divd_p.style.textDecoration = "none";
    divd_p.style.cursor = "default";
    divd_p.style.fontStyle = divd_text_i["fontStyle"];
    divd_p.innerHTML = divd_text_i["text"]; 
    c_li_purch.appendChild(divd_p);


    c_sub_info_d.appendChild(c_li_purch);




    // Creating description area
    desc_i = d_i["info_div"]["description_info"]
    c_desc = document.createElement("DIV")
    c_desc.style.position = desc_i["position"];
    c_desc.style.left = desc_i["left"];
    c_desc.style.top = desc_i["top"];
    c_desc.style.height = desc_i["height"];
    c_desc.style.width = desc_i["width"];

    desc_a = document.createElement("P");
    desc_a.style.fontSize = desc_i["fontSize"];
    desc_a.style.color = desc_i["fontColor"];
    desc_a.style.fontStyle = desc_i["fontStyle"];
    desc_a.style.fontFamily = desc_i["fontFamily"];
    desc_a.innerHTML = item["description"].join("");
    c_desc.appendChild(desc_a);
    c_sub_info_d.appendChild(c_desc);



    c_elm.appendChild(c_sub_info_d);

    content_div.appendChild(c_elm);

}

function createCompositionDiv(item, index) {
    /*
     * item: (d) Contains keys
     *     composition_name: (str)
     *     year_composed: (str) num-num
     *     album_name: (str)
     *     video_link: (str)
     *     audio_link: (str)
     *     img_link: (str)
     *     purchase_link: (str)
     *     description: list<str>
     *     instrumentation: (str)
     *
     */
    c_elm = document.createElement("DIV")
    
    //composition elements div info:
    d_i = comp_i["div_info"];
    c_elm.style.height = d_i["height"].toString() + "px";
    h_val = (d_i["init_height"] + index*(d_i["height"] + d_i["space_btwn_divs"])).toString() + "px";
    console.log(h_val);
    c_elm.style.top = h_val ;
    c_elm.style.position = d_i["position"];
    c_elm.style.border = d_i["border_style"];
    c_elm.style.transitionDuration = "1200ms";
    c_elm.className = "Compositions-content";
    c_elm.style.opacity = "0";
    c_elm.style.left = "1500px";
    c_elm.style.width = "0px";

    //Creating image
    img_i = d_i["img_info"]
    c_img = document.createElement("A");
    c_img.style.position = img_i["position"];
    c_img.style.left = img_i["left"];
    c_img.style.top = img_i["top"];
    c_img.style.height = img_i["height"];
    c_img.style.width = img_i["width"];
    c_img.style.backgroundImage = "url('" + item["img_link"] + "')";
    c_img.style.backgroundSize = img_i["backgroundSize"]; 
    c_img.style.cursor = "pointer";
    c_img.href= item["audio_link"];
    c_img.target = img_i["target"];
    //c_img.className = "Compositions-content";
    c_elm.appendChild(c_img);


    // Creating info sidebar
    sif_d = d_i["info_div"]
    c_sub_info_d = document.createElement("DIV")
    c_sub_info_d.style.position = sif_d["position"];
    c_sub_info_d.style.left = sif_d["left"];
    c_sub_info_d.style.top = sif_d["top"];
    c_sub_info_d.style.overflow = sif_d["overflow"];
    c_sub_info_d.style.height = sif_d["height"];
    c_sub_info_d.style.width = sif_d["width"];
    //c_sub_info_d.className = "Compositions-content";


    // Creating title
    ttl_i = d_i["info_div"]["title_info"]
    c_ttl = document.createElement("DIV")
    c_ttl.style.position = ttl_i["position"];
    c_ttl.style.left = ttl_i["left"];
    c_ttl.style.top = ttl_i["top"];
    c_ttl.style.height = ttl_i["height"];
    c_ttl.style.width = ttl_i["width"];
    c_ttl.style.textAlign = ttl_i["textAlign"];
    ttl_p = document.createElement("P");
    ttl_p.style.fontSize = ttl_i["fontSize"];
    ttl_p.style.fontWeight = ttl_i["fontWeight"];
    ttl_p.style.fontFamily = ttl_i["fontFamily"];
    ttl_p.innerHTML = item["composition_name"]
    c_ttl.appendChild(ttl_p);
    //c_ttl.className = "Compositions-content";
    c_sub_info_d.appendChild(c_ttl);


    // Creating Listen/Purchase button 
    purch_i = d_i["info_div"]["purchase_listen_info"]
    c_li_purch = document.createElement("DIV")
    c_li_purch.style.position = purch_i["position"];
    c_li_purch.style.left = purch_i["left"];
    c_li_purch.style.top = purch_i["top"];
    c_li_purch.style.height = purch_i["height"];
    c_li_purch.style.width = purch_i["width"];
    c_li_purch.style.textAlign = purch_i["textAlign"];

    //Creating Purchase link
    purch_a = document.createElement("A");
    purch_a.style.fontSize = purch_i["fontSize"];
    purch_a.style.color = purch_i["fontColor"];
    purch_a.style.fontFamily = purch_i["fontFamily"];
    purch_a.style.fontStyle = purch_i["fontStyle"];
    purch_a.href = item["purchase_link"];
    purch_text_i = purch_i["purchase_text"]
    purch_a.style.position = purch_text_i["position"]
    purch_a.style.left = purch_text_i["left"],
    purch_a.target = purch_text_i["target"];
    purch_a.innerHTML = purch_text_i["text"]; 
    c_li_purch.appendChild(purch_a);

    //Creating Listen link
    lisn_a = document.createElement("A");
    lisn_a.style.fontSize = purch_i["fontSize"];
    lisn_a.style.color = purch_i["fontColor"];
    lisn_a.style.fontFamily = purch_i["fontFamily"];
    lisn_a.style.fontStyle = purch_i["fontStyle"];
    lisn_a.href = item["audio_link"];


    lisn_text_i = purch_i["listen_text"]
    lisn_a.style.position = lisn_text_i["position"]
    lisn_a.style.left = lisn_text_i["left"]
    lisn_a.target = lisn_text_i["target"];
    lisn_a.innerHTML = lisn_text_i["text"]; 
    c_li_purch.appendChild(lisn_a);


    //Creating Divider 
    divd_p = document.createElement("A");
    divd_p.style.fontSize = purch_i["fontSize"];
    divd_p.style.fontFamily = purch_i["fontFamily"];
    divd_p.href = item["audio_link"];

    divd_text_i = purch_i["divider_text"]

    divd_p.style.color = divd_text_i["fontColor"];
    divd_p.style.position = divd_text_i["position"];
    divd_p.style.left = divd_text_i["left"];
    divd_p.style.top = divd_text_i["top"];
    divd_p.style.textDecoration = "none";
    divd_p.style.cursor = "default";
    divd_p.style.fontStyle = divd_text_i["fontStyle"];
    divd_p.innerHTML = divd_text_i["text"]; 
    c_li_purch.appendChild(divd_p);


    c_sub_info_d.appendChild(c_li_purch);



    // Creating description area
    desc_i = d_i["info_div"]["description_info"]
    c_desc = document.createElement("DIV")
    c_desc.style.position = desc_i["position"];
    c_desc.style.left = desc_i["left"];
    c_desc.style.top = desc_i["top"];
    c_desc.style.height = desc_i["height"];
    c_desc.style.width = desc_i["width"];

    desc_a = document.createElement("P");
    desc_a.style.fontSize = desc_i["fontSize"];
    desc_a.style.color = desc_i["fontColor"];
    desc_a.style.fontStyle = desc_i["fontStyle"];
    desc_a.style.fontFamily = desc_i["fontFamily"];
    desc_a.innerHTML = item["description"].join("");
    c_desc.appendChild(desc_a);
    c_sub_info_d.appendChild(c_desc);



    c_elm.appendChild(c_sub_info_d);

    content_div.appendChild(c_elm);


}

function createAsLeaderTitle() {
    // using "disc_i" we create "As Leader" Above the leader albums

    as_ldr_i = disc_i["titles_info"]["as_ldr_i"]
    leader_ttl = document.createElement(as_ldr_i["tagtype"]);
    leader_ttl.style.position = "absolute";
    leader_ttl.innerHTML = as_ldr_i["text"];
    leader_ttl.style.top = as_ldr_i["top"]; 
    leader_ttl.style.left = as_ldr_i["left"]; 
    leader_ttl.style.fontSize = as_ldr_i["fontSize"]; 
    leader_ttl.style.fontWeight = as_ldr_i["fontWeight"]; 
    leader_ttl.style.fontFamily = as_ldr_i["fontFamily"]; 
    leader_ttl.className = "Discography-content";


    leader_ttl.style.left = "1500px"; 
    leader_ttl.style.opacity = "0";

    content_div.appendChild(leader_ttl);

}

function createAsSidemanTitle() {
    // using "disc_i" we create "As Sideman" Below the leader albums
    // but above the sideman albums
    as_sdmn_i = disc_i["titles_info"]["as_sdmn_i"]

    // We calculate the starting point for this based 
    // on amount of "Leader" Albums
    strt_pnt = disc_i["div_info"]["init_height"] + 
                    (disc_i["div_info"]["height"] + disc_i["div_info"]["space_btwn_divs"] ) * (disc_i["leader_discography_info_list"].length) +
                    as_sdmn_i["top"];



    as_sdmn_i = disc_i["titles_info"]["as_sdmn_i"]
    sideman_ttl = document.createElement(as_sdmn_i["tagtype"]);
    sideman_ttl.innerHTML = as_sdmn_i["text"];
    sideman_ttl.style.position = "absolute";
    sideman_ttl.style.top = strt_pnt.toString() + "px"; 
    sideman_ttl.style.fontSize = as_sdmn_i["fontSize"].toString() + "px"; 
    sideman_ttl.style.fontWeight = as_sdmn_i["fontWeight"]; 
    sideman_ttl.style.fontFamily = as_sdmn_i["fontFamily"]; 
    sideman_ttl.className = "Discography-content";


    sideman_ttl.style.left = "1500px"; 
    sideman_ttl.style.opacity = "0";

    content_div.appendChild(sideman_ttl);

    return strt_pnt + as_sdmn_i["fontSize"]*3

}




