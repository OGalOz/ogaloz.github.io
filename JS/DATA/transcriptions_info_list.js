transc_i = {
    "json_type": "page_data",
    "json_name": "transcriptions_page_data",
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
                "fontSize": "27px",
                "fontWeight": "bold",
                "textAlign": "center",
                "fontFamily": "New Century Schoolbook, TeX Gyre Schola, serif"
            },
            "unq_prp": {
            }

        },
        "artist_name_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id_ext": "-info",
                "id_ext": "-artist-name"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.2,
                "l": 0.05,
                "h": 0.15,
                "w": .9
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto",
                "fontSize": "20px",
                "fontWeight": "bold",
                "textAlign": "center",
                "fontFamily": "New Century Schoolbook, TeX Gyre Schola, serif"
            },
            "unq_prp": {
            }

        },
        "album_name_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id_ext": "-info",
                "id_ext": "-album-name"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.35,
                "l": 0.05,
                "h": 0.15,
                "w": .9
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto",
                "fontSize": "20px",
                "fontWeight": "bold",
                "textAlign": "center",
                "fontFamily": "New Century Schoolbook, TeX Gyre Schola, serif"
            },
            "unq_prp": {
            }

        },
        "album_year_div": {
            "tag_type": "DIV",
            "ids_d": {
                "parent_id_ext": "-info",
                "id_ext": "-album-year"
            },
            "size_loc_d": {
                "values_type": "fractions",
                "t": 0.5,
                "l": 0.05,
                "h": 0.1,
                "w": .9
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto",
                "fontSize": "20px",
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
                "t": 0.6,
                "l": 0.05,
                "h": 0.1,
                "w": .9
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
                "fontSize": "20px",
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
                "fontSize": "20px",
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
                "l": 0.48,
                "h": null,
                "w": null
            },
            "ext_style": {
                "position": "absolute",
                "fontSize": "20px",
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
                "t": 0.7,
                "l": 0.07,
                "h": 0.28,
                "w": .88
            },
            "ext_style": {
                "position": "absolute",
                "border": "",
                "overflow": "auto",
                "textAlign": "center"
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

    "transcriptions_info_list": [
    {
    "id_base": "trnsc-ALS",
    "song_name": "A Love Supreme (Complete Album)",
    "artist_name":"John Coltrane",
    "album_name":"A Love Supreme" ,

    "year_of_recording": "1964", 
    "date_of_release" : "1965",
        "img_link": "img/JPEGs/TRSC/Love_Supreme_C_1.jpg",
    "audio_link": "https://youtu.be/WO7zI-mTtZU",
    "purchase_link": "https://gumroad.com/l/ggHl",
    "description": ["This transcription contains all of McCoy's playing on A Love Supreme,",
        " comping and solos, in addition to all of Coltrane's playing.",
        " It also includes the bass solos and the drum solos, but not their comping."]

    }, 
    {
    "id_base": "trnsc-MFV",
    "song_name": "My Funny Valentine (Miles Davis 1964)",
    "artist_name":"Miles Davis",
    "album_name":"My Funny Valentine: Miles Davis in Concert" ,
    "year_of_recording": "1964", 
    "date_of_release" : "1965",
        "img_link": "img/JPEGs/TRSC/My_Funny_Valentine.jpg",
    "audio_link": "https://youtu.be/BpIKfMdUo7o",
    "purchase_link": "https://omree.gumroad.com/l/vstgf",
    "description": ["This transcription contains all of Miles Davis, Herbie Hancock, Miles Davis, Ron Carter and Wayne Shorter,",
        " comping and solos, on the track My Funny Valentine from Live at the Philharmonic 1964"
    ]
    },
    {

    "id_base": "trnsc-DBM",
        "song_name":"Don't Blame Me" ,
        "artist_name":"Thelonious Monk" ,
        "album_name": "Criss Cross",
        "date_of_release": "1963" ,
        "year_of_recording": "1962-1963",
        "img_link": "img/JPEGs/TRSC/DBM_1.jpg",
        "audio_link": "https://youtu.be/FuumSlrhadI",
        "purchase_link":"https://gum.co/KeLRJV",
        "description": ["A transcription of the entire recording"]
    },
    {
    "id_base": "trnsc-CarSht",
        "song_name":"Carolina Shout" ,
        "artist_name":"James P. Johnson",
        "album_name": "?",
        "date_of_release": "1921(?)" ,
        "year_of_recording": "1921(?)",
        "img_link": "img/JPEGs/TRSC/Carolina_Shout_1.jpg",
        "audio_link":"https://youtu.be/JCeZjBQIvIA",
        "purchase_link":"https://gumroad.com/l/qtRtr",
        "description": [""]
    },        
        {
        "id_base": "trnsc-MrJC",
        "song_name":"Mr. JC" ,
        "artist_name":"Kenny Kirkland" ,
        "album_name": "Kenny Kirkland",
        "date_of_release": "1991" ,
        "year_of_recording": "1991",
        "img_link": "img/JPEGs/TRSC/Mr_JC_1.jpg",
        "audio_link":"https://youtu.be/O4SyQWw8MeU",
        "purchase_link":"https://gumroad.com/l/BHEcS",
        "description": ["Kenny's solo, Branford solo"]
        
        },

        {

        "id_base": "trnsc-SMPWC",
    "song_name":"Someday My Prince Will Come" ,
    "artist_name":"Bill Evans" ,
    "album_name": "Portrait in Jazz",
    "date_of_release": "1960" ,
    "year_of_recording": "1959",
        "img_link": "img/JPEGs/TRSC/SDMPWC_BE.jpg",
    "audio_link":"https://youtu.be/5Wd--YgSCfA",
    "purchase_link": "https://gumroad.com/l/QIHIS",
    "description": ["The entire transcription of Bill Evans on the tune."]

    },
        {

        "id_base": "trnsc-ETS",
    "song_name":"East Thirty-Second" ,
    "artist_name":"Lennie Tristano" ,
    "album_name": "Lennie Tristano",
    "date_of_release": "February 1956" ,
    "year_of_recording": "1955",
        "img_link": "img/JPEGs/TRSC/E32.jpg",
    "audio_link":"https://www.youtube.com/watch?v=ekUt9hJ2PHQ",
    "purchase_link":"https://gumroad.com/l/CXtha",
    "description": ["This is the entire Lennie Tristano solo on East Thirty-Second. It includes some of my favorite linear playing."]

    },
    {

        "id_base": "trnsc-Ftpt",
    "song_name": "Footprints" ,
    "artist_name":"Miles Davis" ,
    "album_name": "Miles Smiles",
    "year_of_recording":"1966" ,
    "date_of_release": "February 16, 1967" ,
    "audio_link": "https://youtu.be/1TjgoXf3ivE",
        "img_link": "img/JPEGs/TRSC/Footprints_MS.jpg",
    "purchase_link": "https://gumroad.com/l/xcjwe",
    "description": ["This is a transcription of Miles Davis, Wayne Shorter, and Herbie Hancock (both hands) for the entire duration of the song. Herbie's voicings are worth checking out."]

    },{

        "id_base": "trnsc-FirstTrip",
    "song_name": "First Trip",
    "artist_name": "Herbie Hancock",
    "album_name": "Speak Like A Child" ,
    "year_of_recording": "1968", 
    "date_of_release" : "1968" ,
    "audio_link": "https://www.youtube.com/watch?v=DwV3amShg_w",
        "img_link": "img/JPEGs/TRSC/First_Trip.jpg",
    "purchase_link": "https://gumroad.com/l/GXFA" ,
    "description": ["This is a transcription of Herbie Hancock and Ron Carter on the song First Trip, which was composed by Ron Carter. It has a lot of interesting rhythmic vocabulary, like groupings in 5 and 3 over 4/4 time."]



    },{

        "id_base": "trnsc-GoinHome",
    "song_name": "Goin' Home",
    "artist_name": "Art Tatum",
    "album_name": "Complete Capitol Recordings",

    "year_of_recording": "1949?" , 
    "date_of_release" : "1949?" ,
        "img_link": "img/JPEGs/TRSC/Goin_Home.jpg",
    "audio_link": "https://www.youtube.com/watch?v=gHQYm_mducA" ,
    "purchase_link": "https://gumroad.com/products/jxvS",
    "description": ["Art Tatum's interpretation of the 'Largo' theme from Dvorak's New World Symphony."]

    },{

        "id_base": "trnsc-JustSittinRockin",
    "song_name": "Just A-Sittin' and A-Rockin'",
    "artist_name": "Art Tatum",
    "album_name": "The Complete Pablo Solo Masterpieces - Disc 2",

    "year_of_recording": "1953-1955?", 
    "date_of_release" : "1991?",
        "img_link": "img/JPEGs/TRSC/Just_A_Sittin_And_A_Rockin.jpg",
    "audio_link": "https://youtu.be/FPD0IR9kG44",
    "purchase_link": "https://gumroad.com/products/UEsAQ" ,
    "description": ["One of the most harmonically and rhythmically adventurous of Art Tatum's recordings that I've heard."]



    },{

        "id_base": "trnsc-Humoresque",
    "song_name": "Humoresque",
    "artist_name": "Art Tatum",
    "album_name": "Piano Starts Here",

    "year_of_recording": "?", 
        "img_link": "img/JPEGs/TRSC/Humoresque.jpg",
    "date_of_release" :"1968?",
    "audio_link": "https://youtu.be/qQiB2BfMmH4",
    "purchase_link": "https://gumroad.com/products/UEsAQ",
    "description": ["Art Tatum's interpretation of Dvorak's theme 'Humoresque'. It was originally composed by Dvorak in 1894."]



    }, {

           "id_base": "trnsc-TaPoBg",
       "song_name": "Tatum Pole Boogie",
       "artist_name": "Art Tatum",
       "album_name": "Piano Starts Here",

       "year_of_recording": "?", 
       "date_of_release" : "1968?",
           "img_link": "img/JPEGs/TRSC/TPBgi.jpg",
       "audio_link": "https://youtu.be/SyMA56lVyQ8",
       "purchase_link": "https://gumroad.com/products/GlxQ",
       "description": ["This is an Art Tatum original composition, it goes between broken boogie-woogie, octave left hand boogie, and stride. It is one of my favorite Art Tatum recordings ever. It explores a variety of techniques."]

    }, {

        "id_base": "trnsc-SplitKick",
    "song_name": "Split Kick",
    "artist_name": "Art Blakey Quintet",
    "album_name": "A Night at Birdland Vol. 1",
    "year_of_recording":"1954" , 
    "date_of_release" : "July 1954" ,
        "img_link": "img/JPEGs/TRSC/SpKk.jpg",
    "audio_link": "https://www.youtube.com/watch?v=cB2qGkHZ8Bw" ,
    "purchase_link":"https://gumroad.com/products/NQCPc" ,
    "description": ["A transcription of  Clifford Brown, Lou Donaldson, and Horace Silver (includes comping) on the tune 'Split Kick', which is a contrafact on 'There Will Never Be Another You.'"]

    }]
}




