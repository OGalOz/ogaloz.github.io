comp_i = {
    "json_type": "page_data",
    "json_name": "compositions_page_data",
    "comp_title": "Compositions",
    "block_info_d": {
        "space_btwn_divs": {
            "values_type": "fixed",
            "value": 30
        },
        "init_div_start": {
            "values_type": "fixed",
            "value": 75
        },
        "all_components_style": {
        }
    },
    "block_components_d": {
        "main_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id": "content-div",
                "id_ext": "-block-div-container-main"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "t": null,
                "l": 300,
                "h": 500,
                "w": 750
            },
            "ext_style": {
                "position": "absolute",
                "border": "1px solid lightgray",
                "transitionDuration": "1200ms"
            },
            "unq_prp": {
            }
        },
        "img_container": {
            "tag_type": "A",
            "ids_d": {
                "parent_id_ext": "-block-div-container-main",
                "id_ext": "-img"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0,
                "l": 0,
                "h": .98,
                "w": 0.49
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "backgroundSize": "contain",
                "cursor": "pointer"
            },
            "unq_prp": {
                "target": "_blank"
            }

        },
        "info_cont": {
                "tag_type": "DIV",
                "ids_d": {
                    "parent_id_ext": "-block-div-container-main",
                    "id_ext": "-info"
                },
                "size_loc_d": {
                    "values_type": "fractions",
                    "t": 0.01,
                    "l": 0.5,
                    "h": .98,
                    "w": 0.49
                },
                "ext_style": {
                    "position": "absolute",
                    "border": "",
                    "overflow": "auto"
                },
                "unq_prp": {
                }
        },
        "title_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id_ext": "-info",
                "id_ext": "-title-div"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.05,
                "l": 0.05,
                "h": 0.15,
                "w": .9
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto",
                "fontSize": "30px",
                "fontWeight": "bold",
                "textAlign": "center",
                "fontFamily": "New Century Schoolbook, TeX Gyre Schola, serif"
            },
            "unq_prp": {
            }

        },
        "purch_listen_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id_ext": "-info",
                "id_ext": "-purch-listen-div"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.15,
                "l": 0.01,
                "h": 0.15,
                "w": 1
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto"
            },
            "unq_prp": {
            }
        },
        "listen_link": {
            "tag_type": "A",
            "ids_d": {
                "parent_id_ext": "-purch-listen-div",
                "id_ext": "-listen-link"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.1,
                "l": 0.27,
                "h": null,
                "w": null
            },
            "ext_style": {
                "position": "absolute",
                "fontSize": "30px",
                "fontStyle": "oblique",
                "fontColor": "darkblue",
                "textAlign": "center",
                "fontFamily": "Optima, sans-serif"
            },
            "unq_prp": {
                "innerHTML": "Listen",
                "target": "_blank"
            }


        },
        "purchase_link": {
            "tag_type": "A",
            "ids_d": {
                "parent_id_ext": "-purch-listen-div",
                "id_ext": "-purchase-link"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.1,
                "l": 0.55,
                "h": null,
                "w": null
            },
            "ext_style": {
                "position": "absolute",
                "fontSize": "30px",
                "fontStyle": "oblique",
                "fontColor": "darkblue",
                "textAlign": "center",
                "fontFamily": "Optima, sans-serif"
            },
            "unq_prp": {
                "innerHTML": "Purchase",
                "target": "_blank"
            }
        },
        "divider_text": {
            "tag_type": "A",
            "ids_d": {
                "parent_id_ext": "-purch-listen-div",
                "id_ext": "-divider"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.1,
                "l": 0.5,
                "h": null,
                "w": null
            },
            "ext_style": {
                "position": "absolute",
                "fontSize": "30px",
                "fontStyle": "normal",
                "fontColor": "black",
                "textAlign": "center",
                "textDecoration": "none",
                "cursor": "default",
                "fontFamily": "Optima, sans-serif"
            },
            "unq_prp": {
                "innerHTML": "|"
            }
        },
        "desc_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id_ext": "-info",
                "id_ext": "-description-div"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.35,
                "l": 0.07,
                "h": 0.59,
                "w": .88
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto"
            },
            "unq_prp": {
            }
        },
        "desc_text": {
            "tag_type": "P",
            "ids_d": {
                "parent_id_ext": "-description-div",
                "id_ext": "-description-text"
            },
            "size_loc_d": {
                "values_type": "fixed",
                "t": null,
                "l": null,
                "h": null,
                "w": null
            },
            "ext_style": {
                "fontSize": "25px",
                "fontStyle": "normal",
                "fontColor": "black",
                "fontFamily": "serif"
            },
            "unq_prp": {
            }
        }
    },
    "compositions_info_list": [ 
    {
    "id_base": "storm-comp",
    "composition_name": "Storm",
    "year_composed":"2017-2019" ,
    "album_name":"Storm" ,
    "video_link": "https://youtu.be/DGDYrsnsJ9A",
    "audio_link": "https://youtu.be/DGDYrsnsJ9A",
    "img_link": "img/JPEGs/COMP/Storm_1st.jpg",
    "purchase_link": "https://gumroad.com/l/TDYFd",
    "description": ["Evolution, Part 2. A sequel to the piece 'Zephyr', from the album 'Village'. This piece ",
                    "was written with the momentum of Zephyr; the last part of the piece is supposed to represent",
                    " the rise and fall of a storm, whereas the beginning is an ominous forecast."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"
    },
    {    
    "id_base": "woods-comp",
    "composition_name": "Woods",
    "year_composed":"2017-2019" ,
    "album_name":"Village" ,
    "video_link": "",
    "audio_link":"https://youtu.be/fD6AGdlIwks",
    "img_link": "img/JPEGs/COMP/Woods_1st.jpg",
    "purchase_link": "https://gumroad.com/l/RIjor",
    "description": ["From the 'Village' Set of Compositions; this piece represents the woods surrounding the village. ",
                    "It works on playing polyrhythms and keeping clave in 6/8." ],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"

    },
        {
    "id_base": "finger-dance-comp",
    "composition_name": "Finger Dance",
    "year_composed":"2019" ,
    "album_name":"Finger Dance" ,
    "video_link": "https://youtu.be/dXzcszgmU-E",
    "audio_link":"https://youtu.be/dXzcszgmU-E",
    "img_link": "img/JPEGs/COMP/Finger_Dance_1st.jpg",
    "purchase_link": "https://omree.gumroad.com/l/pIWhz",
    "description": ["A relatively light piece which I thought sounded a bit like an old-time dance.",
                    " It's technically challenging in that there is specific ",
                    "rhythmic interplay between the two hands."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"
    },

    {
    "id_base": "zephyr-comp",
    "composition_name": "Zephyr",
    "year_composed":"2018-2019" ,
    "album_name":"Village" ,

    "video_link": "",
    "img_link": "img/JPEGs/COMP/Zephyr_1st.jpg",
    "audio_link":"https://youtu.be/IWJfO1z1eYc1",
    "purchase_link": "https://gum.co/nIdbs",
    "description": ["From the 'Village' Set of Compositions; this piece represents an important change in the ",
                    "village over time. I wrote this keeping the concept of a Ballad in mind: a kind of serious story",
                    " with multiple distinct sections."],
    "alternate_desc": [" I consider this piece and 'Storm' to be my most ambitious ",
                    "and difficult compositions."],
    "instrumentation": "Solo Piano"

    },
 {
    "id_base": "dog-comp",
    "composition_name": "Dog",
    "year_composed":"2017-2019" ,
    "album_name":"Village" ,

    "video_link": "",
    "img_link": "img/JPEGs/COMP/Dog_1st.jpg",
    "audio_link":"https://youtu.be/cPbgNPiPkwU",
    "purchase_link": "https://gum.co/WiWPq",
    "description": ["From the 'Village' Set of Compositions; this piece represents a dog in the village. I tried ",
                    "to capture the energy of a dog within the first part of the piece"],
    "alternate_desc": [" (It has 3 sections), and I ",
                    "quickly realized that an entire piece like that might be too much energy, so the next sections",
                    " are a bit more tame."],
    "instrumentation": "Solo Piano"

    },
        {
    "id_base": "seeking-comp",
    "composition_name": "Seeking",
    "year_composed":"2014-2016" ,
    "album_name":"None" ,

    "video_link": "",
    "img_link": "img/JPEGs/COMP/Seeking_1st.jpg",
    "audio_link":"https://youtu.be/OpmU5PIvOcY",
    "purchase_link": "https://gumroad.com/l/ZDAmI",
    "description": ["This piece is kind of a lullaby, a relaxing piece which has simple melodies, but the counterpoint",
                    " underneath the melodies is pretty challenging. I wrote it as an etude to work on counterpoint ",
                    "and to practice bringing out certain voices with different fingers "],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"

        },
    {
    "id_base": "reflection-comp",
    "composition_name": "Reflection",
    "year_composed":"2015-2019" ,
    "album_name":"Village" ,
    "img_link": "img/JPEGs/COMP/Reflection_1st.jpg",

    "video_link": "",
    "purchase_link": "https://gumroad.com/l/zXIJR",
    "audio_link":"https://youtu.be/x9IoGJSK4rs",
    "description": ["From the 'Village' Set of Compositions; this piece represents a reflection over the past.",
                    " I think the primary concept which this piece reflects is mortality. That was the inspiration",
                    " for the original melody, but eventually the piece just grew out of that idea into something else."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"

    },

    {

    "id_base": "folktale-comp",
    "composition_name": "Folktale",
    "year_composed":"2012-2019" ,
    "album_name":"Village" ,

    "video_link": "",
    "audio_link":"https://youtu.be/XMl_HWtPoi0",
    "img_link": "img/JPEGs/COMP/Folktale_1st.jpg",
    "purchase_link": "https://gumroad.com/l/IfNZE",
    "description": ["From the 'Village' Set of Compositions; this piece represents (abstractly) a somber Folktale ",
                    "told in the village."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"
    },
       
        {
    "id_base": "industry-comp",
    "composition_name": "Industry",
    "year_composed":"2017-2019" ,
    "album_name":"Village" ,

    "video_link": "",
    "img_link": "img/JPEGs/COMP/Industry_1st.jpg",
    "audio_link":"https://youtu.be/c-ACZOEzPx8",
    "purchase_link": "https://gumroad.com/l/PThmh",
    "description": ["From the 'Village' Set of Compositions; this piece represents the effect of Industry on the village.",
                    " More generally, it is supposed to capture the feeling of the ceaseless effects of technology ",
                    "on the human spirit."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"

    },
    {    
    "id_base": "meadows-comp",
    "composition_name": "Meadows",
    "year_composed":"2018" ,
    "album_name":"Village",

    "video_link": "",
    "img_link": "img/JPEGs/COMP/Meadows_1st.jpg",
    "audio_link":"https://youtu.be/j9y9MBtPs4w",
    "purchase_link": "https://gumroad.com/l/vXIsq",
    "description": ["From the 'Village' Set of Compositions; this piece represents the Meadows in the Village.",
                    " This is by far the most playable composition out of any on the Village collection."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"
    },
    {    
    "id_base": "solostudypt1-comp",
        "composition_name": "Solo Study Pt. 1",
    "year_composed":"2014-2016" ,
    "album_name":"" ,

    "video_link": "https://youtu.be/QPBx4iVtO3g",
    "img_link": "img/JPEGs/COMP/Solo_Study_1_1st.jpg",
    "audio_link":"https://youtu.be/QPBx4iVtO3g",
    "purchase_link": "https://gum.co/KURBnq",
    "description": ["An etude for playing fast alternating rhythms where both hands play one line."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"


}, 
    {    
    "id_base": "solostudypt2-comp",
        "composition_name": "Solo Study Pt. 2",
    "year_composed":"2014-2016" ,
    "album_name":"" ,

    "video_link": "https://youtu.be/AnhLtU4lUSM",
    "img_link": "img/JPEGs/COMP/Solo_Study_2_1st.jpg",
    "audio_link":"https://youtu.be/AnhLtU4lUSM",
    "purchase_link": "https://gum.co/xCMFx",
    "description": ["An etude for playing fast alternating rhythms where both hands play separate lines."],
    "alternate_desc": [],
    "instrumentation": "Solo Piano"
    }
    ]
}
