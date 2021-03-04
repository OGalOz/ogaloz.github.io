
//TO DO:
//
//  Make text in transcriptions and compositions bigger font
//  make submit buttons actually delete internal text and send a message
//
//
    //  Update transition duration of non-Div entities to 0, use SetTimeOut to Change their width instead
    //
    //
    // Make Home Content in Divs instead of free floating
    //  Make all distances fractions, not hard coded (?)
    //  Give an ID to every element - Index value in list of elems + name of type? e.g. trsc-1, trsc-2, ...
    //  Make all non-active items to display = none!
    //  Use function from TestLayoutFuncs to get proper values
    //  Add divs to the Home elements so the transitions look cleaner baby.
    //  Create resize function to resize all elements based on Resetting
    //    Window Size.
    //
    // Create Home Content

    // There are a few data objects to keep for visualization's sake
    // Currently visible and active content

function FullProgram() {

    //Updating leftmost part of window:
    obiz_dft_d["right_stored_inactive_style"]["left"] = document.documentElement.clientWidth;

    // Creating gradient
    main_div = SetWindowToDiv();
    CreateMenuBar(main_div);
    CreateContentDiv(main_div);
    CreateHomeContent(true);
    CreateCompositionsContent(false);
    CreateTranscriptionsContent(false);
    CreateDiscographyContent(false);
    CreateOtherProjectsContent(false);
    //CreateContactContent(false);

}

function MoveInitializedElementToRightStored(Dom_Obj) {
    // Object is initialized in correct position
    id_to_active_left_and_width[Dom_Obj.id] = {
        "left": Dom_Obj.style.left,
        "width": Dom_Obj.style.width
    }
    LUAddStyleToDOMObj(Dom_Obj, obiz_dft_d["right_stored_inactive_style"])
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
    document.body.style.backgroundImage = "linear-gradient(white, #ecd290, white)";

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
     * TD:
     *     All dimensions fractions
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

    let crnt_btn = document.createElement("btn");
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
    //} else if (btn_name == "Contact") {
    //
    //      btn_obj.setAttribute("onclick", "CreateContactContent(true)");
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

function AddBasicLayoutToIdMap(DOM_obj, id_to_basic_layout_d, basic_layout_d) {
    /*
     * Ensure that DOM_obj already has an id associated
     */
    let crnt_id = DOM_obj.id;
    if (crnt_id != "") {
        id_to_basic_layout_d[crnt_id] = basic_layout_d;
    }
    return id_to_basic_layout_d;

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

        let pressed_button_name = Object.keys(pressed_buttons_d)[0];

        // We get the newly pressed_button object in DOM
        let btn_to_press = document.getElementById(IDify(btn_name) + "-btn-id");

        let btn_info = DefaultVars["Menu_Bar"]["buttons"][btn_name];


        btn_to_press.style.backgroundColor = btn_info["fill_color"];
        btn_to_press.style.color = btn_info["fill_text_color"];


        // We get the pressed_button object in DOM
        if (pressed_button_name) {

            let pressed_btn = document.getElementById(IDify(pressed_button_name) 
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
        let content_div = ClearAndGetContentDiv("Home"); 

        // Home Data is under home_i

        // We prepare the buttons:
        UpdateButtons("Home");

        // Then we check if Home has already been created or not
        if ("Home" in created_contents) {
            //You get every element's left, top, and width by its id
            let home_elems = document.getElementsByClassName(IDify("Home") + "-content");

            for (let i=0; i<home_elems.length; i++) {
                let crnt_elem = home_elems[i];

                let elem_info = id_to_active_left_and_width[crnt_elem.id];
                //let crnt_bsc_layout_d = id_to_basic_layout_d[crnt_elem.id];

                crnt_elem.style.opacity = "1";
                LUAddStyleToDOMObj(crnt_elem, elem_info)
               
            }
        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place
            
            let objects_info_d = home_i["home_info_d"];
            let object_names_list = Object.keys(objects_info_d);
            for (let i=0; i < object_names_list.length; i++ ) {
                let obj_name = object_names_list[i];
                LUCreateBlockElementFromInfo(
                    objects_info_d[obj_name],
                    "", 
                    "Home-content")

                let Dom_Obj = document.getElementById(objects_info_d[obj_name]["ids_d"]["id_ext"]);
                id_to_active_left_and_width[Dom_Obj.id] = {
                        "left": Dom_Obj.style.left,
                        "width": Dom_Obj.style.width
                }

            }

            created_contents["Home"] = 1;
        }

        active_content_d["Home"] = 1;
    }
    
}


function emailListSubmitFunc() {
    // When people submit their email to my mailing list, we add
    // a response from a list of  ["Thanks!", "Sweet!", "Awesome!", ...]
    // and the text remains beneath the submit button for 3 seconds,
    // then disappears.
    //event.preventDefault();
    console.log("Email Submitted")

    let sbmt_resp_i = home_i["home_info_list"]["submit_response_text"]



    //We check if home content is active
    if (active_content_d["Home"] === 1) {

        //We clear the email text
        document.getElementById(home_i["home_info_list"]["email_input_bar"]["id"]).value="";
        // We choose a text option to return to user
        let txt_ops = sbmt_resp_i["text_options"];
        let resp_text = txt_ops[Math.floor(Math.random() * txt_ops.length)];
        // We create the element
        let txt_rsp_obj = document.createElement(sbmt_resp_i["tag_type"]);
        txt_rsp_obj.id = sbmt_resp_i["id"];
        content_div.appendChild(txt_rsp_obj);
        LUaddBasicLayout(txt_rsp_obj, sbmt_resp_i["bsc_layout_d"]);
        txt_rsp_obj.innerHTML = resp_text;
        txt_rsp_obj.style.fontSize = sbmt_resp_i["ext_style"]["fontSize"];

        //We remove the text after a certain time using "setTimeout"
        setTimeout( function() {
            content_div.removeChild(txt_rsp_obj)
        }, 2500);

    }


}

function CreateOtherProjectsContent(active_bool) {


    if (!("OtherProjects" in pressed_buttons_d)) {

        if (active_bool) {
            // First we get the content div and clear it out
            let content_div = ClearAndGetContentDiv("OtherProjects"); 
            UpdateButtons("Other Projects");

        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("OtherProjects" in created_contents) {

            //You get every element's left, top, and width by its id
            otherProjects_elems = document.getElementsByClassName(IDify("OtherProjects") + "-content");

            console.log("otherProjects HERE")

            // For all the elements with this class, we make their opacity 1 and move them 
            // to the right location with the right width.
            for (let i=0; i<otherProjects_elems.length; i++) {

                let crnt_elem = otherProjects_elems[i];

                let elem_info = id_to_active_left_and_width[crnt_elem.id];
                //let crnt_bsc_layout_d = id_to_basic_layout_d[crnt_elem.id];

                crnt_elem.style.opacity = "1";
                LUAddStyleToDOMObj(crnt_elem, elem_info)

            }

        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place
            

            let otherProjects_i_l = other_projects_data_i["otherProjects_info_d"];
            console.log(otherProjects_i_l);
            let object_names_list = Object.keys(otherProjects_i_l);
            for (let i=0; i < object_names_list.length; i++ ) {
                let obj_name = object_names_list[i];
                LUCreateBlockElementFromInfo(
                    otherProjects_i_l[obj_name],
                    "", 
                    "OtherProjects-content")

                let Dom_Obj = document.getElementById(otherProjects_i_l[obj_name]["ids_d"]["id_ext"]);
                id_to_active_left_and_width[Dom_Obj.id] = {
                        "left": Dom_Obj.style.left,
                        "width": Dom_Obj.style.width
                }

                MoveInitializedElementToRightStored(Dom_Obj); 

            }

            created_contents["OtherProjects"] = 1;
        }
        
        if (active_bool) {
            active_content_d["OtherProjects"] = 1;
        }
    }

}


function CreateContactContent(active_bool) {


    if (!("Contact" in pressed_buttons_d)) {

        if (active_bool) {
            // First we get the content div and clear it out
            let content_div = ClearAndGetContentDiv("Contact"); 
            UpdateButtons("Contact");

        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Contact" in created_contents) {

            //You get every element's left, top, and width by its id
            contact_elems = document.getElementsByClassName(IDify("Contact") + "-content");

            console.log("CONTACT HERE")

            // For all the elements with this class, we make their opacity 1 and move them 
            // to the right location with the right width.
            for (let i=0; i<contact_elems.length; i++) {

                let crnt_elem = contact_elems[i];

                let elem_info = id_to_active_left_and_width[crnt_elem.id];
                //let crnt_bsc_layout_d = id_to_basic_layout_d[crnt_elem.id];

                crnt_elem.style.opacity = "1";
                LUAddStyleToDOMObj(crnt_elem, elem_info)

            }

        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place
            

            let contact_i_l = contact_data_i["contact_info_d"];
            console.log(contact_i_l);
            let object_names_list = Object.keys(contact_i_l);
            for (let i=0; i < object_names_list.length; i++ ) {
                let obj_name = object_names_list[i];
                LUCreateBlockElementFromInfo(
                    contact_i_l[obj_name],
                    "", 
                    "Contact-content")

                let Dom_Obj = document.getElementById(contact_i_l[obj_name]["ids_d"]["id_ext"]);
                id_to_active_left_and_width[Dom_Obj.id] = {
                        "left": Dom_Obj.style.left,
                        "width": Dom_Obj.style.width
                }

                MoveInitializedElementToRightStored(Dom_Obj); 

            }

            created_contents["Contact"] = 1;
        }
        
        if (active_bool) {
            active_content_d["Contact"] = 1;
        }
    }

}




function CreateDiscographyContent(active_bool) {
    //active_bool is a boolean describing whether you want to create
    // these elements active (in center with opacity 1...) or inactive 
    // (to the side with opacity 0)

    if (!("Discography" in pressed_buttons_d)) {

        if (active_bool) {
            // First we get the content div and clear it out
            let content_div = ClearAndGetContentDiv("Discography"); 

            UpdateButtons("Discography");
        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Discography" in created_contents) {

            //You get every element's left, top, and width by its id
            let disc_elems = document.getElementsByClassName(IDify("Discography") + "-content");

            console.log("DSCG HERE")

            // For all the elements with this class, we make their opacity 1 and move them 
            // to the right location with the right width.
            for (let i=0; i<disc_elems.length; i++) {
                let crnt_elem = disc_elems[i];
                crnt_elem.style.opacity = "1";
                let elem_info = id_to_active_left_and_width[crnt_elem.id];
                crnt_elem.style.left = elem_info["left"];
                crnt_elem.style.width = elem_info["width"];
            }

        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place
            
            // We create the "As Leader" title
            //createAsLeaderTitle();

            let discLeader_i_l = disc_i["leader_discography_info_list"]
            discLeader_i_l.forEach(createDiscographyDiv);
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
            let content_div = ClearAndGetContentDiv("Transcriptions"); 

            UpdateButtons("Transcriptions");
        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Transcriptions" in created_contents) {

            let transc_elems = document.getElementsByClassName(IDify("Transcriptions") + "-content");

            console.log("TS HERE")

            //You get every element's left, top, and width by its id
            for (let i=0; i<transc_elems.length; i++) {
                let crnt_elem = transc_elems[i];
                crnt_elem.style.opacity = "1";
                let elem_info = id_to_active_left_and_width[crnt_elem.id];
                crnt_elem.style.left = elem_info["left"];
                crnt_elem.style.width = elem_info["width"];
                
            }
        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place

            let transc_i_l = transc_i["transcriptions_info_list"]
            transc_i_l.forEach(createTranscriptionDiv);

            /*
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
            */

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
            let content_div = ClearAndGetContentDiv("Compositions"); 

            UpdateButtons("Compositions");
        }

        // comp_i is the name of the data object
        // Then we check if Home has already been created or not
        if ("Compositions" in created_contents) {

            //You get every element's left, top, and width by its id
            let comp_elems = document.getElementsByClassName(IDify("Compositions") + "-content");

            console.log("CP HERE")
            
            // For all the elements with this class, we make their opacity 1 and move them 
            // to the right location with the right width.
            for (let i=0; i<comp_elems.length; i++) {
                let crnt_elem = comp_elems[i];
                crnt_elem.style.opacity = "1";
                let elem_info = id_to_active_left_and_width[crnt_elem.id];
                crnt_elem.style.left = elem_info["left"];
                crnt_elem.style.width = elem_info["width"];
            }

        } else {
            // We create all the elements on the right side with 0 opacity, 
            // and then move them to their final place

            let comp_i_l = comp_i["compositions_info_list"]
            comp_i_l.forEach(createCompositionDiv);

            created_contents["Compositions"] = 1;
        }
        
        if (active_bool) {
            active_content_d["Compositions"] = 1;
        }
    }

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
    let active_name = Object.keys(active_content_d)[0];

    console.log("Clearing Content Div");
    console.log("active: " + active_name);

    // HERE WE CHECK IF THE NEW CONTENT IS IN THE LEFT, IF IT IS, WE MOVE ACTIVE TO THE RIGHT
    // THIS IS THE CASE WHERE THE CONTENT IS NOT IN THE LEFT, IT IS IN RIGHT
    if (!(new_content_name in left_stored_content_d)) {

        // WE MOVE ACTIVE ELEMENTS TO THE LEFT:
        if (active_name) {
            let active_elems = document.getElementsByClassName(IDify(active_name) + "-content");
            for ( let i=0; i<active_elems.length; i++) {
                let active_obj = active_elems[i];
                console.log(active_obj.id);
                if (active_obj.id.includes("-block-div-container-main")) {
                    console.log("Found a main: ")
                    console.log(active_obj)
                    MoveActiveElementToTheLeft(active_obj)
                } else {
                    console.log("non main")
                    setTimeout(function() {
                        MoveActiveElementToTheLeft(active_obj)
                    }, 1000);
                }
            }
            delete active_content_d[active_name];
        }

        // Then, we  move any thing from before from the left stored content to the right
        // in silence

        console.log("Left stored content: ")
        console.log(left_stored_content_d);
        let left_name = Object.keys(left_stored_content_d)[0];

        if (left_name) {
            let left_elems = document.getElementsByClassName(IDify(left_name) + "-content")
            for (i=0; i<left_elems.length; i++) {
                let crnt_left_obj = left_elems[i];
                MoveLeftStoredObjectToTheRight(crnt_left_obj);
                /*
                crnt_left_obj.style.transitionDuration = "0";
                crnt_left_obj.style.left = "1100px";
                //crnt_left_obj.style.display = "none";
                */
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
        
        /*
        //Then we restore transition duration of right content to proper amount
        right_stored_objects = Object.keys(right_stored_content_d);

        for (i = 0; i < right_stored_objects.length; i++) {
            crnt_right_name = right_stored_objects[i];
            crnt_right_elems = document.getElementsByClassName(IDify(crnt_right_name) + "-content");

            for (j = 0; j< crnt_right_elems.length; j++) {
                crnt_right_el = crnt_right_elems[j];
                RestoreTransitionDuration(crnt_right_el);
                //crnt_right_el.style.transitionDuration = "1200ms";
            }
        }
        */

        delete right_stored_content_d[new_content_name];
        // We add the recently moved object from the left to the right

    } else {
        // Now is the case where the new_content_name is stored in the left.
        // We move active content to the right.

        if (active_name) {
            let active_elems = document.getElementsByClassName(IDify(active_name) + "-content");
            for (i=0; i<active_elems.length; i++) {
                let active_obj = active_elems[i];

                if (active_obj.id.includes("-block-div-container-main")) {
                    console.log("Found a main: ")
                    console.log(active_obj)
                    MoveActiveElementToTheRight(active_obj);
                } else {
                    console.log("non main")
                    setTimeout(function() {
                        MoveActiveElementToTheRight(active_obj)
                    }, 1000);
                }
                /*
                active_obj.style.left = "1100px";
                active_obj.style.width = "0px";
                active_obj.style.opacity = "0";
                active_obj.transitionDuration = "0ms";
                */

            }
            delete active_content_d[active_name];
            right_stored_content_d[active_name] = 1;
        }
            // Remove new_content_name from the left stored content 
            delete left_stored_content_d[new_content_name];

    }


    let content_div = document.getElementById("content-div")
    return content_div
}

function MoveActiveElementToTheLeft(Dobj) {
    LUAddStyleToDOMObj(Dobj, obiz_dft_d["left_stored_inactive_style"])
}

function MoveActiveElementToTheRight(Dobj) {
    LUAddStyleToDOMObj(Dobj, obiz_dft_d["right_stored_inactive_style"])
}


function MoveLeftStoredObjectToTheRight(Dobj) {
    // This function could be different than "MoveActiveElementToTheRight"
    // if there are changes in transition Duration
    if (Dobj.id.includes("-block-div-container-main")) {

        //Dobj.style.transitionDuration = "0";
        LUAddStyleToDOMObj(Dobj, obiz_dft_d["right_stored_inactive_style"])
        /*
        setTimeout(function() {
            Dobj.style.transitionDuration = "1200px"
        }
            ,1000)
            */
    }

    LUAddStyleToDOMObj(Dobj, obiz_dft_d["right_stored_inactive_style"])


}

function createTranscriptionDiv(item, index) {
    /*
     *
     * TD: Add id to each element
     *
     * item: (obj) Contains keys
     *      id_base: (str)
     *      song_name: (str)
     *      artist_name: (str)
     *      album_name: (str)
     *      year_of_recording: (str)
     *      date_of_release: (str)
     *      img_link: (str)
     *      audio_link: (str)
     *      purchase_link: (str)
     *      description: list<str>
     *
     * index: the number in the list (Num)
     *
     */

    // Here we create all the divs for the composition
    // This is the list with all the objects to be used
    let block_component_d = transc_i["block_components_d"];
    let current_id_base = item["id_base"]

    // We set the starting height of the object
    block_component_d["main_div"]["size_loc_d"]["t"] =  transc_i["block_info_d"]["init_div_start"]["value"] +
        index*(block_component_d["main_div"]["size_loc_d"]["h"] +
         transc_i["block_info_d"]["space_btwn_divs"]["value"]);

    let block_component_keys_l = Object.keys(block_component_d);

    for (let m=0; m<block_component_keys_l.length; m++) {
        // We initialize the element
        let crnt_elem_info_list = LUCreateBlockElementFromInfo(block_component_d[block_component_keys_l[m]],
            current_id_base, "Transcriptions-content");

    }

    //Here we add the individual pieces (related to item)
    document.getElementById(current_id_base +
        block_component_d["img_container"]["ids_d"]["id_ext"]).href =item["audio_link"];
    document.getElementById(current_id_base +
        block_component_d["img_container"]["ids_d"]["id_ext"]).style.backgroundImage ="url('" + item["img_link"] + "')";
    document.getElementById(current_id_base +
        block_component_d["title_div"]["ids_d"]["id_ext"]).innerHTML =item["song_name"]
    document.getElementById(current_id_base +
        block_component_d["listen_link"]["ids_d"]["id_ext"]).href = item["audio_link"];
    document.getElementById(current_id_base +
        block_component_d["purchase_link"]["ids_d"]["id_ext"]).href =item["purchase_link"];
    document.getElementById(current_id_base +
        block_component_d["desc_text"]["ids_d"]["id_ext"]).innerHTML =item["description"].join("");

    //Artist
    document.getElementById(current_id_base +
        block_component_d["artist_name_div"]["ids_d"]["id_ext"]).innerHTML = "Artist: " + item["artist_name"];
    //Album
    document.getElementById(current_id_base +
        block_component_d["album_name_div"]["ids_d"]["id_ext"]).innerHTML = "Album: " + item["album_name"];
    //Year
    document.getElementById(current_id_base +
        block_component_d["album_year_div"]["ids_d"]["id_ext"]).innerHTML = "Year: " + item["date_of_release"];



    for (let m=0; m<block_component_keys_l.length; m++) {
        let current_id =  current_id_base + block_component_d[block_component_keys_l[m]]["ids_d"]["id_ext"];
        let current_elem = document.getElementById(current_id);
        MoveInitializedElementToRightStored(current_elem);

    }


}



function createDiscographyDiv(item, index) {
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


    // Here we create all the divs for the composition
    // This is the list with all the objects to be used
    let block_component_d = disc_i["block_components_d"];
    let current_id_base = item["id_base"]

    // We set the starting height of the object
    block_component_d["main_div"]["size_loc_d"]["t"] =  disc_i["block_info_d"]["init_div_start"]["value"] + 
        index*(block_component_d["main_div"]["size_loc_d"]["h"] + 
         disc_i["block_info_d"]["space_btwn_divs"]["value"]);

    let block_component_keys_l = Object.keys(block_component_d);

    for (let m=0; m<block_component_keys_l.length; m++) {
        // We initialize the element
        let crnt_elem_info_list = LUCreateBlockElementFromInfo(block_component_d[block_component_keys_l[m]],
            current_id_base, "Discography-content");
         
    }

    //Here we add the individual pieces (related to item)
    document.getElementById(current_id_base + 
        block_component_d["img_container"]["ids_d"]["id_ext"]).href = item["listen_link"];
    document.getElementById(current_id_base + 
        block_component_d["img_container"]["ids_d"]["id_ext"]).style.backgroundImage ="url('" + item["img_link"] + "')";
    document.getElementById(current_id_base + 
        block_component_d["title_div"]["ids_d"]["id_ext"]).innerHTML =item["album_name"];
    document.getElementById(current_id_base + 
        block_component_d["artist_name_div"]["ids_d"]["id_ext"]).innerHTML =item["artist_name"];
    document.getElementById(current_id_base + 
        block_component_d["listen_link"]["ids_d"]["id_ext"]).href = item["listen_link"];
    document.getElementById(current_id_base + 
        block_component_d["purchase_link"]["ids_d"]["id_ext"]).href =item["purchase_link"];
    document.getElementById(current_id_base + 
        block_component_d["desc_text"]["ids_d"]["id_ext"]).innerHTML =item["description"].join("");

    for (let m=0; m<block_component_keys_l.length; m++) {
        let current_id =  current_id_base + block_component_d[block_component_keys_l[m]]["ids_d"]["id_ext"];
        let current_elem = document.getElementById(current_id);
        MoveInitializedElementToRightStored(current_elem); 
         
    }

}






























































function createCompositionDiv(item, index) {
    /*
     *
     *
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
     * index: the number in the list (Num)
     *
     */

    // Here we create all the divs for the composition
    // This is the list with all the objects to be used
    let block_component_d = comp_i["block_components_d"];
    let current_id_base = item["id_base"]

    // We set the starting height of the object
    block_component_d["main_div"]["size_loc_d"]["t"] =  comp_i["block_info_d"]["init_div_start"]["value"] + 
        index*(block_component_d["main_div"]["size_loc_d"]["h"] + 
         comp_i["block_info_d"]["space_btwn_divs"]["value"]);

    let block_component_keys_l = Object.keys(block_component_d);

    for (let m=0; m<block_component_keys_l.length; m++) {
        // We initialize the element
        let crnt_elem_info_list = LUCreateBlockElementFromInfo(block_component_d[block_component_keys_l[m]],
            current_id_base, "Compositions-content");
         
    }

    //Here we add the individual pieces (related to item)
    document.getElementById(current_id_base + 
        block_component_d["img_container"]["ids_d"]["id_ext"]).href =item["audio_link"];
    document.getElementById(current_id_base + 
        block_component_d["img_container"]["ids_d"]["id_ext"]).style.backgroundImage ="url('" + item["img_link"] + "')";
    document.getElementById(current_id_base + 
        block_component_d["title_div"]["ids_d"]["id_ext"]).innerHTML =item["composition_name"]
    document.getElementById(current_id_base + 
        block_component_d["listen_link"]["ids_d"]["id_ext"]).href = item["audio_link"];
    document.getElementById(current_id_base + 
        block_component_d["purchase_link"]["ids_d"]["id_ext"]).href =item["purchase_link"];
    document.getElementById(current_id_base + 
        block_component_d["desc_text"]["ids_d"]["id_ext"]).innerHTML =item["description"].join("");

    for (let m=0; m<block_component_keys_l.length; m++) {
        let current_id =  current_id_base + block_component_d[block_component_keys_l[m]]["ids_d"]["id_ext"];
        let current_elem = document.getElementById(current_id);
        MoveInitializedElementToRightStored(current_elem); 
         
    }


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


    leader_ttl.style.left = "1100px"; 
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


    sideman_ttl.style.left = "1100px"; 
    sideman_ttl.style.opacity = "0";

    content_div.appendChild(sideman_ttl);

    return strt_pnt + as_sdmn_i["fontSize"]*3

}




function GetDimensionsRelativeToElement(DOM_elem, dim_dict) {
    // DOM_elem is a DOM element
    // dim_dict is an object with optional dimensions:
    // top || bottom, left || right, height, width
    // all above values MUST be fractions (Numbers) between 0 and 1.
    // And we return pixel values based on the parent values

    let parent_width = DOM_elem.clientWidth;
    let parent_height = DOM_elem.clientHeight;
    
    let ret_d = {};

    if ("top" in Object.keys(dim_dict)) {
        CheckFrac(dim_dict["top"])
        ret_d["top"] = dim_dict["top"]*parent_height
    }

    if ("height" in Object.keys(dim_dict)) {
        CheckFrac(dim_dict["height"])
        ret_d["height"] = dim_dict["height"]*parent_height
    }

    if ("left" in Object.keys(dim_dict)) {
        CheckFrac(dim_dict["left"])
        ret_d["left"] = dim_dict["left"]*parent_width
    }


    if ("width" in Object.keys(dim_dict)) {
        CheckFrac(dim_dict["width"])
        ret_d["width"] = dim_dict["width"]*parent_width
    }

    return ret_d

}
