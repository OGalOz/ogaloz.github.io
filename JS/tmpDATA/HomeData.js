home_i = {
    "json_type": "page_data",
    "json_name": "home_page_data",
    "home_info_d": {
        "home_title_div_i": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id": "content-div",
                "id_ext": "home-title-div-block-div-container-main"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 400, 
                "t": 50,
                "h": 100,
                "w": 550,
                "pos": "absolute",
                "bdr": ""
            },
            "ext_style": {
                "textAlign": "center",
                "position": "absolute",
                "border": "",
                "transitionDuration": "1200ms"
            }
        },
       "home_title_text_i": {
           "tag_type": "P",
            "ids_d": {
                "id_ext": "home-title",
                "parent_id": "home-title-div-block-div-container-main",
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 0, 
                "t": 0,
                "h": 100,
                "w": 550
            },
           "ext_style": {
               "position": "absolute",
               "border": "",
               "fontSize": "40px",
               "fontWeight": "bold",
               "fontFamily": "Georgia, sans-serif",
                },
           "unq_prp": {
               "innerHTML": "Omree's Music Website"
           }
        },
        "home_image_div": {
            "tag_type": "DIV",
            "ids_d": {
                "id_ext": "home-img-div-block-div-container-main",
                "parent_id": "content-div"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 420, 
                "t": 200,
                "h": 333,
                "w": 500
            },
            "ext_style": {
                "position": "absolute",
                "backgroundSize": "contain",
                "backgroundImage": "url('img/JPEGs/HOME/IMG_6453.JPG')",
                "border": "2px solid gray",
                "transitionDuration": "1200ms"
            },
            "unq_prp": {
            }
        },
       "main_image_i": {
            "ids_d": {
                "id_ext": "home-img-block-div-container-main",
                "parent_id": "content-div"
            },
            "img_link": "img/JPEGs/HOME/IMG_6453.JPG",
            "size_loc_d": {
                "values_type": "fractions",
                "l": 0, 
                "t": 0,
                "h": 1,
                "w": 1
            },
           "ext_style": {
               "position": "absolute",
               "border": "",
               "backgroundSize": "contain",
                "transitionDuration": "1200ms"
           },
           "unq_prp": {
           }

       },
       "subtext_div": {
            "ids_d": {
                "id_ext": "subtext-div-block-div-container-main",
                "parent_id": "content-div"
            },
           "tag_type": "DIV",
            "size_loc_d": {
                "values_type": "fixed",
                "l": 325, 
                "t": 575,
                "h": 150,
                "w": 750
            },
           "ext_style": {
               "position": "absolute",
               "textAlign": "center",
               "fontSize": "25px",
               "fontFamily": "Georgia, sans-serif",
               "transitionDuration": "1200ms"
           }
       },
        "subtext_i": {
            "tag_type": "P",
            "ids_d": {
                "ext_id": "subtext-text",
                "parent_id": "subtext-div-block-div-container-main" 
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 10, 
                "t": 10,
                "h": 290,
                "w": 740
            },
            "ext_style": {
                "position": "absolute",
                "fontSize": "25px"
            },
            "unq_prp": {
                "innerHTML": "Omree Gal-Oz is an SF Bay Area-based composer/performer. His email is 'omreeg at gmail dot com' (spelled in the usual email format). To get onto his mailing list, enter your email below."
            }
        },
        "email_input_bar": {
            "tag_type": "INPUT",
            "ids_d": { 
                "id_ext": "email-input-bar-block-div-container-main",
                "parent_id": "content-div"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 420, 
                "t": 740,
                "h": 70,
                "w": 500
            },
            "ext_style": {
                "position": "absolute",
                "border": "2px solid gray",
                "fontSize": "25px",
                "transitionDuration": "1200ms"

            }
        },
        "email_submit_btn": {
            "tag_type": "BUTTON",
            "ids_d": {
                "id_ext": "email-submit-btn-block-div-container-main",
                "parent_id": "content-div"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 500, 
                "t": 820,
                "h": 50,
                "w": 350
            },
            "ext_style": {
                "position": "absolute",
                "border": "2px solid gray",
                "fontSize": "25px",
                "transitionDuration": "1200ms"

            },
            "unq_prp": {
                "innerHTML": "Submit"
            }
        },
        "submit_response_text": {
            "tag_type": "H3",
            "ids_d": {
                "id_ext": "email-submit-response-text-block-div-container-main",
                "parent_id": "content-div"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 500, 
                "t": 900,
                "h": 50,
                "w": 350
            },
            "ext_style": {
                "position": "absolute",
                "fontSize": "25px",
                "transitionDuration": "1200ms"

            },
            "text_options": ["Thanks!", "Sweet!", "Awesome!", "Fantastic!"],
            "appears_for_ms": 3000
        },
        "empty_iframe": {
            "tag_type": "IFRAME",
            "ids_d": {
                "id_ext": "empty-sbmt-iframe-block-div-container-main",
                "parent_id": "content-div"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "l": 0, 
                "t": 0,
                "h": 0,
                "w": 0
            },
            "ext_style": {
                "position": "absolute",
                "display": "none",
            },
            "unq_prp": {
                "name": "placeholder"
            }
        }
    }
}
